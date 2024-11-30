import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";

interface Props {
  setOpen: (open: boolean) => void;
  slug: string;
  columnsData: GridColDef[];
}

export default function Add({ setOpen, slug, columnsData }: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //add new item
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
