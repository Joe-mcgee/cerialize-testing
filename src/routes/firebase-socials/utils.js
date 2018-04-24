import * as firebase from "firebase";

let googlePermissions = {
    
/* refrence link? */};

let facebookPermissions = {
  'email': true,
  'public_profile': true,
  'user_birthday': false,
  'user_friends': false,
  'user_hometown': false,
  'user_location': false,
  'user_likes': false,
  'user_photos': false,
  'user_posts': false,
  'user_tagged_places': false,
  'user_videos': false,
  'user_events': false,
  'user_managed_groups': false,
  'publish_actions': false,
  'rsvp_event': false,
  'ads_management': false,
  'ads_read': false,
  'business_management': false,
  'read_audience_network_insights': false,
  'read_insights': false,
  'manage_pages': false,
  'pages_manage_cta': false,
  'pages_manage_instant_articles': false,
  'pages_show_list': false,
  'read_page_mailboxes': false,
  'publish_pages': false,
  'pages_messaging': false,
  'pages_messaging_payments': false,
  'pages_messaging_phone_number': false,
  'pages_messaging_subscriptions': false,
  'instagram_basic': false,
  'instagram_manage_comments': false,
  'instagram_manage_insights': false
/* email and public_profile key passes app reviews */};

const valuesWithTruthyKeysToArray = (permissions) => {
  const newPermissions = [];
  for (let key in permissions) {
    if(permissions[key] === false) {
        delete permissions[key];
    } else {
        newPermissions.push(key);
    }
  }
  return newPermissions;
/* Truthy values store keys in array */}

const objectValuesToArray = (keyValuePairs) => {
  const permissionList = [];
  for(let key in keyValuePairs)
      if(keyValuePairs.hasOwnProperty(key))
        permissionList.push(keyValuePairs[key]);

  return permissionList;
/* key = provider name, value = permission array */}

const namePermissionPairs = {
    'Google': valuesWithTruthyKeysToArray(googlePermissions),
    'Facebook': valuesWithTruthyKeysToArray(facebookPermissions)
/* Object of provider keys and permission array pairs */};

const nameList = Object.keys(namePermissionPairs);
const permissionList = objectValuesToArray(namePermissionPairs);
const authList = [ 
  new firebase.auth.GoogleAuthProvider(),
  new firebase.auth.FacebookAuthProvider()
];
export { nameList, permissionList, authList };