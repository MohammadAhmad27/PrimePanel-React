import BarChartBox from "../../components/barChartBox/BarChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import ChartBox from "../../components/chartBox/ChartBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import TopBox from "../../components/topBox/TopBox";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";
import "./home.scss";

export default function Home() {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox data={chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox data={chartBoxProduct} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>

      <div className="box box5">
        <ChartBox data={chartBoxConversion} />
      </div>
      <div className="box box6">
        <ChartBox data={chartBoxRevenue} />
      </div>
      <div className="box box7">
        <BigChartBox />
      </div>
      <div className="box box8">
        <BarChartBox data={barChartBoxVisit} />
      </div>
      <div className="box box9">
        <BarChartBox data={barChartBoxRevenue} />
      </div>
    </div>
  );
}
