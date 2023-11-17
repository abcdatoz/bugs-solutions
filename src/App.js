import './App.css';

import Header from  './components/layouts/Header'


import PrivateRoute from './components/common/PrivateRoute'
import Login from './components/accounts/Login'
import Register from './components/accounts/Register'

import Home from './components/Home'
import Hello from './components/Hello'
import Bug from './components/Bug'
import Solution from './components/Solutions'
import Beneficios from './components/Beneficios'
import CategoriaPlatillo from './components/CategoriaPlatillo/CategoriaPlatillo'
import Platillo from './components/Platillo/Platillo'

import { Route, Switch, } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const notify = () => toast("Wow so easy!");


  return (
    <div className="App">
      <Header />
      


      <div className='container'>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />

          <PrivateRoute exact path="/holo" component={Hello} />
          <PrivateRoute exact path="/bugs" component={Bug} />
          <PrivateRoute exact path="/solutions" component={Solution} />
          <PrivateRoute exact path="/beneficios" component={Beneficios} />
          <PrivateRoute exact path="/catPlatillos" component={CategoriaPlatillo} />
          <PrivateRoute exact path="/platillos" component={Platillo} />
        </Switch>

      </div>
      
      

      <ToastContainer />

    </div>
  );
}
export default App;

//this is a comment