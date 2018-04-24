import UserAuthentication from "../layouts/UserAuthentication.jsx";
import Dashboard from "../layouts/Dashboard.jsx";
import firebaseProviders from "./firebase-socials/index.js";

const assembleRoutes = () => {
  const userSession = firebaseProviders[0].getUsername();
  const dependentRoutes = ( userSession !== null ) ?
  [
    {/* Session exists */
      path: `/${userSession}/dashboard`, 
      name: "Dashboard", 
      component: Dashboard 
    }
  ]:[
    {/* No session found */
      path: "/", 
      name: "UserAuthentication",
      component: UserAuthentication 
    }
  ];
  return dependentRoutes;
/* Assembles main level routes based on user session */};

const indexRoutes = assembleRoutes();
console.log("indexRoute exported as: ", indexRoutes);
export default indexRoutes;