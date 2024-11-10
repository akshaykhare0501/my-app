import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
//Reference for react router: https://reactrouter.com/en/main/start/overview, https://v5.reactrouter.com/web/guides/quick-start

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  // const removeBodyClasses = ()=>{
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-warning');
  // }

  const toggleMode = (cls) => {
    // removeBodyClasses();
    // console.log(cls);
    // document.body.classList.add('bg-'+cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'Text Utilizer - Dark Mode';
      // setInterval(() => {
      //   document.title ="Text Utilizer - Amazing App!";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Text Utilizer - Try Now!";
      // }, 1500);
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = 'Text Utilizer - Light Mode';
    }

  }

  return (
    <>
      {/* <Navbar title="Case Converter & Text Analyzer" aboutTextUtils="About" /> */}
      {/* <Navbar/> This will use deault props */}

      {/* <Router> */}

        <Navbar title="Text Utilizer" mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert} />

        <div className="container my-3">
          {/* <Switch> */}
                {/* /users --> Component 1
                /users/home --> Component 2 (if you don't write 'exact path', it will show Component 1 due to partial matching)*/}
            {/* <Route exact path="/"> */}
              <TextForm heading="Try Text Utilizer" mode={mode} showAlert={showAlert} />
            {/* </Route> */}
            {/* <Route exact path="/about"> */}
              {/* <About mode={mode}/> */}
            {/* </Route> */}
          {/* </Switch> */}
        </div>

      {/* </Router> */}

    </>

  );
}

export default App;
