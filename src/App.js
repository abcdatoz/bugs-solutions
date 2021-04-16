import './App.css';
import Header from  './components/layouts/Header'


import PrivateRoute from './components/common/PrivateRoute'
import Login from './components/accounts/Login'
import Register from './components/accounts/Register'

import Home from './components/Home'
import Hello from './components/Hello'

import { Route, Switch, } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />


      <div className='container'>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />

          <PrivateRoute exact path="/holo" component={Hello} />
        </Switch>

      </div>
      

    </div>
  );
}

export default App;
