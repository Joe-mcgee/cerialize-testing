import * as firebase from "firebase";
import process from "./env.js"; /*FIXME workaround solution*/
import createHistory from 'history/createBrowserHistory';

export default class Provider {
  
  /* FIXME needs redesign, should hold an array of providers */
  
  constructor( name, auth, permissions ) {
    this.name = name;
    this.auth = auth;
    this.permissions = permissions;
    this.history = createHistory({forceRefresh: true});
  }
  
  getName() { return this.name; }
  getAuth() { return this.auth; }
  getPermissions() { return this.permissions; }
  
  getUsername(
    /* If session exists, format email into a username */) {
    const userSession = firebase.auth().currentUser;
    return ( userSession !== null ) ?
    userSession.email.substring(0, userSession.email.lastIndexOf("@")) : null;
  }
  
  setConfig(
    /* Only one firebase app is allowed, checks and creates */) {
    if(!firebase.apps.length)
      firebase.initializeApp(process.envConfig());
  }
  // Must use static for async await to work..
  async popupLogin ( 
    /* FIXME Switch statemnt should allow other provider popups */) {
    await firebase.auth().signInWithPopup(this.auth);
    const username = this.getUsername();
    (username === null)
    ? console.log("Popup login was unsucessful")
    : this.history.push(`/${username}/dashboard`);
    return username;
  }
    /* Continue API Methods... */
}
