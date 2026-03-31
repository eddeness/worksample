import { Route } from 'react-router-dom';
import './App.css';
import Survey from './pages/Survey';
import Bike from './pages/bikeProject';
import Intro from './pages/intro';
import ClimageChange from './pages/climageChange';
import ECommerce from './pages/eCommerce';
import Franchise from './pages/franchise';
import CreditDefault from './pages/CreditDefault';
import TransferLearning from './pages/TransferLearning';
import DsProjects from './pages/DsProjects';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Route exact path="/" component={Intro} />
      <Route exact path="/franchise" component={Franchise} />
      <Route exact path="/survey" component={Survey} />
      <Route exact path="/bike" component={Bike} />
      <Route exact path="/climate" component={ClimageChange} />
      <Route exact path="/ecommerce" component={ECommerce} />
      <Route exact path="/credit" component={CreditDefault} />
      <Route exact path="/transferlearning" component={TransferLearning} />
      <Route exact path="/mdsProjects" component={DsProjects} />
    </>
  );
}

export default App;
