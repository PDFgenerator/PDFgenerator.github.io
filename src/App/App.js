import css from './App.module.css';
import Nav from './Nav/nav.jsx';
import Table from './Inovoice/table.jsx';

function App() {
  return (
    <div className={css.ContainerApp}>
      <Nav />
      <Table />
    </div>
  );
}

export default App;
