import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import { FreeMode, Navigation } from "swiper";
import { Container } from "./styles";
import { ProductCardSlider } from "../../components";
export function ProductSlider({
  data,
  onAddProductOnCart,
  onAddProductFavorite
}) {
  return (
    <Container data={data}>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          670: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 40
          }
        }}
        spaceBetween={30}
        navigation={{
          clickable: true
        }}
        freeMode={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
      >
        <div className="swiper-background-prev"></div>

        {data &&
          data.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductCardSlider
                product={product}
                onAddProductOnCart={onAddProductOnCart}
                onAddProductFavorite={onAddProductFavorite}
              />
            </SwiperSlide>
          ))}

        <div className="swiper-background-next"></div>
      </Swiper>
    </Container>
  );
}
