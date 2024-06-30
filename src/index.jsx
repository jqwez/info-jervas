/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import { Router, Route } from '@solidjs/router';
import App from './App';
import Main from './pages/Main.jsx';
import Contact from './pages/Contact.jsx';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => (
  <Router>
    <Route path="/" component={Main} />
    <Route path="/contact" component={Contact} />
  </Router>

  )
  , root);
