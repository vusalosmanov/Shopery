import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTER } from './router/Routes'

function App() {
  const router=createBrowserRouter(ROUTER)
  return (
    <>
    <RouterProvider router={router}/>
 </>
  );
}

export default App;
