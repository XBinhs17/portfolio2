import DesignPage from "~/pages/DesignPage";
import DrawingPage from "~/pages/DrawingPage";
import Home from "~/pages/Home";

//Public Routes
const publicRoutes = [
    { path: "/", component: Home },
    { path: "/artworks", component: DrawingPage },
    { path: "/designs", component: DesignPage }
];

//Private Routers
const privateRoutes = [];

export { publicRoutes, privateRoutes };
