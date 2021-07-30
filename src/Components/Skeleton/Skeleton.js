import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 350,
    height: 250,
    [theme.breakpoints.down("sm")]: {
      width: 250,
    },
  },
}));

export default function SkeletonAnimation() {
  const { isSkeleton } = useSelector((state) => state.skeletonReducer);
  const classes = useStyles();
  if (isSkeleton) {
    return (
      <div className={classes.root}>
        <Skeleton height={30} animation="wave" />
        <Skeleton height={30} animation="wave" />
        <Skeleton height={30} animation="wave" />
        <Skeleton height={30} animation="wave" />
      </div>
    );
  } else {
    return null;
  }
}
