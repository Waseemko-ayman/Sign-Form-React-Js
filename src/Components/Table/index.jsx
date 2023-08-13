import React from "react";
import "./style.css";

const Table = ({ columns, data, isLoading }) => {
  return (
    <div className="table__component">
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.title}</th>
            ))}
          </tr>
        </thead>
        {!isLoading && (
          <tbody>
            {data?.map((row) => (
              <tr key={row._id}>
                {columns.map((column) => (
                  <td key={`${row._id + column.key}`}>
                    {column.render
                      ? column.render(row)
                      : Array.isArray(row[column.key])
                      ? row[column.key].join(" - ")
                      : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        )}

        {isLoading && (
          <h1
            style={{
              textAlign: "center",
              margin: 20,
              color: "white",
              fontFamily: "Gilroy, sans-serif",
            }}
          >
            Loading...
          </h1>
        )}
      </table>
    </div>
  );
};

export default Table;

// import React from "react";
// import "./style.css";

// const Table = ({ columns, data, isLoading, onRowClick }) => {
//   return (
//     <div className="table__component">
//       <table>
//         <thead>
//           <tr>
//             {columns.map((column) => (
//               <th key={column.key}>{column.title}</th>
//             ))}
//           </tr>
//         </thead>
//         {isLoading ? (
//           <h1
//             style={{
//               textAlign: "center",
//               margin: 20,
//               color: "white",
//               fontFamily: "Gilroy, sans-serif",
//             }}
//           >
//             Loading...
//           </h1>
//         ) : (
//           <tbody>
//             {data?.users?.map((row) => (
//               <tr key={row._id} onClick={() => onRowClick(row)}>
//                 {columns.map((column) => (
//                   <td key={`${row._id + column.key}`}>
//                     {column.render ? column.render(row) : row[column.key]}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         )}
//       </table>
//     </div>
//   );
// };

// export default Table;
