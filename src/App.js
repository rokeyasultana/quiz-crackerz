import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home'
import Main from './pages/Layout/Main'
import Blog from './pages/Blog/Blog'
import NotFound from './pages/NotFound/NotFound';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      errorElement: <NotFound></NotFound>,
      children: [
        {
          path: '/', 
          loader: async () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz`)
          },
          element:<Home></Home>,
        },
        {path: '/blog',
        element: <Blog></Blog>
      }
       
        
      ]
    }
  ])
  return (
    <div className="App">
  <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
