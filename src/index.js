
import ReactDOM from 'react-dom/client';
import SearchContact from './view/SearchContact/SearchContact';
import Home from './view/Home/Home';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    
   
    {
      path: "/bar0",
      element:<Home name={"Tara Sahu (Your)"} activity={"online"}/>,
    },
    {
      path: "/bar1",
      element:<Home name={"Chashni"} activity={"chadani harshali rani"}/>,
    },
    {
      path: "/bar2",
      element:<Home name={"harshali kanoje"} activity={"last seen yesterday"}/>,
    },
    
  ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
        <RouterProvider router={router} />
   </>
);