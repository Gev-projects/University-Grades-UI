import React from "react";

function TableTemplate({list}) {
  
  const body = list.map((person, index) => {
    return (
        <tr>
          <td className="tab-data">{person.name}</td>
          <td className="tab-data">{person.surname}</td>
          <td className="tab-data">{person.grade}</td>
        </tr>
     )
  }) 
  
  return (
    <table className="tab">
      <thead className="tab-head">
        <tr>
          <th className="tab-head">Name</th>
          <th className="tab-head">Surname</th>
          <th className="tab-head">Grade</th>
        </tr>
      </thead>
      <tbody>
         {body}
      </tbody>
    </table>
  )
}

export default TableTemplate;