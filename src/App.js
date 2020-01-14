import React, { useEffect, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "./components/layouts/SearchBar";
import "./App.css";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layouts/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";
import {Provider} from 'react-redux';  //provides the store (which contains app level states) to components
import store from './store' //files where root reducer, create store, initial state are all combined to make the app level state

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
    <Provider store= {store} > 
    <Fragment>
       <SearchBar />
      <div className="container">
        <Logs />
        <AddLogModal />
        <EditLogModal />
        <AddBtn />
        <AddTechModal/>
        <TechListModal/>
      </div>
    </Fragment>
    </Provider>
  );
}
export default App;
