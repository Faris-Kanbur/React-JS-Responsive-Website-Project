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
import GeneralDetailPage from './components/pages/detailPages/GeneralDetailPage';
import DetailedNewsPage from './components/pages/detailPages/DetailedNewsPage';
import DetailedStoryPage from './components/pages/detailPages/DetailedStoryPage';

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
          <Route path='/geschichten' component={Geschichte} />
          <Route path='/bible' component={Bible} />
          <Route path='/maerchen' component={Maerchen} />
          <Route path='/dialoge' component={Dialog} />
          <Route path='/nachrichten' component={Nachrichten} />
          <Route path='/detail/:slug'  component={DetailedNewsPage} />
          <Route path='/detail/:slug'  component={DetailedStoryPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;