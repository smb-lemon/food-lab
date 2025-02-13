### Vite Configuration

Create a vite project <br>
```sh
npm create vite@latest project-name
```
Install Dpendencies <br>
```sh
npm install
```
Start the development server <br>
```sh
npm run dev 
```
### React Router DOM & SPA

A single source application or SPA is a web application that operates with in a single HTML page where
the content is dynamically updated without requiring a full page reload. It provides a more fluid and responsive user 
experience by loading and updating only the necessary data resulting in faster interactions and smoother transitions 
between different sections of the application. In order to achieve that, we are going to use React Router Dom Library, 
which is a library for React that enables the cient side routing. Basically we will use React Dom Library in order to 
build our single page application. React Dom Library allows us to create multipage experience within the single page 
application. It facilitates navigation between different componenets and manages the rendering of specific content based
on the current url enhancing the user's browser experience. By utilizing React Router Dom in the single page application,
we can build more interactive and seemless user interface where different components and sections can be accessed and update
dynamically. 

### Setup React Router

Install React Router
```sh
npm i react-router-dom
```
Importing Router
```js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
```
Example :
```js
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path:'/',
    element:<h2>Home Page</h2>
  },
  {
    path:'/about',
    element:
    <div>
      <h2>About Info</h2>
    </div>
  },
])

const App = () => {
  
  return (
    < RouterProvider router={router} />
  )
  
};
export default App;
```
### Component Setup

We can setup component into index file by exporting them into it. We can update react router element with
components and display them into pages.