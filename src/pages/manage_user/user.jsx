import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { tr } from "date-fns/locale";

const user = () => {
  const [user, setUser] = useState([])
  useEffect(() => {
      axios.get('/api/users')
        (result.data.Status)
        .then(result => {
          if(result.data.Status){
            setUser(result.data.Result);
          }else{
            alert(result.data.Error)
          }
        }).catch(error => console.log(error))
  }, [])
  return (
    <div>
      <div>
        <h3>User List</h3>
      </div>
      <Link to="/dashboard/addUser">Add User</Link>
      <div>
           <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Department</th>
                <th>Designation</th>
                <th>Mobile No</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                user.map(u => {
                  <tr>
                    <td>{u.name}</td>
                    <td>
                      <img src={'' +e.image} className="usrimg"/>
                      </td>
                    <td>{u.departmaent}</td>
                    <td>{u.designation}</td>
                    <td>{u.mobile_no}</td>
                    <td>
                      <Link to={'/dasboard/edit_user/'+u.id}>Edit</Link>
                      <button>Delete</button>
                    </td>
                  </tr>
                     
                })
              }
            </tbody>
           </table>
      </div>
    </div>
  );
};

export default user; 
