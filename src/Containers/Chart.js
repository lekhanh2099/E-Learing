import React from "react";
import { Chart } from "../Components";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Container } from "@material-ui/core";

export default function ChartContainer({ data, grid }) {
  return (
    <Chart>
      <Container fixed>
        <Chart.Title>Biểu đồ thống kê lượng truy cập của học sinh</Chart.Title>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#EBA83A"></XAxis>
            <Line type="monotone" dataKey="Học sinh" stroke="#EBA83A"></Line>
            <Tooltip />
            {grid && <CartesianGrid stroke="#fff" strokeDasharray="5 5" />}
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </Container>
    </Chart>
  );
}
