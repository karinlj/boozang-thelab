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
//import UnsortedList from "./components/Lists/UnsortedList";

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
              <Route path="/SortedList">
                <SortedList />
              </Route>
              {/* <Route path="/UnsortedList">
                <UnsortedList />
              </Route> */}
            </Switch>
          </div>
        </div>
        <Footer />
      </div>

      {/*   <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/posts/:post_id">
              <PostDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch> */}
    </Router>
  );
}
export default App;
