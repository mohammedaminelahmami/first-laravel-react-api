import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from './components/Test'
import Home from './Screens/client/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Default */}
        <Route index path='/' element={<Home />} />

        {/* Auth */}

        {/* Test */}
        <Route path='/test' element={<Test />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;