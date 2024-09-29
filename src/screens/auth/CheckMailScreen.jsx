import styled from "styled-components";
import { FormGridWrapper, FormTitle } from "../../styles/form_grid";
import { Container } from "../../styles/style";
import { staticImages } from "../../utils/images";
import { FormElement, Input } from "../../styles/form";
import { BaseButtonBlack } from "../../styles/button";
import { Link } from "react-router-dom";

const CheckMailScreenWrapper = styled.section``;

const CheckMailScreen = () => {
   return (
      <CheckMailScreenWrapper>
         <FormGridWrapper>
            <Container>
               <section className="form-grid-content">
                  <div className="form-grid-left">
                     <img 
                        src={staticImages.form_img1} 
                        alt="form img" 
                        className="object-fit-cover"
                     />
                  </div>

                  <div className="form-grid-right">
                     <FormTitle>
                        <h3>Check Email</h3>
                        <p>
                           Please check your email inbox and click on the provided link
                           to reset your password. If you don&apos;t receive email. Click
                           here to resend.
                        </p>
                     </FormTitle>

                     <form>
                        <FormElement>
                           <label htmlFor="email" className="form-elem-label">
                              Email
                           </label>
                           <Input 
                              type="text"
                              name="email"
                              placeholder=""
                              className="form-elem-control"
                           />

                           <span className="form-elem-error">
                              We cannot find your email.
                           </span>
                        </FormElement>

                        <BaseButtonBlack type="submit" className="form-submit-btn">
                           Send
                        </BaseButtonBlack>

                     </form>

                     <p className="flex flex-wrap account-rel-text">
                        <Link to="/sign_in" className="font-medium">
                           <span className="text-underline">Back to Login</span>
                        </Link>
                     </p>

                  </div>
               </section>
            </Container>
         </FormGridWrapper>
      </CheckMailScreenWrapper>
   )
}

export default CheckMailScreen
