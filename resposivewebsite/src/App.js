import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Register from './components/pages/Register';
import Geschichte from './components/pages/posts/Geschichte';
import Bible from './components/pages/posts/Bible';
import Maerchen from './components/pages/posts/Maerchen';
import Nachrichten from './components/pages/posts/Nachrichten';
import Dialog from './components/pages/posts/Dialog';
import DetailedNachrichtenPage from './components/pages/detailPages/DetailedNachrichtenPage';
import DetailedGeschichtePage from './components/pages/detailPages/DetailedGeschichtePage';
import DetailedBiblePage from './components/pages/detailPages/DetailedBiblePage';
import DetailedMaerchenPage from './components/pages/detailPages/DetailedMaerchenPage';
import DetailedDialogePage from './components/pages/detailPages/DetailedDialogePage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/register' component={Register} />
          <Route path='/story' exact component={Geschichte} />
          <Route path='/bible' exact component={Bible} />
          <Route path='/tale' exact component={Maerchen} />
          <Route path='/dialog' exact component={Dialog} />
          <Route path='/news' exact component={Nachrichten} />
          <Route path='/story/detail/:slug'  component={DetailedGeschichtePage} />
          <Route path='/bible/detail/:slug'  component={DetailedBiblePage} />
          <Route path='/tale/detail/:slug'  component={DetailedMaerchenPage} />
          <Route path='/dialog/detail/:slug'  component={DetailedDialogePage} />
          <Route path='/news/detail/:slug'  component={DetailedNachrichtenPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;