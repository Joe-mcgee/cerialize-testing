import React from "react";
import PropTypes from "prop-types";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
import InputAdornment from "material-ui/Input/InputAdornment";
import Checkbox from "material-ui/Checkbox";
import FormControlLabel from "material-ui/Form/FormControlLabel";
// material-ui-icons
import Timeline from "material-ui-icons/Timeline";
import Code from "material-ui-icons/Code";
import Group from "material-ui-icons/Group";
import Face from "material-ui-icons/Face";
import Email from "material-ui-icons/Email";
import LockOutline from "material-ui-icons/LockOutline";
import Check from "material-ui-icons/Check";
// core components
import GridContainer from "../../components/Grid/GridContainer.jsx";
import ItemGrid from "../../components/Grid/ItemGrid.jsx";
import RegularCard from "../../components/Cards/RegularCard.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import IconButton from "../../components/CustomButtons/IconButton.jsx";
import CustomInput from "../../components/CustomInput/CustomInput.jsx";
import InfoArea from "../../components/InfoArea/InfoArea.jsx";
import registerPageStyle from "../../assets/jss/material-dashboard-pro-react/views/registerPageStyle";
import firebaseProviders from "../../routes/firebase-socials/index.js";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: []
    };
    this.props.history.listen((location, action) => {
      console.log(firebaseProviders[0].getUsername());
    });
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }
  popupLogin(){
    console.log(firebaseProviders);
    firebaseProviders[0].popupLogin();
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <GridContainer justify="center">
          <ItemGrid xs={12} sm={12} md={10}>
            <RegularCard
              cardTitle="Create Account"
              titleAlign="center"
              customCardTitleClasses={classes.cardTitle}
              customCardClasses={classes.cardClasses}
              content={
                <GridContainer justify="center">
                  <ItemGrid xs={12} sm={12} md={5}>
                    <InfoArea
                      title="Innovate Verified Market Demand"
                      description="Leverage customers that are adopting existing repeatable and scalable channels. Local customer data enables well informed assumptions to be developed from real demand."
                      icon={Timeline}
                      iconColor="rose"
                    />
                    <InfoArea
                      title="Data Driven Decision Making Simplified"
                      description="Simple framework automates the industry standard of data-driven decision making. Test managing platform deploys multiple tests easily to channels like Google AdWords and Facebook Ads. Compare test results across many channels."
                      icon={Code}
                      iconColor="primary"
                    />
                    <InfoArea
                      title="Anonymous Data Sharing Community"
                      description="Results regardless of outcome help others understand what works and what doesn’t. Users, buisnesses, and tests identity is completly private. Share successful tests in the form of presentations."
                      icon={Group}
                      iconColor="info"
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={8} md={5}>
                    <div className={classes.center}>
                      <IconButton color="google">
                        <i className="fab fa-google" />
                      </IconButton>
                      {` `}
                      <IconButton onClick={this.popupLogin.bind(this)} color="facebook">
                          <i className="fab fa-facebook-f" />
                      </IconButton>
                      {` `}
                    </div>
                    <form className={classes.form}>
                      <CustomInput
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              className={classes.inputAdornment}
                            >
                              <Face className={classes.inputAdornmentIcon} />
                            </InputAdornment>
                          ),
                          placeholder: "Name"
                        }}
                      />
                      <CustomInput
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              className={classes.inputAdornment}
                            >
                              <Email className={classes.inputAdornmentIcon} />
                            </InputAdornment>
                          ),
                          placeholder: "Email"
                        }}
                      />
                      <CustomInput
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              className={classes.inputAdornment}
                            >
                              <LockOutline
                                className={classes.inputAdornmentIcon}
                              />
                            </InputAdornment>
                          ),
                          placeholder: "Password"
                        }}
                      />
                      <FormControlLabel
                        classes={{
                          root: classes.checkboxLabelControl,
                          label: classes.checkboxLabel
                        }}
                        control={
                          <Checkbox
                            tabIndex={-1}
                            onClick={() => this.handleToggle(1)}
                            checkedIcon={
                              <Check className={classes.checkedIcon} />
                            }
                            icon={<Check className={classes.uncheckedIcon} />}
                            classes={{
                              checked: classes.checked
                            }}
                          />
                        }
                        label={
                          <span>
                            I agree to the{" "}
                            <a href="#pablo">terms and conditions</a>.
                          </span>
                        }
                      />
                      <div className={classes.center}>
                        <Button color="rose">
                          Register
                        </Button>
                      </div>
                    </form>
                  </ItemGrid>
                </GridContainer>
              }
            />
          </ItemGrid>
        </GridContainer>
      </div>
    );
  }
}

RegisterPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(registerPageStyle)(RegisterPage);
