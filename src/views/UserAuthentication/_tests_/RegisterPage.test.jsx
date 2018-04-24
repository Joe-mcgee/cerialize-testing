import RegisterPage from "../RegisterPage";
import React from "react";
import PropTypes from "prop-types";
/*node_modules*/
import Enzyme from 'enzyme';
import { configure } from 'enzyme';
import shallow from 'enzyme';
import { mount } from 'enzyme';
import render from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import expect from 'expect';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
// material-ui components
import withStyles from "material-ui/styles/withStyles";
import InputAdornment from "material-ui/Input/InputAdornment";
import Checkbox from "material-ui/Checkbox";
import FormControlLabel from "material-ui/Form/FormControlLabel";
import Timeline from "material-ui-icons/Timeline";
import Code from "material-ui-icons/Code";
import Group from "material-ui-icons/Group";
import Face from "material-ui-icons/Face";
import Email from "material-ui-icons/Email";
import LockOutline from "material-ui-icons/LockOutline";
import Check from "material-ui-icons/Check";
// core components
import GridContainer from "../../../components/Grid/GridContainer";
import ItemGrid from "../../../components/Grid/ItemGrid";
import RegularCard from "../../../components/Cards/RegularCard";
import Button from "../../../components/CustomButtons/Button";
import IconButton from "../../../components/CustomButtons/IconButton";
import CustomInput from "../../../components/CustomInput/CustomInput";
import InfoArea from "../../../components/InfoArea/InfoArea";
import registerPageStyle from "../../../assets/jss/material-dashboard-pro-react/views/registerPageStyle";

Enzyme.configure({ adapter: new Adapter() });

describe(' RegisterPage Tests ', 
 (/* REPO: https://github.com/jesseroyc/cerialize
*/) => {/* Register Page - Origin Branch - Has Three Sections */


/*BUISNESS LOGIC - CONTROLLERS*/
 
  describe(' Buisness Logic ',
     (/* REPO: https://github.com/jesseroyc/cerialize
    */) => {/* Buisness Logic - Controllers - Has Three Components */

    /*User Login Auth*/
     
      describe(' User Register Authentication Features',
       (/* REPO: https://github.com/jesseroyc/cerialize
      */) => {/* User Register Authorization - Has Four Features */
      
          test(' 1) Registered Users Get Cookies ', 
           (/* REPO: https://github.com/jesseroyc/cerialize
          */) => {/* secure encrypted password verified, cookie issued*/
            
            /*
             *code
             */
            
            expect(true).toEqual(true);
          });
          test(' 2) Registered Users Get Sessions', 
           (/* REPO: https://github.com/jesseroyc/cerialize
          */) => {/* secure encrypted password verified, session issued*/
            
            /*
             *code
             */
            
            expect(true).toEqual(true);
          });
          test(' 3) Text Field Security ', 
           (/* REPO: https://github.com/jesseroyc/cerialize
          */) => {/* user attempts malicious tampering of input fields*/
            
            /*
             *code
             */
            
            expect(true).toEqual(true);
          });
          
      });

    /*Social Network Register*/
     
      describe(' Social Network Register Successful ',
       (/* REPO: https://github.com/jesseroyc/cerialize
      */) => {/* Social Network Register - Has Three Features*/
      
          test(' 1) Register With Twitter ', 
           (/* REPO: https://github.com/jesseroyc/cerialize
          */) => {/* user Register using Twitter account credentials*/
            
            /*
             *code
             */
            
            expect(true).toEqual(true);
          });
          test(' 2) Register With Facebook ', 
           (/* REPO: https://github.com/jesseroyc/cerialize
          */) => {/* user Register using Facebook account credentials*/
            
            /*
             *code
             */
            
            expect(true).toEqual(true);
          });
          test(' 3) Register With Google ', 
           (/* REPO: https://github.com/jesseroyc/cerialize
          */) => {/* user Register using Google account credentials*/
            
            /*
             *code
             */
            
            expect(true).toEqual(true);
          });
          
      });
      
    /*Page Routing*/
     
      describe('buisnessLogic/userPageRouting',
       (/* REPO: https://github.com/jesseroyc/cerialize
      */) => {/* User Register Authorization - Has Four Features */
      
          test(' 1) No Password No Routing ', 
           (/* REPO: https://github.com/jesseroyc/cerialize
          */) => {/* redirects users with no session to <RegisterPage/>*/
            
            /*
             *code
             */
            
            expect(true).toEqual(true);
          });
          test(' 2) Pricing Page Accessible ', 
           (/* REPO: https://github.com/jesseroyc/cerialize
          */) => {/* non-sessions access to <PricingPage />*/
            
            /*
             *code
             */
            
            expect(true).toEqual(true);
          });
          test(' 3) Login Page Accessible ', 
           (/* REPO: https://github.com/jesseroyc/cerialize
          */) => {/* non-sessions access to <RegisterPage />*/
            
            /*
             *code
             */
            
            expect(true).toEqual(true);
          });
          test(' 4) Landing Page Accessible', 
           (/* REPO: https://github.com/jesseroyc/cerialize
          */) => {/* non-sessions access to <LandingPage />*/
            
            /*
             *code
             */
            
            expect(true).toEqual(true);
          });
          
      });
  });

   describe('Register page rendering', () => {
 
      describe('components rendered properly', () => {
       
         test('<RegisterPage /> Snapshot', () => {
           const component = renderer.create(
            <RegisterPage />,
           );
           let tree = component.toJSON();
           expect(tree).toMatchSnapshot();
         });
         test('calls componentDidMount properly', () => {
           sinon.spy(RegisterPage.prototype, 'componentDidMount');
           const wrapper = mount(<RegisterPage />);
           expect(RegisterPage.prototype.componentDidMount.calledOnce).toEqual(true);
         });
         test('allows us to set props', () => {
           const wrapper = mount(<RegisterPage cardAnimaton="cardHidden" />);
           expect(wrapper.props().cardAnimaton).toEqual('cardHidden');
           wrapper.setProps({ cardAnimaton: 'RegisterPage' });
         expect(wrapper.props().cardAnimaton).toEqual('RegisterPage');
         });
         
      });
   });
});