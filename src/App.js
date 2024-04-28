import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ProductListing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
