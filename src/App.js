import { HashRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home.js";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import './App.css';

function App() {
  return (
    <Router>
        <div>
            <Header />
                <main>
                    <Home>

                    </Home>

                        
                </main>
            <Footer />
        </div>
    </Router>        
  );
}

export default App;
