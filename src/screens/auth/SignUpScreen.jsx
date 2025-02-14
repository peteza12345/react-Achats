import styled from "styled-components"
import { CheckboxGroup, FormGridWrapper, FormTitle } from "../../styles/form_grid"
import { Container } from '../../styles/style'
import { staticImages } from '../../utils/images'
import AuthOption from '../../components/auth/AuthOptions'
import { FormElement, Input } from '../../styles/form'
import PasswordInput from '../../components/auth/PasswordInput'
import { Link } from "react-router-dom"
import { BaseButtonBlack } from "../../styles/button"

const SignUpScreenWrapper = styled.section`
   form {
      margin-top: 40px;
      .form-elem-text {
         margin-top: -16px;
         display: block;
      }
   }

   .text-space {
      margin: 0 4px;
   }
`;

function SignUpScreen() {
   return (
      <SignUpScreenWrapper>
         <FormGridWrapper>
            <Container>
               <section className="form-grid-content">
                  <div className="form-grid-left">
                     <img 
                        src={staticImages.form_img2} 
                        alt="form img" 
                        className="object-fit-cover" 
                     />
                  </div>

                  <div className="form-grid-right">
                     <FormTitle>
                        <h3>Sign Up</h3>
                        <p className="text-base">
                           Sign up for free to access to in any of our products
                        </p>
                     </FormTitle>
                     <AuthOption />

                     <form>
                        <FormElement>
                           <label 
                              htmlFor="user" 
                              className="forme-elem-label"
                           >
                              User name or email address
                           </label>
                           <Input 
                              type="text" 
                              placeholder="" 
                              name="user" 
                              className="form-elem-control"
                           />

                           <span className="form-elem-error">
                              * Please enter valid email address.
                           </span>
                        </FormElement>

                        <PasswordInput fieldName= "Password" name= "password"/>
                        <span className="form-elem-text font-medium">
                           Use 8 or more characters with a mix of letters, numbers &
                           symbols 
                        </span>

                        <CheckboxGroup>
                           <li className="flex items-center">
                              <input type="checkbox" />
                              <span>Agree to our 
                                 <Link to="/" className="text-underline"> 
                                    Terms of use
                                 </Link>
                                 <span className="text-space">and</span>
                                 <Link to="/" className="text-underline"> 
                                    Privacy Policy
                                 </Link>
                              </span>
                           </li>

                           <li className="flex items-center">
                              <input type="checkbox" />
                              <span className="text-sm">
                                 Subscribe to our monthly newsletter.
                              </span>
                           </li>
                        </CheckboxGroup>

                        <BaseButtonBlack type="submit" className="form-submit-btn">
                           Sign Up
                        </BaseButtonBlack>
                     </form>

                     <p className="flex flex-wrap account-rel-text">
                        Already have an account?
                        <Link to="/sign_in" className="font-medium">
                           Log in
                        </Link>
                     </p>
                  </div>
               </section>
            </Container>
         </FormGridWrapper>
      </SignUpScreenWrapper>
   )
}

export default SignUpScreen
