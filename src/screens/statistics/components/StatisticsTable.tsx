import { DataTable } from "@/components";
import { data } from "./../../../components/UI/dataTable/dataSource";

const headers = [
  {
    field: "OrderID",
  },
  { field: "CustomerID" },
  { field: "EmployeeID" },
  { field: "OrderDate" },
  { field: "ShipName" },
  { field: "ShipCity" },
  { field: "ShipAddress" },
  { field: "ShipRegion" },
  { field: "ShipPostalCode" },
  { field: "ShipCountry" },
  { field: "Freight" },
  { field: "Verified" },
];

export const StatisticsTable = () => {
  return (
    <>
      <div className="m-10">
        <DataTable headers={headers} rows={data} />
      </div>
    </>
  );
};
