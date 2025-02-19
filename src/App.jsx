import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Error, Food, HomeLayout, Landing, Newsletter, SinglePageError } from "./pages";
import { loader as landingLoader } from "./pages/Landing";
import { action as newsletterAction } from "./pages/Newsletter";


const router = createBrowserRouter([
  {
    path:'/',
    element:< HomeLayout />,
    errorElement: < Error />,
    children: [
      {
        index: true,
        element:<Landing />,
        errorElement: < SinglePageError />,
        loader: landingLoader
        
      },
      {
        path:'/about',
        element:<About />
        
      },
      {
        path:'/newsletter',
        element:<Newsletter />,
        action: newsletterAction
        
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
