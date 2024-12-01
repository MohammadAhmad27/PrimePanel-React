import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./single.scss";

interface Props {
  data: {
    id: number;
    img?: string;
    title: string;
    info: object;
    chart: {
      dataKeys: {
        name: string;
        color: string;
      }[];
      data: object[];
    };
    activities?: {
      time: string;
      text: string;
    }[];
  };
}

export default function Single({ data }: Props) {
  return (
    <div className="single">
      {/* left */}
      <div className="view">
        <div className="info">
          <div className="topInfo">
            <img src={data.img} alt="cover" />
            <h1>{data.title}</h1>
            <button>Update</button>
          </div>
          <div className="details">
            {Object.entries(data.info).map((item) => (
              <div className="item" key={item[0]}>
                <div className="itemTitle">{item[0]}</div>
                <div className="itemValue">{item[1]}</div>
              </div>
            ))}
          </div>
        </div>
        <hr />
        {data.chart && (
          <div className="chart">
            <ResponsiveContainer width="99%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={data.chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {data.chart.dataKeys.map((dataKey) => (
                  <Line
                    type="monotone"
                    dataKey={dataKey.name}
                    stroke={dataKey.color}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
      {/* right */}
      <div className="activities">
        <h2>Latest Activities</h2>
        {data.activities && (
          <ul>
            {data.activities.map((activity) => (
              <li key={activity.text}>
                <div>
                  <p>{activity.text}</p>
                  <time>{activity.time}</time>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
