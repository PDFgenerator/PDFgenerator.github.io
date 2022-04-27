import css from './App.module.css';
import Nav from './Nav/nav.jsx';
import Table from './Inovoice/table.jsx';
import { Footer } from './Inovoice/Footer/footer';

function App() {
  return (
    <div className={css.ContainerApp}>
      <Nav />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
