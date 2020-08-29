import * as React from "react";
import { INote } from "../notes/Notes";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  IconButton,
  CardActions,
} from "@material-ui/core";
import { Save, Delete, Update } from "@material-ui/icons";

export const Note: React.FC<{ note: INote }> = ({ note }) => {
  const [state, setstate] = React.useState<string>(note.note);

  React.useEffect(() => {
    setstate(note.note);
  }, [note]);

  return (
    <Grid item xs={6}>
      <Card>
        <CardContent>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h4">{note.title}</Typography>
            <Typography variant="h6">{note.date}</Typography>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              margin: "16px",
            }}
          >
            <Typography>{note.category}</Typography>
            <Typography>{note.subcategory}</Typography>
          </div>
          <TextField
            value={state}
            multiline
            variant="outlined"
            label="Note"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setstate(e.target.value);
            }}
            style={{ width: "-webkit-fill-available" }}
          />
        </CardContent>
        <CardActions>
          <IconButton>
            <Save />
          </IconButton>
          <IconButton>
            <Update />
          </IconButton>
          <IconButton>
            <Delete />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Note;
