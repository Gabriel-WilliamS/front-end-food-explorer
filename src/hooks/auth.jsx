import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";
const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/login", { email, password });
      const { user, token } = response.data;

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ user, token });

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
      localStorage.setItem("@foodexplorer:token", token);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Erro ao fazer login");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@foodexplorer:token");
    localStorage.removeItem("@foodexplorer:user");

    setData({});
  }

  // async function updateProfile({ user, avatarFile }) {
  //   try {
  //     if (avatarFile) {
  //       const fileUploadForm = new FormData();
  //       fileUploadForm.append("avatar", avatarFile);

  //       const response = await api.patch("/users/avatar", fileUploadForm);
  //       user.avatar = response.data.avatar;
  //     }
  //     const response = await api.put("/users", user);

  //     delete response.data.user.password;

  //     localStorage.setItem(
  //       "@foodexplorer:user",
  //       JSON.stringify(response.data.user)
  //     );

  //     setData({ user: response.data.user, token: data.token });
  //     alert("Perfil atualizado!");
  //   } catch (error) {
  //     if (error.response) {
  //       alert(error.response.data.message);
  //     } else {
  //       alert("Não foi possivel atualizar o perfil");
  //     }
  //   }
  // }

  useEffect(() => {
    const token = localStorage.getItem("@foodexplorer:token");
    const user = localStorage.getItem("@foodexplorer:user");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ user: JSON.parse(user), token });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user: data.user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth, AuthContext };
