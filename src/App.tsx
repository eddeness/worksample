import { Route } from 'react-router-dom';
import './App.css';
// import Survey from './pages/surveyProject';
import Survey from './pages/Survey';
import Bike from './pages/bikeProject';
import Intro from './pages/intro';
import ClimageChange from './pages/climageChange';
import ECommerce from './pages/eCommerce';
import Franchise from './pages/franchise';
import CreditDefault from './pages/CreditDefault';
import TransferLearning from './pages/TransferLearning';
import styled, { createGlobalStyle } from 'styled-components';
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
    </>
  );
}

const Container = styled.div`
  display: flex;
`;

const Menu = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 250px;
  height: 100vh;
  flex-direction: column;
  justify-content: flex-start;

  background-color: #333; /* Sidebar background color */
  color: #fff; /* Text color */
  padding: 20px;
`;

const MenuTitle = styled.div`
  font-size: 20px;
  padding-top: 10px;
`;

const SemiTitle = styled.div`
  font-size: 16px;
  padding-top: 10px;
  padding-left: 15px;
`;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'OpenSans_Condensed-Regular', sans-serif
  }
`;

export default App;
