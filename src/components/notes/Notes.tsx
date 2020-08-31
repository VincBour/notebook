import * as React from "react";
import {
  TableContainer,
  Paper,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Table,
  Grid,
  Button,
} from "@material-ui/core";
import ReturnHome from "../buttons/ReturnHome";
import { ICategory } from "../form/Select";
import { Note } from '../note/Note';
import Search from "../search/Search";
import { INoteBookState } from "../../store/configureStore";
import { connect } from "react-redux";
export interface INote {
  id: number;
  title: string;
  category: ICategory["label"];
  subcategory: ICategory["label"];
  date: string;
  note: string;
}

export interface INotesState {
  notes?: INote[];
}

export const Notes: React.FC<INotesState> = ({notes}) => {

  const [state, setState] = React.useState<INote | undefined>(undefined);

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
      <Search />
      <TableContainer component={Paper} style={{ width: "max-content" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {notes && notes.map((row: INote) => (
              <TableRow key={row.title}>
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">{row.category}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">
                  <Button onClick={() => setState(row)}>Go to</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ReturnHome />
      </Grid>
      {state !== undefined ? <Note note={state}/> : null}
    </Grid>
  );
};

const mapStateToProps = (state: INoteBookState): INotesState => {
    return {
      notes: state.interface.dataNote
    };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);