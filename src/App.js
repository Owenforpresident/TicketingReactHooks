import React, { useEffect, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "./components/layouts/SearchBar";
import "./App.css";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layouts/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";

//functional component
function App() {
  //basically like componentwillmount, runs when a component mounts
  //second arguement allows you to specify if it runs every time
  //or for specific changes
  //below its being used to initialise materialize
  useEffect(() => {
    M.AutoInit();
  });
  //function just returns the
  //components like before but no render
  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <Logs />
        <AddLogModal />
        <EditLogModal />
        <AddBtn />
      </div>
    </Fragment>
  );
}
export default App;
