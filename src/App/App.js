import css from './App.module.css';
import Nav from './Nav/nav.jsx';
import Table from './Inovoice/table.jsx';
import Footer from './Inovoice/Footer/footer';
import Header from './Inovoice/Header/header';
import { DataService } from '../Repository/DataService';

function App() {
  
  console.log(DataService.header.proformaInvoice.dateInit)

  return (
    <div className={css.ContainerApp}>
      <Nav />
      <Header />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
