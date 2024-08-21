import { Link } from "react-router-dom";
import "./table.scss";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import axios from "axios";

const Table = () => {
  // //To display the data
  // const [student, setStudent] = useState([]);

  // //Fetch data from API database using Axios
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8081/")
  //     // .then((res) => console.log(res))
  //     .then((res) => setStudent(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  // const handleDelete = async (id) => {
  //   try {
  //     await axios.delete("http://localhost:8081/table/" + id);
  //     window.location.reload();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <DataGrid>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Full Name</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {/* Display using map function
              {student1.map((data, i) => (
                <tr key={i}>
                  {/* <td>{data.ID}</td> */}
        {/* <td>{data.Name}</td>
                  <td>{data.Email}</td>
                  <td>
                    <Link to={`update/${data.ID}`} className="btn btn-primary">
                      Update
                    </Link> */}
        {/* <button
                      className="btn btn-danger ms-2"
                      onClick={(e) => handleDelete(data.ID)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))} */}
      </tbody>
    </DataGrid>
  );
};

export default Table;
