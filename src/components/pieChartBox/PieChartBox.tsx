import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieChartBox.scss";

export default function PieChartBox() {
  const data = [
    { name: "Mobile", value: 400, color: "#0088FE" },
    { name: "Desktop", value: 300, color: "#00C49F" },
    { name: "Laptop", value: 300, color: "#FFBB28" },
    { name: "Tablet", value: 200, color: "#FF8042" },
  ];

  return (
    <div className="pieChartBox">
      <h1>Leads By Source</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              cx="50%" // Center horizontally
              cy="50%" // Center vertically
              innerRadius="70%"
              outerRadius="90%"
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      {/* options */}
      <div className="options">
        {data.map((item) => (
          <div key={item.name} className="option">
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
