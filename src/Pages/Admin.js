import React from "react";
import { chartData } from "../dummy";
import ChartContainer from "../Containers/Chart";
import FeatureInfoContainer from "../Containers/FeatureInfo";
import { FeatureInfo } from "../Components";

export default function Admin() {
  return (
    <FeatureInfo>
      <FeatureInfoContainer></FeatureInfoContainer>
      <ChartContainer data={chartData} grid />
    </FeatureInfo>
  );
}
