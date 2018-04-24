import LoginPage from "../../views/UserAuthentication/LoginPage.jsx";
import RegisterPage from "../../views/UserAuthentication/RegisterPage.jsx";
// material-ui-icons
import PersonAdd from "material-ui-icons/PersonAdd";
import Fingerprint from "material-ui-icons/Fingerprint";
import firebaseProviders from "../firebase-socials/index.js";

const userAuthRoutes = () => {
  const userSession = firebaseProviders[0].getUsername();
  const routes = (userSession) ? [{}] :
  [
    {
      path: "/register",
      name: "Register",
      short: "Register",
      mini: "RP",
      icon: PersonAdd,
      component: RegisterPage
    },
    {
      path: "/login",
      name: "Login",
      short: "Login",
      mini: "LP",
      icon: Fingerprint,
      component: LoginPage
    },
    { redirect: true, path: "/", pathTo: "/login", name: "Login" }
  ];
  return routes;
};

const visitorRoutes = userAuthRoutes();
console.log("Visitor routes exported...", visitorRoutes);
export default visitorRoutes;