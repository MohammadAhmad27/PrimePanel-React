import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";
// import axios from "axios";
// import { useMutation, useQueryClient } from "@tanstack/react-query";

interface Props {
  setOpen: (open: boolean) => void;
  slug: string;
  columnsData: GridColDef[];
}

export default function Add({ setOpen, slug, columnsData }: Props) {
  // const queryClient = useQueryClient();
  // const mutation = useMutation({
  //   mutationFn: async () => {
  //     const response = await axios.post(`http://localhost:8800/api/${slug}s`, {
  //       body: JSON.stringify({
  //         id: 16,
  //         img: "",
  //         lastName: "Hello",
  //         firstName: "Test",
  //         email: "testme@gmail.com",
  //         phone: "123 456 789",
  //         createdAt: "01.02.2023",
  //         verified: true,
  //       }),
  //     });
  //     console.log(response.data);
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: [`all${slug}s`] });
  //   },
  // });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // mutation.mutate();
    setOpen(false);
  };

  return (
    <div className="add">
      <div className="modal">
        <h1>Add New {slug}</h1>
        <span className="close" onClick={() => setOpen(false)}>
          X
        </span>
        <form onSubmit={handleSubmit}>
          {columnsData
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div key={column.field} className="item">
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
