import { PropTypes } from 'prop-types'
import { Container, Section } from "../../styles/style"
import Title from "../common/Title"
import ProductList from "../product/ProductList"

const Catalog = ({ catalogTitle, products }) => {
  return (
    <Section>
      <Container>

        <div className="categories-content">
          <Title titleText={catalogTitle}/>
          <ProductList products={products}/>
        </div>

      </Container>
    </Section>
  )
}

export default Catalog;

Catalog.propTypes = {
  catalogTitle: PropTypes.string,
  products: PropTypes.array
};
