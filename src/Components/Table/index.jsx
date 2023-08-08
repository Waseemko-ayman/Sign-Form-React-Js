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
            {data.map((row) => (
              <tr key={row.id}>
                {columns.map((column) => (
                  <td key={`${row.id + column.key}`}>
                    {column.render ? column.render(row) : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>
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
    </div>
  );
};

export default Table;
