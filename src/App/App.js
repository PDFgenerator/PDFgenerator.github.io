import css from './App.module.css';
import Nav from './Nav/nav.jsx';
import Table from './Inovoice/table.jsx';
import { TotalResults } from './Inovoice/TotalResults/totalResults';

function App() {
  return (
    <div className={css.ContainerApp}>
      <Nav />
      <Table />
      <TotalResults />
    </div>
  );
}

export default App;
