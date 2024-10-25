import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';

function App() {
  return (
    <>
      <Navbar title="Case Converter & Text Analyzer" aboutTextUtils="About" />
      {/* <Navbar/> This will use deault props */}

      <div className="container my-3">
        <TextForm heading="Enter the text to convert it's case"/>
        {/* <About/> */}
      </div>

      

    </>

  );
}

export default App;
