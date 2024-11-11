// import router from './router';
import { createBrowserRouter } from "react-router-dom";
import App from "./components/jeu/App";
const  router = createBrowserRouter([

    {
        path: "/",
        element: <App />,
    },
]);
export default router;
