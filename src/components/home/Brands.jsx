import styled from "styled-components";
import { breakpoints, defaultTheme } from "../../styles/themes/default";
import { Container, Section, TitleWrapper } from "../../styles/style";
import { brandsData } from "../../data/data";

const StyledSectionTitle = styled(TitleWrapper)`
  padding-left: 0;
  &::after {
    display: none;
  }

  @media (max-width: ${breakpoints.sm}) {
    margin-bottom: 20px;
  }
`;

const BrandsContent = styled.div`
  border-radius: 12px;
  padding: 40px 0;

  @media (max-width: ${breakpoints.lg}) {
    padding: 24px 0;
  }
`;

const BrandsListWrapper = styled.div`
  padding: 12px;
  margin-top: 40px;
  gap: 24px;

  @media (max-width: ${breakpoints.sm}) {
    gap: 12px;
    margin-top: 20px;
  }
`;

const BrandsItemWrapper = styled.div`
  width: 178px;
  height: 80px;
  border-radius: 12px;
  background-color: ${defaultTheme.color_white};
  padding: 16px;

  img {
    width: auto;
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 120px;
    border-radius: 8px;
  }

  @media (max-width: ${breakpoints.xs}) {
    width: 80px;
    height: 50px;
    border-radius: 4px;
  }
`;

const Brands = () => {
  return (
    <Section>
      <Container>

        <BrandsContent className="bg-outerspace">

          <StyledSectionTitle className="text-white text-center justify-center flex-col">
            <h3>Top Brands Deal</h3>
            <p className="text-xxl text-white">
              Up to <span className="text-yellow">60% </span>
              off on brands.
            </p>
          </StyledSectionTitle>

          <BrandsListWrapper className="flex items-center flex-wrap justify-center">
            {brandsData?.map((brand) => {
              return (
                <BrandsItemWrapper key={brand.id} 
                  className="flex items-center justify-center"
                >
                  <img src={brand.imgSource} alt={brand.id} />
                </BrandsItemWrapper>
              );
            })}
          </BrandsListWrapper>
          
        </BrandsContent>

      </Container>
    </Section>
  )
}

export default Brands
