import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Error, Food, HomeLayout, Landing, Newsletter } from "./pages";

const router = createBrowserRouter([
  {
    path:'/',
    element:< HomeLayout />,
    children: [
      {
        index: true,
        element:<Landing />
        
      },
      {
        path:'/about',
        element:<About />
        
      },
      {
        path:'/newsletter',
        element:<Newsletter />
        
      },
      {
        path:'/food',
        element:<Food />
        
      },
    ]
  },
  
])

const App = () => {
  
  return (
    < RouterProvider router={router} />
  )
  
};
export default App;
