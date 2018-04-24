import React from "react";
import PropTypes from "prop-types";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
// material-ui-icons
import Search from "material-ui-icons/Search";
// core components
import CustomInput from "../CustomInput/CustomInput.jsx";
import SearchButton from "../CustomButtons/IconButton.jsx";
import headerLinksStyle from "../../assets/jss/material-dashboard-pro-react/components/headerLinksStyle";

class HeaderLinks extends React.Component {
  state = {
    open: false
  };
  handleClick = () => {
    this.setState({ open: !this.state.open });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    
    const { classes } = this.props;
    const searchButton = classes.top + " " + classes.searchButton;
    
    return (
      <div>
        <CustomInput
          formControlProps={{
            className: classes.top + " " + classes.search
          }}
          inputProps={{
            placeholder: "Search",
            inputProps: {
              "aria-label": "Search",
              className: classes.searchInput
            }
          }}
        />
        <SearchButton
          color="white"
          aria-label="edit"
          customClass={searchButton}
        >
          <Search className={classes.searchIcon} />
        </SearchButton>
      </div>
    );
  }
}

HeaderLinks.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(headerLinksStyle)(HeaderLinks);
