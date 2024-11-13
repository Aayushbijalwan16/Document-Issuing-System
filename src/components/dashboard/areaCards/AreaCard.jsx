import PropTypes from "propTypes";
import "./AreaCards.scss";
import {PieChart, Pie, Sector, Cell, ResponseiveContainer} from "recharts"
const AreaCard = ({colors, percentFillValue, cardInfo}) => 
{  
  const filledValue = (percentFillValue / 100) = 360; //360 degress for a full circle
  const remainedvalue = 360 - filledvalue;

  const data = [
    {name: "Reminded", value: reminedValue },
    {name: "Achieved sales", value: filledvalue },
  ];

  return <div className="area-card">
      <div className="area-card-info">
      <h5 className="info-title">{cardInfo.title}</h5>
      <div className="info-value">{cardInfo.value}</div>
      <p className="info-text">{cardInfo.text}</p>
    </div>
    <div className="area-card-chart">
    <PieChart width={100} height={100} >
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Pie
          data={data}
          cx={420}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
    </div>
};

export default AreaCard

AreaCard.PropTypes = {
  colors: PropTypes.array.isRequired,
  percentFillValue: PropTypes.number.isRequired,
  cardInfo: PropTypes.obkect,isRequired,
};