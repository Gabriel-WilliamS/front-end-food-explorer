import {
  Footer,
  Header,
  ProductCardSlider,
  ProductSlider,
  Section
} from "../../components";
import { useFavoritesProducts } from "../../hooks/useFavoritesProducts";
import { Container, ContainerWrapper } from "./styles";

export function Favorites({ ...rest }) {
  const { favoritesProducts } = useFavoritesProducts();
  console.log(favoritesProducts);
  return (
    <Container>
      <Header />
      <ContainerWrapper>
        <Section title="Favoritos" />
        <ProductSlider data={favoritesProducts}></ProductSlider>
      </ContainerWrapper>
      <Footer />
    </Container>
  );
}
