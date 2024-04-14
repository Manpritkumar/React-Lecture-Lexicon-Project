import React from "react";

const Table = () => {
  return (
    <table className="table table-striped mt-5">
      <TableHeader />
      <TableRow />
    </table>
  );
};
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
  );
};

export const TableRow = () => {
  return (
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
    </tbody>
  );
};

export default Table;
