import styled from "styled-components";
import { FormGridWrapper, FormTitle } from "../../styles/form_grid";
import { Container } from "../../styles/style";
import { staticImages } from "../../utils/images";
import PasswordInput from "../../components/auth/PasswordInput";
import { BaseButtonBlack } from "../../styles/button";

const ChangePwdScreenWrapper = styled.section``;

const ChangePasswordScreen = () => {
   return (
      <ChangePwdScreenWrapper>
         <FormGridWrapper>
            <Container>
               <section className="form-grid-content">
                  <div className="form-grid-left">
                     <img 
                        src={staticImages.form_img5} 
                        alt="form img" 
                        className="object-fit-cover"
                     />
                  </div>

                  <div className="form-grid-right">
                     <FormTitle>
                        <h3>Create New Password</h3>
                        <p>
                           Your new password mst be different from previous used
                           passwords.
                        </p>
                     </FormTitle>

                     <form>
                        <PasswordInput fieldName="Password" name="password" />
                        <PasswordInput
                           fieldName="Confirm Password"
                           name="confirm_password"
                           errorMsg="New password and confirm password do not match"
                        />

                        <BaseButtonBlack type="submit" className="form-submit-btn">
                           Reset Password
                        </BaseButtonBlack>
                     </form>
                  </div>
               </section>
            </Container>
         </FormGridWrapper>
      </ChangePwdScreenWrapper>
   )
}

export default ChangePasswordScreen
