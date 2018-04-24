import Dashboard from "../../views/Dashboard/Dashboard.jsx";
// import Settings from "../views/Dashboard/Settings.jsx";
// import New from "../views/Dashboard/New.jsx";
// import Presentations from "../views/Dashboard/Presentations.jsx";

// material-ui-icons
import DashboardIcon from "material-ui-icons/Dashboard";
import firebaseProviders from "../firebase-socials/index.js";

const dashRoutes = () => {
  const userSession = firebaseProviders[0].getUsername();
  const routes = (userSession) ?
  [
    {
      path: `/${userSession}/dashboard`,
      name: "Dashboard",
      icon: DashboardIcon,
      component: Dashboard
    },  
    // {
    //   path: `/${userSession}/settings`,
    //   name: "Settings",
    //   icon: DashboardIcon,
    //   component: Settings
    // },
    // {
    //   path: `/${userSession}/new`,
    //   name: "New",
    //   icon: DashboardIcon,
    //   component: New
    // },
    // {
    //   path: `/${userSession}/presentations`,
    //   name: "Presentations",
    //   icon: DashboardIcon,
    //   component: Presentations
    // },
    { redirect: true, path: `/`, pathTo: `/${userSession}/dashboard`, name: `Dashboard` }
  ] : [{}];
  return routes;
};

export default dashRoutes;
