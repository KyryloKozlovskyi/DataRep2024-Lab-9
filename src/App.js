import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Read from './components/Read';
import Create from './components/Create';
import Edit from './components/Edit';

function App() {
  // Main page. Client side routing.
  // Navigates between different pages. 
  // home -> Content component, read -> Read component, create -> Create component    
  // Edit path added for editing movie data                               
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/home" element={<Content />} />
        <Route path="/read" element={<Read />} />
        <Route path="/create" element={<Create />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
