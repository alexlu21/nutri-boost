import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './component/common/NavBar';
import Home from './component/home.js';
import ProductsView from './component/producto/ProductsView';
import AddProduct from './component/producto/AddProduct';
import EditProduct from './component/producto/EditProduct';
import ProductList from './component/producto/ProductList';
import SobreNosotros from './component/SobreNosotros.js';
import Sugerencias from './component/Sugerencias.js';
import Login from './component/Login.js';
import Registro from './component/Registro.js';

// Aquí es encuentran todas las rutas de la aplicación
function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            <Route path="/product-list" element={<ProductList />} />
            <Route path="/view-products" element={<ProductsView />} />
            <Route path="/add-products" element={<AddProduct />} />
            <Route path="/edit-product/:id" element={<EditProduct />} />
            <Route path="/sugerencias" element={<Sugerencias/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/registro" element={<Registro/>}/>
          </Routes>
        </div>
        {/* Este es el footer que aparecerá siempre en la parte de abajo */}
        <div className="container-fluid bg-white border-top border-white"></div>
          <footer className="bg-transparent py-4 text-white">
            <div className="container text-center">
              <p className="mb-0">&copy; Nutri Boost. Todos los derechos reservados.</p>
            </div>
          </footer>
        </div>
    </Router>
  );
}

export default App;
