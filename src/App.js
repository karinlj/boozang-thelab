import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/layout/Navbar";
import SideDrawer from "./components/layout/sideDrawer/SideDrawer";
import Backdrop from "./components/layout/backdrop/Backdrop";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";
import Introduction from "./components/Introduction";
import Overview from "./components/Overview";
import SortedList from "./components/lists/SortedList";
import UnsortedList from "./components/lists/UnsortedList";
import CatShelter from "./components/lists/catList/CatShelter";
import CatDetails from "./components/lists/catList/CatDetails";
import AddCat from "./components/lists/catList/AddCat";
import FormFill from "./components/forms/FormFill";
import SpeedGame from "./components/timing/SpeedGame";
import WaitGame from "./components/timing/WaitGame";
import VisualBugs from "./components/visualBugs/VisualBugs";
import YellowOrBlue from "./components/conditional/YellowOrBlue";
import CatOrDog from "./components/conditional/CatOrDog";
import ScrambleItems from "./components/domChanges/ScrambleItems";
//import MultiScramble from "./components/domChanges/MultiScramble";
import ConcatStrings from "./components/strings/ConcatStrings";
import KittenCollect from "./components/games/KittenCollect";
import CatsOnCanvas from "./components/games/CatsOnCanvas";
import NotFound from "./components/NotFound";

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const handleToggle = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };
  const handleBackdropAndLinkClick = () => {
    setSideDrawerOpen(false);
  };
  useEffect(() => {
    // console.log("sideDrawerOpen: ", sideDrawerOpen);
  }, [sideDrawerOpen]);
  return (
    <Router>
      <div className="App" style={{ height: "100%" }}>
        <Navbar handleClick={handleToggle} />
        <SideDrawer
          show={sideDrawerOpen}
          handleClickLink={handleBackdropAndLinkClick}
        />
        {sideDrawerOpen && (
          <Backdrop handleClick={handleBackdropAndLinkClick} />
        )}
        <Header className="header" />
        <div className="content_section">
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/introduction">
                <Introduction />
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
              <Route path="/formFill">
                <FormFill />
              </Route>
              <Route path="/speedGame">
                <SpeedGame />
              </Route>
              <Route path="/waitGame">
                <WaitGame />
              </Route>
              <Route path="/visualBugs">
                <VisualBugs />
              </Route>
              <Route path="/yellowOrBlue">
                <YellowOrBlue />
              </Route>
              <Route path="/catOrDog">
                <CatOrDog />
              </Route>
              <Route path="/scramble">
                <ScrambleItems />
              </Route>
              {/* <Route path="/multiScramble">
                <MultiScramble />
              </Route> */}
              <Route path="/concatStrings">
                <ConcatStrings />
              </Route>
              <Route path="/kittenCollect">
                <KittenCollect />
              </Route>
              <Route path="/catsOnCanvas">
                <CatsOnCanvas />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
