import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './stylesheet/styles.css';
import { Home } from './components/Home';
import { AddEmployee } from './components/AddEmployee';
import { EditEmployee } from './components/EditEmployee';
import { Heading } from './components/Heading';
import { Employee } from './components/Employee';


import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Heading />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/employee/:id" component={Employee} exact />
          <Route path="/add" component={AddEmployee} exact />
          <Route path="/edit/:id" component={EditEmployee} exact />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;