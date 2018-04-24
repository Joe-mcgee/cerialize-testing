import React from 'react';
import LoginPage from '../LoginPage';

/*test Dependencies*/
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import { configure } from 'enzyme';
import shallow from 'enzyme';
import { mount } from 'enzyme';
import render from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import expect from 'expect';
import enzymify from 'expect-enzyme'
import sinon from 'sinon';

/*material-ui component dependencies*/
import withStyles from "material-ui/styles/withStyles";
import InputAdornment from "material-ui/Input/InputAdornment";
import Face from "material-ui-icons/Face";
import Email from "material-ui-icons/Email";
import LockOutline from "material-ui-icons/LockOutline";

/*core component dependencies*/
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import ItemGrid from "../../../components/Grid/ItemGrid.jsx";
import LoginCard from "../../../components/Cards/LoginCard.jsx";
import CustomInput from "../../../components/CustomInput/CustomInput.jsx";
import Button from "../../../components/CustomButtons/Button.jsx";
import loginPageStyle from "../../../assets/jss/material-dashboard-pro-react/views/loginPageStyle.jsx";

Enzyme.configure({ adapter: new Adapter() });

describe(' LoginPage Tests ', 
 (/* REPO: https://github.com/jesseroyc/cerialize
*/) => {/* Login Page - Origin Branch - Has Three Sections */

/*BUISNESS LOGIC - CONTROLLERS*/
 
  describe(' Buisness Logic ',
     (/* REPO: https://github.com/jesseroyc/cerialize
    */) => {/* Buisness Logic - Controllers - Has Three Components */

    /*User Login Auth*/
     
      describe(' User Login Authentication Features',
       (/* REPO: https://github.com/jesseroyc/cerialize
      */) => {/* User Login Authorization - Has Four Features */
      
          it(' 1) Verified Users Get Cookies ', 
           (/* REPO: https://github.com/jesseroyc/cerialize
          */) => {/* secure encrypted password verified, cookie issued*/
            
            /*
             *code
             */
            
            expect(true).toEqual(true);
          });
          it(' 2) Verified Users Get Sessions', 
           (/* REPO: https://github.com/jesseroyc/cerialize
          */) => {/* secure encrypted password verified, session issued*/
            
            /*
             *code
             */
            
            expect(true).toEqual(true);
          });
          it(' 3) Text Field Security ', 
           (/* REPO: https://github.com/jesseroyc/cerialize
          */) => {/* user attempts malicious tampering of input fields*/
            
            /*
             *code
             */
            
            expect(true).toEqual(true);
          });
      });

    /*Social Network Login*/
     
      describe(' Social Network Login Successful ',
       (/* REPO: https://github.com/jesseroyc/cerialize
      */) => {/* Social Network Login - Has Three Features*/
      
          it(' 1) Login With Twitter ', 
           (/* REPO: https://github.com/jesseroyc/cerialize
          */) => {/* user logs in using Twitter account credentials*/
            
            /*
             *code
             */
            
            expect(true).toEqual(true);
          });
          it(' 2) Login With Facebook ', 
           (/* REPO: https://github.com/jesseroyc/cerialize
          */) => {/* user logs in using Facebook account credentials*/
            
            /*
             *code
             */
            
            expect(true).toEqual(true);
          });
          it(' 3) Login With Google ', 
           (/* REPO: https://github.com/jesseroyc/cerialize
          */) => {/* user logs in using Google account credentials*/
            
            /*
             *code
             */
            
            expect(true).toEqual(true);
          });
      });
      
    /*Page Routing*/
     
      describe('buisnessLogic/userPageRouting',
       (/* REPO: https://github.com/jesseroyc/cerialize
      */) => {/* User Login Authorization - Has Four Features */
      
          it(' 1) No Password No Routing ', 
           (/* REPO: https://github.com/jesseroyc/cerialize
          */) => {/* redirects users with no session to <LoginPage/>*/
            
            /*
             *code
             */
            
            expect(true).toEqual(true);
          });
          it(' 2) Pricing Page Accessible ', 
           (/* REPO: https://github.com/jesseroyc/cerialize
          */) => {/* non-sessions access to <PricingPage />*/
            
            /*
             *code
             */
            
            expect(true).toEqual(true);
          });
          it(' 3) Register Page Accessible ', 
           (/* REPO: https://github.com/jesseroyc/cerialize
          */) => {/* non-sessions access to <RegisterPage />*/
            
            /*
             *code
             */
            
            expect(true).toEqual(true);
          });
          it(' 4) Landing Page Accessible', 
           (/* REPO: https://github.com/jesseroyc/cerialize
          */) => {/* non-sessions access to <LandingPage />*/
            
            /*
             *code
             */
            
            expect(true).toEqual(true);
          });
      });
  });
  
  
/*COMPONENT DATA - MODELS*/
 
  describe('login page rendering, props, classes and states', () => {
    describe('components rendered properly', () => {
      it('<LoginPage /> Snapshot', () => {
        const testRenderer = renderer.create(
          <LoginPage />,
        );
        expect(testRenderer.toJSON()).toMatchSnapshot();
      });
      it('calls componentDidMount properly', () => {
        sinon.spy(LoginPage.prototype, 'componentDidMount');
        const wrapper = mount(<LoginPage />);
        expect(LoginPage.prototype.componentDidMount.calledOnce).toEqual(true);
      });
      it('allows us to set props', () => {
        const wrapper = mount(<LoginPage cardAnimaton="cardHidden" />);
        expect(wrapper.props().cardAnimaton).toEqual('cardHidden');
        wrapper.setProps({ cardAnimaton: 'LoginPage' });
        expect(wrapper.props().cardAnimaton).toEqual('LoginPage');
      });
    });
  });
  
/*COMPONENT THEMES - VIEW*/

  describe("branding, design and static labels", () => {
    const wrapper = mount(<LoginPage />);
    
    it('ensures the facebook sign in icon and button aesthetics remain unchanged', () => {
      expect(
        wrapper.containsMatchingElement(
          <span className="MuiButton-label-223">
            <i className="fab fa-facebook-square"/>
          </span>
          )
      ).toEqual(true);
    });
    it('ensures the twitter sign in icon and button aesthetics remain unchanged', () => {
      expect(
        wrapper.containsMatchingElement(
          <span className="MuiButton-label-223">
            <i className="fab fa-twitter"/>
          </span>
          )
      ).toEqual(true);
    });
    it('ensures the google sign in icon and button aesthetics remain unchanged', () => {
      expect(
        wrapper.containsMatchingElement(
          <span className="MuiButton-label-223">
            <i className="fab fa-google-plus" />
          </span>
          )
      ).toEqual(true);
    });
    it('ensures the login title label aesthetics remain unchanged', () => {
      expect(
        wrapper.containsMatchingElement(
          <span className="MuiTypography-root-150 MuiTypography-headline-155 MuiCardHeader-title-148 LoginCard-cardTitle-109">
            Login
          </span>
          )
      ).toEqual(true);
    });
    it("ensures the 'Or Be Classical' subtitle label aesthetics remain unchanged", () => {
      expect(
        wrapper.containsMatchingElement(
            <p
              className="LoginCard-cardSubtitle-110"
            >
              Or Be Classical
            </p>
          )
      ).toEqual(true);
    });
    it("ensures the 'Email...' input field label aesthetics remain unchanged", () => {
      expect(
        wrapper.containsMatchingElement(
          <label
            className="MuiFormLabel-root-274 MuiInputLabel-root-268 MuiInputLabel-formControl-269 MuiInputLabel-animated-272 CustomInput-labelRoot-252 CustomInput-labelWithAdornment-262"
            htmlFor="email"
          >
            Email...
          </label>
          )
      ).toEqual(true);
    });
    it("ensures the 'Password' input field label aesthetics remain unchanged", () => {
      expect(
        wrapper.containsMatchingElement(
          <label
            className="MuiFormLabel-root-274 MuiInputLabel-root-268 MuiInputLabel-formControl-269 MuiInputLabel-animated-272 CustomInput-labelRoot-252 CustomInput-labelWithAdornment-262"
            htmlFor="password"
          >
            Password
          </label>
          )
      ).toEqual(true);  
    });
    it("ensures the email icon aesthetics remain unchanged", () => {
      expect(
        wrapper.containsMatchingElement(
          <svg
            aria-hidden="true"
            className="MuiSvgIcon-root-296 LoginPage-inputAdornmentIcon-5"
            color={undefined}
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path
              d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
            />
          </svg>
          )
      ).toEqual(true);
    });
    it("ensures the password icon aesthetics remain unchanged", () => {
      expect(
        wrapper.containsMatchingElement(
          <svg
            aria-hidden="true"
            className="MuiSvgIcon-root-296 LoginPage-inputAdornmentIcon-5"
            color={undefined}
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"
            />
          </svg>
          )
      ).toEqual(true);
    });
    it("ensures the 'Lets Go' label and aesthetics remain unchanged", () => {
      expect(
        wrapper.containsMatchingElement(
          <span
            className="MuiButton-label-223"
          >
            Let's Go
          </span>
          )
      ).toEqual(true);
    });
  });
});