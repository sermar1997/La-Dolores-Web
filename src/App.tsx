import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.tsx';
import Home from './pages/Home.tsx';
import Products from './pages/Products.tsx';
import VermutAperol from './pages/VermutAperol.tsx';
import History from './pages/History.tsx';
import Contact from './pages/Contact.tsx';
import ProductDetails from './pages/ProductDetails.tsx';
import About from './pages/About.tsx';
import Tastings from './pages/Tastings.tsx';

// Import i18n configuration
import './i18n/config';

function App() {
  return (
    <Router>
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="productos" element={<Products />} />
            <Route path="productos/:productId" element={<ProductDetails />} />
            <Route path="vermut-aperol" element={<VermutAperol />} />
            <Route path="historia" element={<History />} />
            <Route path="sobre-nosotros" element={<About />} />
            <Route path="contacto" element={<Contact />} />
            <Route path="catas" element={<Tastings />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
