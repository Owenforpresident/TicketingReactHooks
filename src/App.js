import React, {useEffect, Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'; 
import SearchBar from './components/layouts/SearchBar';
import './App.css';
import Logs from './components/logs/Logs'


function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
<Fragment> 
  <SearchBar/>
     <Logs/>
</Fragment>
  );
}

export default App;
