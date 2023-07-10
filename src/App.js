import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Facts from "./pages/Facts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />
  },
  {
     path: "/facts",
     element: <Facts /> 
  }, 
  {
    path: "facts/:factId",
    element: <Facts />
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
