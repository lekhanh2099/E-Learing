import React from "react";
import { Billboard } from "../Components";
import bannderImage from "../Assets/Images/banner.png";
import { Container, Grid, Hidden } from "@material-ui/core";

export default function BillboardContainer() {
  return (
    <Billboard.Overlay>
      <Container>
        <Billboard.Container>
          <Grid container spacing={2}>
            <Grid item lg={7} md={12}>
              <Billboard.Content>
                <Billboard.Title>Khát vọng nhiều hơn nữa</Billboard.Title>
                <Billboard.SubTitle>
                  Học tập giúp bạn luôn dẫn đầu. Nhận các kỹ năng theo yêu cầu
                  để gây ấn tượng với bất kỳ ai.
                </Billboard.SubTitle>
              </Billboard.Content>
            </Grid>
            <Grid item lg={5}>
              <Hidden only={["sm", "md", "xs"]}>
                <Billboard.Image src={bannderImage} alt="Banner" />
              </Hidden>
            </Grid>
          </Grid>
        </Billboard.Container>
      </Container>
    </Billboard.Overlay>
  );
}
