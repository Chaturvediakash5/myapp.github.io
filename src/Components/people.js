import React, { useState } from "react";

export default function People() {
  const [emp, setPep] = useState([
    { empId: 1234, name: "John", designation: "SE" },
    { empId: 4567, name: "Tom", designation: "SSE" },
    { empId: 8910, name: "Kevin", designation: "TA" },
  ]);
  const addPep = () => {
    setPep([...emp, { empId: 6789, name: "Sam", designation: "TL" }]);
  };
  return (
    <>
      <table style={{ width: "60%" }} className="table">
        <thead className="thead-light">
          <tr>
            <th>EmpID</th>
            <th>Name</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {emp.map((newE) => {
            return (
              <tr>
                <td>{newE.empId}</td>
                <td>{newE.name}</td>
                <td>{newE.designation}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addPep}>
        Add People
      </button>
    </>
  );
}
