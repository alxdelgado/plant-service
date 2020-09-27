import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css'; 

// import components;
const HomePage = React.lazy(() => import('./components/HomePage/HomePage.js'));
const Header = React.lazy(() => import('./components/Header/Header.js'));

function App() {
    
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Switch>
            <Route exact path='/' component={HomePage} />
        </Switch>
    </Suspense>
    </>
  );
}

export default App;
