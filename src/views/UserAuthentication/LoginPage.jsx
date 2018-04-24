import React from "react";
import PropTypes from "prop-types";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
import InputAdornment from "material-ui/Input/InputAdornment";
// material-ui-icons
import Email from "material-ui-icons/Email";
import LockOutline from "material-ui-icons/LockOutline";
// core components
import GridContainer from "../../components/Grid/GridContainer.jsx";
import ItemGrid from "../../components/Grid/ItemGrid.jsx";
import LoginCard from "../../components/Cards/LoginCard.jsx";
import CustomInput from "../../components/CustomInput/CustomInput.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import loginPageStyle from "../../assets/jss/material-dashboard-pro-react/views/loginPageStyle.jsx";
import firebaseProviders from "../../routes/firebase-socials/index.js";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardAnimaton: ""
    };
  }
  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  popupLogin(provider) {
    return firebaseProviders.popupLogin();
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.content}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <ItemGrid xs={12} sm={6} md={4}>
              <form>
                <LoginCard
                  headerColor="rose"
                  cardTitle="Account Login"
                  footerAlign="center"
                  footer={
                    <Button color="rose" wd size="md">
                      Login
                    </Button>
                  }
                  socials={[
                    "fab fa-facebook-square",
                    "fab fa-google-plus"
                  ].map((prop, key) => {
                    return (
                      <Button
                        color="simple"
                        justIcon
                        key={key}
                        customClass={classes.customButtonClass}
                      >
                        <i className={prop} />
                      </Button>
                    );
                  })}
                  content={
                    <div>
                      <CustomInput
                        labelText="Email"
                        id="email"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputAdornmentIcon} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Password"
                        id="password"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <LockOutline
                                className={classes.inputAdornmentIcon}
                              />
                            </InputAdornment>
                          )
                        }}
                      />
                    </div>
                  }
                />
              </form>
            </ItemGrid>
          </GridContainer>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(loginPageStyle)(LoginPage);
