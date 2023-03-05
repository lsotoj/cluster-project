import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";

type Props = {
  rows: {}[];
  headers: { field: string }[];
};

export const DataTable = ({ rows, headers }: Props) => {
  const [rowData] = useState(rows);

  const [columnDefs] = useState(headers);
  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
};
