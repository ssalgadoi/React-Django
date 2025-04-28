import './App.css'
import Home from './components/Home';
import About from './components/About';
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom';

/**
 * Componente principal de la aplicación React.
 * Se encarga de renderizar las rutas y mostrar u ocultar
 * la barra de navegación según la ubicación actual.
 */
function App() {
  // Hook que devuelve información sobre la ruta actual
  const location = useLocation();

  /**
   * Determina si se debe ocultar la Navbar.
   * Solo se oculta en las rutas de login y registro,
   * porque el usuario aún no está autenticado.
   */
  const hideNavbar = location.pathname === '/' || location.pathname === '/register';

  return (
    <>
      {/* Mostrar Navbar solo si el usuario ya está logueado */}
      {!hideNavbar && <Navbar />}

      {/* Rutas de la aplicación */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
