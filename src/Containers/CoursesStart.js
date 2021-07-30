import React from "react";
import { CoursesStart } from "../Components";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardContainer from "./Card";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function CoursesStartContainer() {
  const classes = useStyles();

  return (
    <CoursesStart>
      <Container fixed>
        <CoursesStart.Group>
          <CoursesStart.Title>Khóa học bắt đầu</CoursesStart.Title>
        </CoursesStart.Group>
        <CoursesStart.GridContainer className={classes.root}>
          <Grid container direction="row" spacing={3} justify="center">
            <Grid item xs={12} sm={6} lg={3} justify="center">
              <CardContainer />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <CardContainer />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <CardContainer />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <CardContainer />
            </Grid>
          </Grid>
        </CoursesStart.GridContainer>
      </Container>
    </CoursesStart>
  );
}
