import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './components/navBar';
import NavBar from './components/navBar';
import Home from './pages/home';
import Tariffs from './pages/tariffs';
import ContactUs from './pages/contactUs';
import GuestBook from './pages/guestBook';
import WhatsOn from './pages/whatsOn';
import VenueCymru from './pages/venueCymru';
import CitySightseeing from './pages/citySightseeing';
import Snowdonia from './pages/snowdonia';
import GreatOrme from './pages/greatOrme';
import Castles from './pages/castles';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/tariffs">
            <Tariffs />
          </Route>
          <Route path="/contactUs">
            <ContactUs />
          </Route>
          <Route path="/guestBook">
            <GuestBook />
          </Route>
          <Route path="/whatsOn">
            <WhatsOn />
          </Route>
          <Route path="/venueCymru">
            <VenueCymru />
          </Route>
          <Route path="/citySightseeing">
            <CitySightseeing />
          </Route>
          <Route path="/snowdonia">
            <Snowdonia />
          </Route>
          <Route path="/greatOrme">
            <GreatOrme />
          </Route>    
          <Route path="/castles">
            <Castles />
          </Route>           
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
