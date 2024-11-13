import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss";

const TABLE_HEADS = [
  "Name",
  "Roll-no",
  "Document-Type",
  "Date",
  "Status",
  "Action",
];

const TABLE_DATA = [
  {
    id: "101",
    name: "Ram",
    rollno: "01",
    doctype: "TC",
    date: "30-01-2010",
    status: "approved",
    action: "-",
  },
  {
    id: "102",
    name: "Rahul",
    rollno: "721620101007",
    doctype: "Bonafied",
    date: "05-10-2024",
    status: "Not Approved",
    action: "Required",
  },
  {
    id: "103",
    name: "Chetan",
    rollno: "211620101001",
    doctype: "Fees-Structure",
    date: "17-10-2024",
    status: "Rejected",
    action: "re-apply",
  },
  {
    id: "104",
    name: "Mahee",
    rollno: "211620101032",
    doctype: "Fees-Structure",
    date: "16-10-2025",
    status: "Approved",
    action: "-",
  },
  {
    id: "105",
    name: "Ankit",
    rollno: "211620101014",
    doctype: "3rd year marksheet",
    date: "25-10-2024",
    status: "Rejected",
    action: "-",
  },
];

const AreaTable = () => {
  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Recents</h4>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}></th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_DATA?.map((dataItem) => {
              return (
                <tr key={dataItem.id}>
                  <td>{dataItem.fullname}</td>
                  <td>{dataItem.rollno}</td>
                  <td>{dataItem.doctype}</td>
                  <td>{dataItem.date}</td>
                  <td>
                    <div className="dt-status">
                      <span
                        className={"dt-status-dot-dot-${dataItem.status}"}
                      ></span>
                      <span className="dt-status-text">{dataItem.status}</span>
                    </div>
                  </td>
                  <td>{dataItem.action}</td>
                  <td>${dataItem.action}</td>
                  <td className="dt-cell-action">
                    <AreaTableAction />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AreaTable;
