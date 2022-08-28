import { Header, Section, ProductSlider, Footer } from "../../components";
import { Container, ContentWrapper } from "./styles";

import frutsBanner from "../../assets/img/frutsBanner.png";
import torrada from "../../assets/img/Maskgroup-1.png";
import saladaRavanello from "../../assets/img/salada-ravanello.png";
import spaguettiGambe from "../../assets/img/spaguetti-gambe.png";
import prugnaPie from "../../assets/img/prugna-pie.png";
import peachyPastrie from "../../assets/img/peachy-pastrie.png";
import macarons from "../../assets/img/macarons.png";
import espresso from "../../assets/img/espresso.png";
import sucoMaracuja from "../../assets/img/suco-de-maracuja.png";
import pomoBourbon from "../../assets/img/pomo-bourbon.png";
import { useProductsOnCart } from "../../hooks/useProductsOnCart";
import { useState } from "react";
import Fuse from "fuse.js";
import { useFavoritesProducts } from "../../hooks/useFavoritesProducts";

export function Home() {
  const { productsInCart, setProductsInCart } = useProductsOnCart();
  const { favoritesProducts, setFavoritesProducts } = useFavoritesProducts();
  const [search, setSearch] = useState("");

  function handleAddProductOnCart(newProduct) {
    let newProducts = [...productsInCart];

    const verifyProduct = newProducts.find(
      (product) => product.id === newProduct.id
    );

    if (verifyProduct) {
      newProducts = newProducts.map((product) => {
        if (product.id === newProduct.id) {
          const amount = product.amount + newProduct.amount;
          return { ...product, amount };
        } else {
          return product;
        }
      });
    } else {
      newProducts.push(newProduct);
    }

    setProductsInCart(newProducts);

    localStorage.setItem(
      "@foodExplorer/productsInCart",
      JSON.stringify(newProducts)
    );
  }

  function handleAddEndRemoveProductOnFavorite(newProductFavorited) {
    const productIsFavorited = favoritesProducts.find(
      (product) => product.id == newProductFavorited.id
    );

    if (productIsFavorited) {
      const productsFavorited = favoritesProducts.filter(
        (product) => product.id != newProductFavorited.id
      );
      setFavoritesProducts(productsFavorited);
    } else {
      setFavoritesProducts((oldState) => [...oldState, newProductFavorited]);
    }
  }

  const data = [
    {
      category: "Pratos principais",
      products: [
        {
          id: 1,
          name: "Salada Ravanella",
          description:
            "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.",
          price: "3.57",
          ingredients: ["alface", "tomate", "rabanete", "pao naan"],
          image: saladaRavanello,
          isFavorited: true
        },
        {
          id: 2,
          name: "Spaguetti Gambe",
          description:
            "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.",
          price: "9.97",
          ingredients: ["alface", "tomate", "rabanete", "pao naan"],
          image: spaguettiGambe,
          isFavorited: false
        },
        {
          id: 3,
          name: "Torradas de Parma",
          description:
            "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.",
          price: "10.99",
          ingredients: ["alface", "tomate", "rabanete", "pao naan"],
          image: torrada,
          isFavorited: false
        },
        {
          id: 3,
          name: "Torradas de pasta",
          description:
            "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.",
          price: "10.99",
          ingredients: ["alface", "tomate", "rabanete", "pao naan"],
          image: torrada,
          isFavorited: true
        }
      ]
    },
    {
      category: "Sobremesas",
      products: [
        {
          id: 4,
          name: "Prugna Pie",
          description:
            "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
          price: "25.97",
          ingredients: ["ameixa", "farinha"],
          image: prugnaPie,
          isFavorited: false
        },
        {
          id: 5,
          name: "Peachy pastrie",
          description:
            "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
          price: "32.97",
          ingredients: ["ameixa", "farinha"],
          image: peachyPastrie,
          isFavorited: true
        },
        {
          id: 6,
          name: "Macarons",
          description:
            "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
          price: "49.97",
          ingredients: ["ameixa", "farinha"],
          image: macarons,
          isFavorited: false
        },
        {
          id: 4,
          name: "Prugna Pie",
          description:
            "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
          price: "25.97",
          ingredients: ["ameixa", "farinha"],
          image: prugnaPie,
          isFavorited: true
        }
      ]
    },
    {
      category: "Bebidas",
      products: [
        {
          id: 7,
          name: "Espressola",
          description:
            "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
          price: "25.97",
          ingredients: ["ameixa", "farinha"],
          image: espresso,
          isFavorited: false
        },
        {
          id: 8,
          name: "Suco de maracuja",
          description:
            "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
          price: "25.97",
          ingredients: ["ameixa", "farinha"],
          image: sucoMaracuja,
          isFavorited: true
        },
        {
          id: 9,
          name: "Pomo bourbon",
          description:
            "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
          price: "25.97",
          ingredients: ["ameixa", "farinha"],
          image: pomoBourbon,
          isFavorited: false
        },
        {
          id: 7,
          name: "Espresso",
          description:
            "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
          price: "25.97",
          ingredients: ["ameixa", "farinha"],
          image: espresso,
          isFavorited: true
        }
      ]
    }
  ];

  const fuse = new Fuse(data, {
    keys: ["products.name"],
    isCaseSensitive: false,
    findAllMatches: false,
    includeMatches: true,
    ignoreLocation: true,
    threshold: 0.3
  });

  const filteredItems = search.length > 0 ? fuse.search(search) : data;
  if (search.length > 0) {
    function compare(a, b) {
      if (a.refIndex < b.refIndex) {
        return -1;
      }
      if (a.refIndex > b.refIndex) {
        return 1;
      }
      return 0;
    }

    filteredItems.sort(compare);
  }

  return (
    <Container>
      <Header setSearch={setSearch} />
      <ContentWrapper>
        <div className="banner-content">
          <img src={frutsBanner} alt="Frutas com balachas caindo" />
          <div>
            <p>Sabores inigualáveis</p>
            <span>
              Sinta o cuidado do preparo com ingredientes selecionados
            </span>
          </div>
        </div>
        {filteredItems &&
          filteredItems.map((data, index) => {
            let itemsMatch;
            let productsFiltered;
            if (data.matches) {
              itemsMatch = data.matches.map((match) => match.value);
              productsFiltered = data.item.products.filter((prod) =>
                itemsMatch.includes(prod.name)
              );
            }
            return (
              <Section
                key={index}
                title={data.matches ? data.item.category : data.category}
              >
                <ProductSlider
                  data={data.matches ? productsFiltered : data.products}
                  onAddProductOnCart={handleAddProductOnCart}
                  onAddProductFavorite={handleAddEndRemoveProductOnFavorite}
                />
              </Section>
            );
          })}
      </ContentWrapper>
      <Footer />
    </Container>
  );
}
