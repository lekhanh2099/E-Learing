import React from "react";
import { BestSeller } from "../Components";
import StarIcon from "@material-ui/icons/Star";
import {Container} from "@material-ui/core"

export default function BestSellerContainer() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <BestSeller>
      <Container fixed>
          <BestSeller.Title>Giảng viên ưu tú</BestSeller.Title>
          <BestSeller.SubTiTle>Đội ngũ giảng viên hàng đầu Việt Nam, đều là những người có thành tích cao trong lĩnh vực của riêng họ</BestSeller.SubTiTle>
        <BestSeller.Detail {...settings}>
          <BestSeller.Wrap>
            <img src="/images/Testamonial/GV1.png" alt="Teacher" />
            <BestSeller.Content>
              <BestSeller.Headline>Jion Smith</BestSeller.Headline>
              <BestSeller.Description>Java, Python, PHP</BestSeller.Description>
              <BestSeller.GroupText>
                <BestSeller.Text>
                  <span className="active">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </span>{" "}
                  Đánh giá tổng thể từ học viên
                </BestSeller.Text>
                <BestSeller.Text>
                  <span>14.145</span> người tham gia
                </BestSeller.Text>
                <BestSeller.Text>
                  <span>3</span> bài học
                </BestSeller.Text>
              </BestSeller.GroupText>
            </BestSeller.Content>
          </BestSeller.Wrap>
          <BestSeller.Wrap>
            <img src="/images/Testamonial/GV2.png" alt="Teacher" />
            <BestSeller.Content>
              <BestSeller.Headline>Jion Smith</BestSeller.Headline>
              <BestSeller.Description>Java, Python, PHP</BestSeller.Description>
              <BestSeller.GroupText>
                <BestSeller.Text>
                  <span className="active">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </span>{" "}
                  Đánh giá tổng thể từ học viên
                </BestSeller.Text>
                <BestSeller.Text>
                  <span>14.145</span> người tham gia
                </BestSeller.Text>
                <BestSeller.Text>
                  <span>3</span> bài học
                </BestSeller.Text>
              </BestSeller.GroupText>
            </BestSeller.Content>
          </BestSeller.Wrap>
          <BestSeller.Wrap>
            <img src="/images/Testamonial/GV3.png" alt="Teacher" />
            <BestSeller.Content>
              <BestSeller.Headline>Jion Smith</BestSeller.Headline>
              <BestSeller.Description>Java, Python, PHP</BestSeller.Description>
              <BestSeller.GroupText>
                <BestSeller.Text>
                  <span className="active">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </span>{" "}
                  Đánh giá tổng thể từ học viên
                </BestSeller.Text>
                <BestSeller.Text>
                  <span>14.145</span> người tham gia
                </BestSeller.Text>
                <BestSeller.Text>
                  <span>3</span> bài học
                </BestSeller.Text>
              </BestSeller.GroupText>
            </BestSeller.Content>
          </BestSeller.Wrap>
          <BestSeller.Wrap>
            <img src="/images/Testamonial/GV4.png" alt="Teacher" />
            <BestSeller.Content>
              <BestSeller.Headline>Jion Smith</BestSeller.Headline>
              <BestSeller.Description>Java, Python, PHP</BestSeller.Description>
              <BestSeller.GroupText>
                <BestSeller.Text>
                  <span className="active">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </span>{" "}
                  Đánh giá tổng thể từ học viên
                </BestSeller.Text>
                <BestSeller.Text>
                  <span>14.145</span> người tham gia
                </BestSeller.Text>
                <BestSeller.Text>
                  <span>3</span> bài học
                </BestSeller.Text>
              </BestSeller.GroupText>
            </BestSeller.Content>
          </BestSeller.Wrap>
          <BestSeller.Wrap>
            <img src="/images/Testamonial/GV5.png" alt="Teacher" />
            <BestSeller.Content>
              <BestSeller.Headline>Jion Smith</BestSeller.Headline>
              <BestSeller.Description>Java, Python, PHP</BestSeller.Description>
              <BestSeller.GroupText>
                <BestSeller.Text>
                  <span className="active">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </span>{" "}
                  Đánh giá tổng thể từ học viên
                </BestSeller.Text>
                <BestSeller.Text>
                  <span>14.145</span> người tham gia
                </BestSeller.Text>
                <BestSeller.Text>
                  <span>3</span> bài học
                </BestSeller.Text>
              </BestSeller.GroupText>
            </BestSeller.Content>
          </BestSeller.Wrap>
          <BestSeller.Wrap>
            <img src="/images/Testamonial/GV6.png" alt="Teacher" />
            <BestSeller.Content>
              <BestSeller.Headline>Jion Smith</BestSeller.Headline>
              <BestSeller.Description>Java, Python, PHP</BestSeller.Description>
              <BestSeller.GroupText>
                <BestSeller.Text>
                  <span className="active">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </span>{" "}
                  Đánh giá tổng thể từ học viên
                </BestSeller.Text>
                <BestSeller.Text>
                  <span>14.145</span> người tham gia
                </BestSeller.Text>
                <BestSeller.Text>
                  <span>3</span> bài học
                </BestSeller.Text>
              </BestSeller.GroupText>
            </BestSeller.Content>
          </BestSeller.Wrap>
          <BestSeller.Wrap>
            <img src="/images/Testamonial/GV7.png" alt="Teacher" />
            <BestSeller.Content>
              <BestSeller.Headline>Jion Smith</BestSeller.Headline>
              <BestSeller.Description>Java, Python, PHP</BestSeller.Description>
              <BestSeller.GroupText>
                <BestSeller.Text>
                  <span className="active">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </span>{" "}
                  Đánh giá tổng thể từ học viên
                </BestSeller.Text>
                <BestSeller.Text>
                  <span>14.145</span> người tham gia
                </BestSeller.Text>
                <BestSeller.Text>
                  <span>3</span> bài học
                </BestSeller.Text>
              </BestSeller.GroupText>
            </BestSeller.Content>
          </BestSeller.Wrap>
          <BestSeller.Wrap>
            <img src="/images/Testamonial/GV6.png" alt="Teacher" />
            <BestSeller.Content>
              <BestSeller.Headline>Jion Smith</BestSeller.Headline>
              <BestSeller.Description>Java, Python, PHP</BestSeller.Description>
              <BestSeller.GroupText>
                <BestSeller.Text>
                  <span className="active">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </span>{" "}
                  Đánh giá tổng thể từ học viên
                </BestSeller.Text>
                <BestSeller.Text>
                  <span>14.145</span> người tham gia
                </BestSeller.Text>
                <BestSeller.Text>
                  <span>3</span> bài học
                </BestSeller.Text>
              </BestSeller.GroupText>
            </BestSeller.Content>
          </BestSeller.Wrap>
        </BestSeller.Detail>
      </Container>
    </BestSeller>
  );
}
