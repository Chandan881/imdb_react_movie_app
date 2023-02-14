
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home'
import SingleMovie from './SingleMovie'
import Error from './Error';
import { AppProvider } from './context';



function App() {
  return (
    <div className="App">
    <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='movie/:id' element={<SingleMovie/>} />
        <Route path='*' element={<Error />} />
      </Routes>  
    </BrowserRouter>
    </AppProvider>
    </div>
  );
}

export default App;
