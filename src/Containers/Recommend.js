import { Container, Grid } from "@material-ui/core";
import React from "react";
import { Recommend } from "../Components";

const offer = [
  {
    id: 1,
    name: "ReactJS",
  },
  {
    id: 2,
    name: "Angular",
  },
  {
    id: 3,
    name: "VueJs",
  },
  {
    id: 4,
    name: "NodeJS",
  },
  {
    id: 5,
    name: "Java Spring",
  },
  {
    id: 7,
    name: "Golang",
  },
  {
    id: 7,
    name: "SQL",
  },
  {
    id: 1,
    name: "PHP",
  },
];

export default function RecommendContainer() {
  const renderOffer = () => {
    return offer.map((courses, index) => {
      return (
        <Grid item lg={2} md={2} sm={6} key={index}>
          <Recommend.Topics to="/">{courses.name}</Recommend.Topics>
        </Grid>
      );
    });
  };

  return (
    <Recommend.Overlay>
      <Container fixed>
        <Recommend.Title>Tiếp theo học gì</Recommend.Title>
        <Recommend.SubTitle>
          Các chủ đề được đề xuất dựa trên quá trình học của bạn
        </Recommend.SubTitle>
        <Grid container spacing={2}>
          {renderOffer()}
        </Grid>
      </Container>
    </Recommend.Overlay>
  );
}
