import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from  './components/About';

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About us" />

      {/* <navbar title="TextUtils"/> */}
      <div className="container my-2">
        <TextForm heading="enter text" />
        {/* <About/> */}

      </div>
    </>
  );
}

export default App;
