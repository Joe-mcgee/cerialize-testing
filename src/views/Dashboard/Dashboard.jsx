import React from "react";
import PropTypes from "prop-types";
import withStyles from "material-ui/styles/withStyles";
import dashboardStyle from "../../assets/jss/material-dashboard-pro-react/views/dashboardStyle";
/*Core component*/
import GridContainer from "../../components/Grid/GridContainer.jsx";
import firebaseProviders from "../../routes/firebase-socials/index.js";

const user = firebaseProviders[0].getUsername();

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    if(user === null)
      this.props.history.push(`/login`);
  }
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    // const { classes } = this.props;
    return (
      <div>
        <GridContainer>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
