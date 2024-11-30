import { Link } from "react-router-dom";
import "./chartBox.scss";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";

interface Props {
  data: {
    color: string;
    icon: string;
    title: string;
    dataKey: string;
    number: string;
    percentage: number;
    chartData: object[];
  };
}

export default function ChartBox({ data }: Props) {
  return (
    <div className="chartBox">
      {/* right */}
      <div className="boxInfo">
        <div className="title">
          <img src={data.icon} alt="user" />
          <span>{data.title}</span>
        </div>
        <h1>{data.number}</h1>
        <Link to="/" style={{ color: data.color }}>
          View All
        </Link>
      </div>
      {/* left */}
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={data.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 70 }}
              />
              <Line
                type="monotone"
                dataKey={data.dataKey}
                stroke={data.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <div
            className="percentage"
            style={{ color: data.percentage < 0 ? "tomato" : "limegreen" }}
          >
            {data.percentage}
          </div>
          <div className="duration">This month</div>
        </div>
      </div>
    </div>
  );
}
