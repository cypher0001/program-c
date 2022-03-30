
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import { useState } from 'react';
import Alert from './components/Alert';
import Aboutus from './components/Aboutus';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

function App() {
  const [darkMode,setDarkMode]=useState("light");
  const toggleMode=()=>{
    // console.log("58");
    if(darkMode==='light'){
      setDarkMode("dark");
      document.body.style.backgroundColor='black';
      showAlert("success","Dark mode enabled!");
    }
    else{
      setDarkMode("light");
      document.body.style.backgroundColor='white';
      showAlert("success","Light mode enabled!");
    }
  }
  const [alert, setalert] = useState(null);
  const showAlert=(type,message)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }
  return (
    <>
     <Router>
      <Navbar title="TextUtils" link1="About us " mode={darkMode}  toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      {/* <div className="container"><Form heading="Enter your text below" mode={darkMode} /></div> */}
      {/* <Routes>
              <Route path="/about" element={<About />}>
              </Route>
              <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
              </Route>
            </Routes> */}
        
       
          <Routes>
                <Route exact path="/about" element={<Aboutus/>}></Route>
                <Route exact path="/" element={<Form heading="Enter your text below" mode={darkMode} />}>
                  
                </Route>
                
          </Routes>
        </Router>
        </>
  );
}

export default App;
