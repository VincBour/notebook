import * as React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  TextField,
  Container,
  Paper,
  Typography,
  Button,
} from "@material-ui/core";
import Select, { ICategory } from "./Select";
import ReturnHome from "../buttons/ReturnHome";

const formStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  })
);

const categories: ICategory[] = [
  { value: "Stories", label: "Stories" },
  { value: "CodingGame", label: "CodingGame" },
  { value: "Training", label: "Training" },
  { value: "Articles", label: "Articles" },
  { value: "Training", label: "Training" },
];

const subCategories: ICategory[] = [
  { value: "Javascript", label: "Javascript" },
  { value: "React", label: "React" },
  { value: "Redux", label: "Redux" },
  { value: "C#", label: "C#" },
  { value: "Design Pattern", label: "Design Pattern" },
  { value: "Unit Test", label: "Unit Test" },
];

export const Form: React.FC = () => {
  const classes = formStyles();

  return (
    <Container component='div' maxWidth="sm" >
      <Typography variant='h2' color="primary" align="center">New Note</Typography>
      <form noValidate autoComplete="off" className={classes.root}>
        <Paper elevation={3} style={{padding:'16px'}}>
          <TextField
            required
            label="required"
            variant="outlined"
            defaultValue="Title"
          />
          <TextField
            label="Date"
            type="date"
            className={classes.textField}
            defaultValue="2020-01-15"
          />
          <Select data={categories} label="Category" />
          <Select data={subCategories} label="Sub-Category" />
          <TextField label="Notes" multiline variant="outlined" style={{width:'26rem'}}/>
          <Button variant='outlined' style={{margin:'8px'}}>Create</Button>
          <ReturnHome />
        </Paper>
      </form>
    </Container>
  );
};

export default Form;
