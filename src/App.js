import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css'; 


// import components;
const HomePage = React.lazy(() => import('./pages/HomePage/HomePage.js'));
const Login = React.lazy(() => import('./pages/Login/Login.js'));
const Header = React.lazy(() => import('./components/Header/Header.js'));

function App() {
    
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/login' component={Login} />
        </Switch>
    </Suspense>
    </>
  );
}

export default App;
