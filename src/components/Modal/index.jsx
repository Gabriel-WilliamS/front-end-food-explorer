import { Container, ButtonContainer, Header } from "./styles";
import { Button } from "../Button";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useRef } from "react";

export function Modal({
  openModal = false,
  setOpenModal,
  onHandleDeleteCategory,
  categoryDelete
}) {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setOpenModal(false);
    }
  };

  function handleDeleteCategory() {
    onHandleDeleteCategory(categoryDelete);
  }
  return openModal == true ? (
    <Container ref={modalRef} onClick={closeModal}>
      <div>
        <Header>
          <h2>Alerta!</h2>
          <AiOutlineCloseCircle size={20} onClick={() => setOpenModal(false)} />
        </Header>
        <p>Deseja realmente excluir essa categoria ?</p>

        <ButtonContainer>
          <Button name="Não" onClick={() => setOpenModal(false)} />
          <Button name="Sim" onClick={handleDeleteCategory} />
        </ButtonContainer>
      </div>
    </Container>
  ) : (
    <></>
  );
}
