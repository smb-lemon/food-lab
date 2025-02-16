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
### SPA

SPA stands for Single-Page Application, which is a web application that dynamically updates its content without requiring a full page reload. It achieves this by loading the initial HTML, CSS, and JavaScript resources and then dynamically fetching data and updating the DOM as users interact with the application.

React Router is a JavaScript library used in React applications to handle routing and navigation. It provides a declarative way to define the routes of an application and render different components based on the current URL. React Router allows developers to create a seamless, client-side navigation experience within a SPA by mapping URLs to specific components and managing the history and URL changes.

[React Router](https://reactrouter.com/en/main)

```sh
npm i react-router-dom@6.11.2
```

App.jsx

```js
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h2>home page</h2>,
  },
  {
    path: '/about',
    element: (
      <div>
        <h2>about page</h2>
      </div>
    ),
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
```
### Navbar

- create components/Navbar.jsx

Navbar.jsx

```js
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className='nav-center'>
        <span className='logo'>MixMaster</span>
        <div className='nav-links'>
          <NavLink to='/' className='nav-link'>
            Home
          </NavLink>
          <NavLink to='/about' className='nav-link'>
            About
          </NavLink>
          <NavLink to='/newsletter' className='nav-link'>
            Newsletter
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
```

- setup in HomeLayout

### Styled Components

- CSS in JS
- Styled Components
- have logic and styles in component
- no name collisions
- apply javascript logic
- [Styled Components Docs](https://styled-components.com/)
- [Styled Components Course](https://www.udemy.com/course/styled-components-tutorial-and-project-course/?referralCode=9DABB172FCB2625B663F)

```sh
npm install styled-components
```

```js
import styled from 'styled-components';

const Wrapper = styled.div`
  // styles go here
`;
```

- no name collisions, since unique class
- vscode-styled-components extension
- colors and bugs

```js
import styled from 'styled-components';
const StyledBtn = styled.button`
  background: red;
  color: white;
  font-size: 2rem;
  padding: 1rem;
`;
```

### Alternative Setup for CSS

- style entire react component

```js
const Wrapper = styled.el``;

const Component = () => {
  return (
    <Wrapper>
      <h1> Component</h1>
    </Wrapper>
  );
};
```

- only responsible for styling

### Assets

- wrapper folder in assets

#### Navbar.jsx

```js
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Wrapper>
      <div className='nav-center'>
        <span className='logo'>MixMaster</span>
        <div className='nav-links'>
          <NavLink to='/' className='nav-link'>
            Home
          </NavLink>
          <NavLink to='/about' className='nav-link'>
            About
          </NavLink>
          <NavLink to='/newsletter' className='nav-link'>
            Newsletter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};
```
#### About.jsx

```jsx
import Wrapper from '../assets/wrappers/AboutPage';

const About = () => {
  return (
    <Wrapper>
      <h3>About Us</h3>
      <p>
        project details
      </p>
    </Wrapper>
  );
};

export default About;
```
#### Error Page

In the error page, we can show error 404 using the following
snippet : 
```js
import Wrapper from '../assets/wrappers/Error';
import { Link, useRouteError } from 'react-router-dom';
import img from 'image-location';

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt='not found' />
          <h3>text </h3>
          <p>Text</p>
          <Link to='/'>back home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3>text</h3>
      </div>
    </Wrapper>
  );
};

export default Error;
```
### Fetch

- useEffect approach

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

### Loader

Each route can define a `"loader"` function to provide data to the route element before it renders.

- must return something even `"null"` otherwise error

Landing.jsx

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
### Setup React Toastify

main.jsx

```js
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer position='top-center' autoClose={2000} />
    <App />
  </React.StrictMode>
);
```
### Newsletter

We can update the newsletter component using form which will be submitted.The form
will have name, lastName, email input and a submit button.

### Default Behavior of form

The "method" attribute in an HTML form specifies the HTTP method to be used when submitting the form data to the server. The two commonly used values for the "method" attribute are:

- GET: This is the default method if the "method" attribute is not specified. When the form is submitted with the GET method, the form data is appended to the URL as a query string. The data becomes visible in the URL, which can be bookmarked and shared. GET requests are generally used for retrieving data from the server and should not have any side effects on the server.

- POST: When the form is submitted with the POST method, the form data is included in the request payload rather than being appended to the URL. POST requests are typically used when submitting sensitive or large amounts of data to the server, as the data is not directly visible in the URL. POST requests can have side effects on the server, such as updating or inserting data.

- action attribute

  The "action" attribute in an HTML form specifies the URL or destination where the form data should be sent when the form is submitted. It defines the server-side script or endpoint that will receive and process the form data.

If the action attribute is not provided in the HTML form, the browser will send the form data to the current URL, which means it will submit the form to the same page that the form is on. This behavior is referred to as a "self-submitting" form.

### FormData API

- a great solution when we have bunch of inputs
- inputs must have name attribute

The FormData interface provides a way to construct a set of key/value pairs representing form fields and their values, which can be sent using the fetch() or XMLHttpRequest.send() method. It uses the same format a form would use if the encoding type were set to "multipart/form-data".

### React Router - Action

Route actions are the "writes" to route loader "reads". They provide a way for apps to perform data mutations with simple HTML and HTTP semantics while React Router abstracts away the complexity of asynchronous UI and revalidation. This gives you the simple mental model of HTML + HTTP (where the browser handles the asynchrony and revalidation) with the behavior and UX capabilities of modern SPAs.