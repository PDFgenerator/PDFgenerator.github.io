import css from './App.module.css';
import Nav from './Nav/nav.jsx';
import Table from './Inovoice/table.jsx';
import Footer from './Inovoice/Footer/footer';
import Header from './Inovoice/Header/header';
import { DeliveryAddress } from './BillingData/deliveryAddress';
import ScreenNotResponsive from './ScreenNotResponsive/screenNotResponsive';

function App() {  
  return (
    <div>
      <div className={css.ContainerApp}>
        <Nav />
        <Header />
        <Table />
        <Footer />
        <DeliveryAddress />
      </div>
      <ScreenNotResponsive />
    </div>
  );
}

export default App;
