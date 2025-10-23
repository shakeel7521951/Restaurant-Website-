import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import ContactPage from './pages/Contact';

const MainFunction = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainFunction />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
]);

// Main App component
function App() {
  return <RouterProvider router={router} />;
}

export default App;
