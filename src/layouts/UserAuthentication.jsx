import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
// core components
import PagesHeader from "../components/Header/PagesHeader.jsx";
import userAuthenticationPages from "../routes/user-authentication/userAuthentication.jsx";
import pagesStyle from "../assets/jss/material-dashboard-pro-react/layouts/pagesStyle.jsx";
import bgImage from "../assets/img/register.jpeg";
// material-ui components
import withStyles from "material-ui/styles/withStyles";

class UserAuthentication extends React.Component {
  // eslint-disable-next-line
  constructor(props){ super(props); }
  
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <PagesHeader {...rest} />
        <div className={classes.wrapper} ref="wrapper">
          <div className={classes.fullPage}>
            <Switch>
              {userAuthenticationPages.map((prop, key) => {
                if (prop.collapse) {
                  return null;
                }
                if (prop.redirect) {
                  return (
                    <Redirect from={prop.path} to={prop.pathTo} key={key} />
                  );
                }
                return (
                  <Route
                    path={prop.path}
                    component={prop.component}
                    key={key}
                  />
                );
              })}
            </Switch>
            <div
              className={classes.fullPageBackground}
              style={{ backgroundImage: "url(" + bgImage + ")" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

UserAuthentication.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(pagesStyle)(UserAuthentication);
