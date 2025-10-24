import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Flyers from './pages/Flyers';
import Menu from './pages/Menu';
import VisitingCard from './pages/VisitingCard';
import Poster from './pages/Poster';
import ContactPage from './pages/Contact';
// import LoginPage from './components/common/LoginPage';
// import SignupPage from './components/common/SignupPage';
import WhatSapp from './components/common/WhatSapp';

// Layout component
const MainLayout = () => {
  return (
    <div className="overflow-x-hidden">
      <WhatSapp/>
      <Navbar />
      <Outlet /> {/* Child routes render here */}
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <ContactPage /> },

      // Services routes
      { path: 'services', element: <Services /> }, 
      { path: 'services/flyers', element: <Flyers /> },
      { path: 'services/menus', element: <Menu /> },
      { path: 'services/visiting-cards', element: <VisitingCard /> },
      { path: 'services/posters', element: <Poster /> },
      // { path: 'login', element: <LoginPage /> },
      // { path: 'signup', element: <SignupPage /> },

    ],
  },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;






