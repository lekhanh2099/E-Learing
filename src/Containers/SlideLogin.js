import { Container } from "@material-ui/core";
import React from "react";
import { SlideLogin } from "../Components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "../Lib/swiper/navigation/navigation.css";
import SwiperCore, { Navigation } from "swiper/core";
import { ContinueLearnData } from "../dataLoginUser";
SwiperCore.use([Navigation]);

export default function SlideLoginContainer() {
  return (
    <SlideLogin.Overlay>
      <Container fixed>
        <SlideLogin.Title>
          Tiếp tục học, <span>Somebody</span>
        </SlideLogin.Title>
        <Swiper
          navigation={true}
          slidesPerView={3}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {ContinueLearnData.map((data, index) => (
            <SwiperSlide key={index}>
              <SlideLogin.Container>
                <SlideLogin.OverlayPlay bg={data.thumbnail}>
                  <SlideLogin.Link to="/">
                    <span className="material-icons">play_arrow</span>
                  </SlideLogin.Link>
                </SlideLogin.OverlayPlay>
                <SlideLogin.Wrap>
                  <SlideLogin.Link to="/">
                    <SlideLogin.NameCourse>{data.name}</SlideLogin.NameCourse>
                    <SlideLogin.StepCourse>
                      {data.summary}
                    </SlideLogin.StepCourse>
                    <SlideLogin.TimeLine>
                      Đã học: <span>{data.timeLearned} Phút</span>
                    </SlideLogin.TimeLine>
                  </SlideLogin.Link>
                </SlideLogin.Wrap>
              </SlideLogin.Container>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </SlideLogin.Overlay>
  );
}
