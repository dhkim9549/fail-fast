import { DataGrid } from "@mui/x-data-grid";
import { NumericFormat } from "react-number-format";

const columns = [
  {
    field: "name",
    headerName: "종목명",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "cap",
    headerName: "시가총액 (조 원)",
    width: 150,
    type: "number",
    headerAlign: "center",
    valueFormatter: (value) => {
      if (value == null) {
        return "";
      }
      return value.toLocaleString(undefined, { minimumFractionDigits: 3 });
    },
  },
];

export default function DataTable({ stockList }) {
  console.log(">>>>>> 1 stockList = " + stockList);

  let rows = [];
  stockList.forEach((e) => {
    let row = {
      id: e.name,
      name: e.name,
      cap: Number(e.cap / 10000),
    };
    rows.push(row);
  });
  rows.sort((a, b) => b.cap - a.cap);

  return (
    <div style={{ height: "100%", width: "100%" }} className="bg-white">
      <DataGrid
        rows={rows}
        columns={columns}
        hideFooterPagination={true}
        sx={{
          boxShadow: 2,
          border: 0,
          borderColor: "primary.light",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
        }}
      />
    </div>
  );
}
