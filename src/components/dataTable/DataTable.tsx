import "./dataTable.scss";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import axios from "axios";
import { Link } from "react-router-dom";

interface Props {
  columnsData: GridColDef[];
  rowsData: object[];
  slug: string;
}

export default function DataTable({ columnsData, rowsData, slug }: Props) {
  // const queryClient = useQueryClient();

  // const mutation = useMutation({
  //   mutationFn: async (id: number) => {
  //     const response = await axios.delete(
  //       `http://localhost:8800/api/${slug}/${id}`
  //     );
  //     console.log(response?.data);
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: [`all${slug}`] });
  //   },
  // });

  const handleDelete = (id: number) => {
    // mutation.mutate(id);
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${slug}/${params.row.id}`}>
            <img src="/view.svg" alt="view" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="delete" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <Box sx={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={rowsData}
          columns={[...columnsData, actionColumn]}
          className="dataGrid"
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          disableColumnFilter
          disableDensitySelector
          disableColumnSelector
        />
      </Box>
    </div>
  );
}
