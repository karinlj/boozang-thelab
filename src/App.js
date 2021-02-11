import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/layout/Navbar";
import SideDrawer from "./components/layout/SideDrawer/SideDrawer";
//import Backdrop from "./components/layout/Backdrop/Backdrop";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";
import Intro from "./components/Intro";
import Overview from "./components/Overview";
import SortedList from "./components/Lists/SortedList";
import UnsortedList from "./components/Lists/UnsortedList";
import CatShelter from "./components/Lists/catList/CatShelter";
import CatDetails from "./components/Lists/catList/CatDetails";
import AddCat from "./components/Lists/catList/AddCat";
import FormValidation from "./components/forms/FormValidation";

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const handleToggle = () => {
    console.log("handleToggle");
    // this.setState(prevState => {
    //   //passing func to setState
    //   //if close it will open and viceversa
    //   return { sideDrawerOpen: !prevState.sideDrawerOpen }; //set the opposite
    // });
  };

  const handleBackdropAndLinkClick = () => {
    setSideDrawerOpen(false);
    //this.setState({ sideDrawerOpen: false });
  };

  return (
    <Router>
      <div className="App" style={{ height: "100%" }}>
        <Navbar handleDrawerClick={handleToggle} />
        <SideDrawer
          show={sideDrawerOpen}
          clickLink={handleBackdropAndLinkClick}
        />
        <Header className="header" />
        <div className="content-section">
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/introduction">
                <Intro />
              </Route>
              <Route path="/overview">
                <Overview />
              </Route>
              <Route path="/sortedList">
                <SortedList />
              </Route>
              <Route path="/unsortedList">
                <UnsortedList />
              </Route>
              <Route path="/catshelter">
                <CatShelter />
              </Route>
              <Route path="/addcat">
                <AddCat />
              </Route>
              <Route path="/cats/:cat_id">
                <CatDetails />
              </Route>
              <Route path="/formValidation">
                <FormValidation />
              </Route>
            </Switch>
          </div>
        </div>
        <Footer />
      </div>

      {/*   <Switch>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch> */}
    </Router>
  );
}
export default App;
