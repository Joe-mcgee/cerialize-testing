import Provider from "./Provider.js"; /* Class export */
import { nameList, authList, permissionList } from "./utils";
const firebaseProviders = ( names, auths, permissions 
/* Removes providers without permissions, remainder to array */) => {
  const providerArray = [];
  for(let i = 0; i < names.length; i++)
    if( permissions[i].length !== 0 )
      providerArray.push( new Provider( names[i], auths[i], permissions[i]) );
  return providerArray;
};
export default firebaseProviders(nameList, authList, permissionList);