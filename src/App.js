import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home'
import Main from './pages/Layout/Main'
import Blog from './pages/Blog/Blog'
import NotFound from './pages/NotFound/NotFound';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Statistics from './pages/Statistics/Statistics';
import QuizDetails from './pages/Quiz/QuizDetails';

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
        {
          path: '/quizDetails/:id', 
          loader: async ({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element:<QuizDetails></QuizDetails>
        },
        {path: '/blog',
        element: <Blog></Blog>
      },
        {path: '/statistics',
        loader: async () => {
          return fetch(`https://openapi.programming-hero.com/api/quiz`)
        },
        element: <Statistics></Statistics>
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
