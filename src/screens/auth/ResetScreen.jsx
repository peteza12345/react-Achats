import styled from "styled-components";
import { FormGridWrapper, FormTitle } from "../../styles/form_grid";
import { Container } from "../../styles/style";
import { staticImages } from "../../utils/images";
import { FormElement, Input } from "../../styles/form";
import { BaseButtonBlack } from "../../styles/button";
import { Link } from "react-router-dom";

const ResetScreenWrapper = styled.section``;

function ResetScreen() {
   return (
      <ResetScreenWrapper>
         <FormGridWrapper>
            <Container>
               <section className="form-grid-content">
                  <div className="form-grid-left">
                     <img src={staticImages.form_img3} alt="form img" className="object-fit-cover" />
                  </div>

                  <div className="form-grid-right">
                     <FormTitle>
                        <h3>Reset your password</h3>
                        <p>
                           Enter your email and we &apos;ll send you a link to reset your
                           password.
                        </p>
                        <p>Please check it.</p>
                     </FormTitle>

                     <form>
                        <FormElement>
                           <label 
                              htmlFor="email" 
                              className="form-elem-label"
                           >
                              Email
                           </label>
                           <Input 
                              type="text" 
                              name="email" 
                              placeholder="" 
                              className="form-elem-control"
                           />
                        </FormElement>

                        <BaseButtonBlack type="submit" className="form-submit-btn">
                           Send
                        </BaseButtonBlack>

                     </form>

                     <p className="flex flex-wrap account-rel-text">
                        <Link to="/sign_in" className="font-medium">
                           Back to login
                        </Link>
                     </p>
                     
                  </div>
               </section>
            </Container>
         </FormGridWrapper>
      </ResetScreenWrapper>
   )
}

export default ResetScreen
