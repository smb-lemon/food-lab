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

### Link Component

To set up link, we can update the homepage with a Link component to the page for going page to page.
We can set into homapage which will show to about page from below syntax:
```js
    < Link to='/about'>About Page</Link>
```
`to` is the location where page will be redirecting.So by this way we can set up the link component into the router. To create an external link, we can use `a` tag for that.
```html
<a href="https://google.com/">Google</a>
```
or
```js
 < Link to='https://google.com/'>Google Home</Link>
 ```

 ### Nesting pages(Outlet Component)

 We can nest pages using Children. We can nest into children with other component passing as an object element.By passing them, we can show all pages the same content from the root directory. For setting a default root page, we can set `index : true`. We can use `Outlet` component from react router to nest the pages. Also we can do for all the pages for the root page setup.

 ### Navbar

 We can create a component called Navbar for navbar panel in this project.In navbar, we can create nav tag to place all the element in it.
 We can add a div with class nav-center and a span inside the div.We can 
 create another div with class nav-links and set the component Navlink of the react router to link the navbar.
 ```js
 import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <div className="nav-center">
            <span className='logo'>
                Food Lab
            </span>
            <div className="nav-links">
                < NavLink to='/' className='nav-link' >
                    Home
                </NavLink>
                < NavLink to='/about' className='nav-link' >
                    About
                </NavLink>
                < NavLink to='/newsletter' className='nav-link' >
                    Newsletter
                </NavLink>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
```
### Styled Component Setup
```sh
npm install styled-components
```
Example:
```js
import React from 'react'
import { NavLink } from 'react-router-dom'
import Wrapper from '../assets/wrapper/Navbar'

function Navbar() {
  return 
    <Wrapper>
        <div>
          Hello
        </div>
    </Wrapper>
}
```
### About Page

We can set about page into h3 tag and a para describing the about info.
The page will contain the details of the project.

### Layout Pages

To set a common layout of the pages, we can set `Outlet` component of react router. 
We can add a section with a classname page in HomeLayout page and add outlet component.
Then we can style them using the styled component.

### Error Handling

We can add the Link component to link up navigating back to homepage.
Then we will use `RouteError` as a hook to which will give us access to error.
We can import `Link` & `useRouterError` from react router dom. We can also import 
the image from the assets. Then we can set error as useRouterError function. For the 
404 error status , we can set the status into if condition and add the images and other 
details and placed them into the div and return them. We can return different values if the status is different.

### Styling Error

We can set the main div of the Error file to Wrapper component for styling. We can import the wrapper from the styled component named error.

### Loader

Each route can define a `"loader"` function to provide data to the route element before it renders.

- must return something even `"null"` otherwise error

#### useEffect approach

Landing.jsx

```js
const fetchSomething = async () => {
  try {
    const response = await axios.get('/someUrl');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  fetchSomething();
}, []);
```

### Loader Approach
```js
import { useLoaderData } from 'react-router-dom';

export const loader = async () => {
  return 'something';
};

const Landing = () => {
  const data = useLoaderData();
  console.log(data);
  return <h1>Landing</h1>;
};
export default Landing;
```
app.jsx
```js
import { loader as landingLoader } from './pages/Landing.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement:<Error/>
    children: [
      {
        index: true,
        loader: landingLoader,
        element: <Landing />,
      },
  
  
  // alternative approach
      {
        index: true,
        loader: () => {
          // do stuff here
        },
        element: <Landing />,

      },
      // rest of the routes
    ],
  },
]);
```
### Fetching Spooncular Api

We can import axios for fetching the api. Setting loader as an async
function ,we can add try-catch block for fetching the api. We can set a
env file to store the api key. Then we can set response to axios to get the api call. Response will get the url with some parameters assosiated 
with it like api key and number of items.We can then return the response 
with data. We can catch error using the catcah block.Then we can set Landing page as a useloaderdata and pass the map function to filter out
the data.
