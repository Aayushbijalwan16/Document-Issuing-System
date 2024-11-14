import AreaCards from "../../components/dashboard/areaCards/AreaCards"
import AreaTop from "../../components/dashboard/areaTop/AreaTop"

const Dashboard = () => {

  return (
    <div className="content-area">
      <Area-Top/>
      <AreaCards/>
      <AreaTable/>
    </div>
  )
}

export default Dashboard;

// export default function Dashboard(){
//   return (
//     <div className="">
//       {/* <Area-Top/> */}
//       <AreaCards/>
//       <AreaTable/>
//     </div>
//   )
// }