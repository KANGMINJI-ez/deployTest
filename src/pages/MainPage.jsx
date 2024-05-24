import { useEffect, useRef, useState } from "react";
import { register } from "swiper/element/bundle";
import Popup from "../component/Popup";
register();

const MainPage = () => {
  const swiperElRef = useRef(null);

  const [isPopupOpened, setIsPopupOpened] = useState(false);
    useEffect(() => {
      const swiperContainer = swiperElRef.current;

      const params = {
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        },
        className: "swiper-container",
        slidesPerView: "1",
      };
      Object.assign(swiperContainer, params);
      swiperContainer.initialize();
    }, []);

    const handlePopup = () => {
      setIsPopupOpened(!isPopupOpened);
    }
  return (
    <div className="main-page">
      <section className="main-vis">
        <div className="bg"></div>
      </section>
      <section className="swiper">
        <div className="swiper-button swiper-button-prev"></div>
        <swiper-container ref={swiperElRef} init="false">
          <swiper-slide class="swiper-slide">
            <button type="button" onClick={handlePopup}>
              팝업 열기
            </button>
          </swiper-slide>
          <swiper-slide class="swiper-slide"></swiper-slide>
          <swiper-slide class="swiper-slide"></swiper-slide>
        </swiper-container>
        <div className="swiper-button swiper-button-next"></div>
      </section>
      <Popup isOpened={isPopupOpened} onClose={handlePopup} />
    </div>
  );
};

export default MainPage;
