import React from 'react';
import { Container } from '@material-ui/core';
import { Form } from './components/form/Form';
import { Home } from './components/home/Home';
import { Route, Switch } from 'react-router';
import { Notes } from './components/notes/Notes';

const App: React.FC = () => {
  return (
    <Container maxWidth="lg" style={{ height: '100vh', padding:'8px'}}>
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route exact path="/new-note"><Form /></Route>
        <Route exact path='/note'><Notes /></Route>
        {/* <Route exact path='/note/:id' children={(props: RouteComponentProps) => {
          const id = props.location.pathname.replace('/note/','');
        return (<Note id={id}/>)}} /> */}
      </Switch>
    </Container>
  );
}

export default App;
