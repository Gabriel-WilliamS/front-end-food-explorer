import { Container } from "./styles";
import Lottie from "lottie-react";
import loadingAnimate from "../../assets/animations/loading.json";
export function LoadingAnimate({ ...rest }) {
  return (
    <Container {...rest}>
      <Lottie
        animationData={loadingAnimate}
        loop={true}
        style={{ width: 200 }}
      />
    </Container>
  );
}
