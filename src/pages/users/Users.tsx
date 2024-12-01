import "./users.scss";
import DataTable from "../../components/dataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import { userRows } from "../../data";
import { useState } from "react";
import Add from "../../components/add/Add";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return (
        <img
          src={params.row.img || "/noavatar.png"}
          alt="avatar"
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      );
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "boolean",
  },
];

export default function Users() {
  const [open, setOpen] = useState(false);

  // Fetching using React Query
  // const { isLoading, data } = useQuery({
  //   queryKey: ["allusers"],
  //   queryFn: async () => {
  //     const response = await axios.get("http://localhost:8800/api/users");
  //     if (!response?.data) {
  //       throw new Error("Failed to fetch users");
  //     }
  //     return response?.data;
  //   },
  // });

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(!open)}>Add New User</button>
      </div>
      <DataTable slug="users" columnsData={columns} rowsData={userRows} />
      {open && <Add setOpen={setOpen} slug="user" columnsData={columns} />}
    </div>
  );
}
