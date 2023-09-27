
import React, { useEffect } from "react";
import axios from "axios"
import './../styles/App.css';

const App = () => {
  const [studentData, setStudentData] = React.useState([]);


  function showStudentData() {
    axios.get("https://reqres.in/api/users")
    .then((data)=> {
      setStudentData(data.data.data);
    })
    .catch((err)=> {
      console.log(err);
    })
    console.log(studentData);
  }



  // console.log(studentData);


  return (
    <div className="app">
              {/* Do not remove the main div */}
        <div className="heading">
          <h1>Blue Whales</h1>
          <button className="btn" onClick={showStudentData}>Get user list</button>
        </div>

                 {/*this is table div*/}
        <div className="table-div">
          <table border="1" >
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Avatar</th>
              </tr>
            </thead>
            <tbody>
              {(studentData.length==0) ? 
              <tr>
                <td colSpan={4}>No data found to display.</td>
              </tr>
              :
              studentData.map((student)=> {
                return <tr key={student.id}>
                  <td>{student.first_name}</td>
                  <td>{student.last_name}</td>
                  <td>{student.email}</td>
                  <td><img src={student.avatar} alt={student.first_name+student.last_name} /></td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default App
