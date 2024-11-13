import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const addUser = () => {
  const [employee, setEmployee] = useState({
    name: "",
    department: "",
    designation: "",
    mobile_no: "",
    image: "",
    password: "",
  });
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDeafult();
    const formData = new FormData();
    formData.append("name", user.name);
    formData.append("department", user.department);
    formData.append("designation", user.designation);
    formData.append("mobile_no", user.mobile_no);
    formData.append("image", user.image);
    formData.append("password", user.password);
    axios
      .post("/api/", formData)
      .then((result) => {
        if (result.data.Status) {
          navigate("/dashboard/user");
        } else {
          alert(reuslt.data.Error);
        }
      })
      .catch((err) => comsole.log(err.message));
  };
  return (
    <div>
      <div>
        <h2>Add User</h2>
        <form className="" onSubmit={handleSubmit}>
          <div className="mb">
            <label For="inputName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              id="inputname"
              placeholder="Enter Full Name"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>
          <div className="mb">
            <label For="inputDepart" className="form-label">
              Department
            </label>
            <input
              type="text"
              id="inputdepart"
              placeholder="Department"
              onChange={(e) => setUser({ ...user, department: e.target.value })}
            />
          </div>
          <div className="mb">
            <label For="inputDesig" className="form-label">
              Designation
            </label>
            <input
              type="text"
              id="inputdesig"
              placeholder="Enter Designation"
              onChange={(e) =>
                setUser({ ...user, designation: e.target.value })
              }
            />
          </div>
          <div className="mb">
            <label For="inputNumber" className="form-label">
              Mobile No.
            </label>
            <input
              type="Number"
              id="inputnumber"
              placeholder="Mobile No."
              onChange={(e) => setUser({ ...user, Mobile_no: e.target.value })}
            />
          </div>
          <div className="mb">
            <label For="inputGroupFile01" className="form-label">
              Select Image
            </label>
            <input
              type="file"
              id="inpputGroupFile01"
              placeholder="Enter Full Name"
              onChange={(e) => setUser({ ...user, image: e.target.files[0] })}
            />
          </div>
          <div>
            <label For="inputPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="inputpass"
              placeholder="Set Password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <div className="mb">
            <button type="submit" className="btn">
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default addUser;
