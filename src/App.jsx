import { createSignal } from 'solid-js';

import styles from './App.module.css';
import Main from './pages/Main.jsx';


function App() {
  const [page, setPage] = createSignal(null);
  setPage(<Main setPage={setPage} />);
  return (
   page()
  );
}

export default App;
