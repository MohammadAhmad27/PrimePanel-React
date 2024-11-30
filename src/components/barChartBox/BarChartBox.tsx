import "./barChartBox.scss";
import { BarChart, Bar, ResponsiveContainer, Tooltip } from "recharts";

interface Props {
  data: {
    title: string;
    color: string;
    dataKey: string;
    chartData: object[];
  };
}

export default function BarChartBox({ data }: Props) {
  return (
    <div className="barChartBox">
      <h1>{data.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={data.chartData}>
            <Tooltip
              contentStyle={{ background: "@2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={data.dataKey} fill={data.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
