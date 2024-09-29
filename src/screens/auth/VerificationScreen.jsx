import styled from "styled-components";
import { FormGridWrapper, FormTitle } from "../../styles/form_grid";
import { Container } from "../../styles/style";
import { staticImages } from "../../utils/images";
import { FormElement, Input } from "../../styles/form";
import { BaseButtonGreen } from "../../styles/button";

const VerificationScreenWrapper = styled.section``;

const VerificationScreen = () => {
   return (
      <VerificationScreenWrapper>
         <FormGridWrapper>
            <Container>
               <section className="form-grid-content">
                  <div className="form-grid-left">
                     <img
                        src={staticImages.form_img4}
                        alt="form img"
                        className="object-fit-cover"
                     />
                  </div>

                  <div className="form-grid-right">
                     <FormTitle>
                        <h3>Verification</h3>
                        <p>Verify your code.</p>
                     </FormTitle>

                     <form>
                        <FormElement>
                           <label htmlFor="code" className="form-elem-label">
                              Code
                           </label>
                           <Input
                              type="text" 
                              name="code" 
                              placeholder=""
                              className="form-elem-control"
                           />
                        </FormElement>

                        <BaseButtonGreen type="submit" className="form-submit-btn">
                           Verify Code
                        </BaseButtonGreen>
                     </form>
                  </div>
               </section>
            </Container>
         </FormGridWrapper>
      </VerificationScreenWrapper>
   )
}

export default VerificationScreen
