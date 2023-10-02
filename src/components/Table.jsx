import React from "react";
import "../styles/form-content-style.css";

/**
 *
 * @param {
 * headers: array,
 * datas: array
 * } props Props for Component
 * @returns
 */

function Table(props) {
  const { headers = [], datas = [] } = props;

  return (
    <table className="table table-striped mt-5">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {datas.map((data) => (
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.productName}</td>
            <td>{data.productCategory}</td>
            <td>{data.productFreshness}</td>
            <td>{data.productPrice}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export { Table };
