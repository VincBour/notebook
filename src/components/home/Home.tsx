import * as React from "react";
import { Container, Typography, Grid, Paper, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h1" align="center">
        Home
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
            <Paper elevation={3} style={{height:'100px', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Button variant='outlined'>
              <Link to="/new-note" style={{ textDecoration: "none" }}>
                Create new note
              </Link>
          </Button>
            </Paper>
        </Grid>
        <Grid item xs={6}>
            <Paper elevation={3} style={{height:'100px', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Button variant='outlined'>
              <Link to="/note" style={{ textDecoration: "none" }}>
                Search
              </Link>
          </Button>
            </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
