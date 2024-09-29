import { useState } from "react";
import { 
  ColorsFilter,
  FilterTitle, 
  FilterWrap, 
  PriceFilter, 
  ProductCategoryFilter, 
  SizesFilter,
  StyleFilter
} from '../../styles/filter';
import { ProductFilterList, StyleFilterList } from "../../data/data";
import { staticImages } from "../../utils/images";

const ProductFilter = () => {

  const [isProductFilterOpen, setProductFilterOpen] = useState(true);
  const [isPriceFilterOpen, setPriceFilterOpen] = useState(true);
  const [isColorFilterOpen, setColorFilterOpen] = useState(true);
  const [isSizeFilterOpen, setSizeFilterOpen] = useState(true);
  const [isStyleFilterOpen, setStyleFilterOpen] = useState(true);

  const toggleFilter = (filter) => {

    switch (filter) {
      case "product":
        setProductFilterOpen(!isProductFilterOpen);
        break;

      case "price":
        setPriceFilterOpen(!isPriceFilterOpen);
        break;
      
      case "color":
        setColorFilterOpen(!isColorFilterOpen);
        break;

      case "size":
        setSizeFilterOpen(!isSizeFilterOpen);
        break;

      case "style":
        setStyleFilterOpen(!isStyleFilterOpen);
        break;
    
      default:
        break;
    }
  };

  const [minRange, setMinRange] = useState(300);
  const [maxRange, setMaxRange] = useState(700);
  const rangeMin = 0;

  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = parseInt(e.target.value);

    if (inputName === 'min') {
      setMinRange(inputValue);

      if (maxRange - inputValue < rangeMin) {
        setMaxRange(inputValue + rangeMin);
      }
    } else if (inputName === 'max') {
      setMaxRange(inputValue);

      if (inputValue - minRange < rangeMin) {
        setMinRange(inputValue - minRange);
      }
    }
  };

  const calculateRangePosition = (value, max) => {
    return (value / max) * 100 + "%";
  };

  return (
    <>
      <ProductCategoryFilter>
        <FilterTitle 
          className="filter-title flex items-center justify-between"
          onClick={() => toggleFilter("product")}
        >
          <p className="filter-title-text text-gray text-base font-semibold text-lg">
            Filter
          </p>

          <span className={`text-gray text-xxl filter-title-icon ${
            !isProductFilterOpen ? "rotate" : ""}`}
          >
            <i className="bi bi-filter"></i>
          </span>
        </FilterTitle>

        <FilterWrap className={`${!isProductFilterOpen ? "hide" : "show"}`}>
          {ProductFilterList?.map((productFilter) => (
            <div key={productFilter.id} 
              className="product-filter-item"
            >
              <button 
                type="button" 
                className="filter-item-head w-full flex items-center justify-between"
              >
                <span className="filter-head-title text-base text-gray font-semibold">
                  {productFilter.title}
                </span>

                <span className="filter-head-icon text-gray">
                  <i className="bi bi-chevron-right"></i>
                </span>
              </button>
            </div>
          ))}
        </FilterWrap>
      </ProductCategoryFilter>

      <PriceFilter>
          <FilterTitle 
            onClick={() => toggleFilter("price")}
            className="filter-title flex items-center justify-between"
          >
            <p className="filter-title-text text-gray text-base font-semibold text-lg">
              Price
            </p>

            <span className={`text-gray text-xl filter-title-icon ${
              !isPriceFilterOpen ? "rotate" : ""}`}
            >
              <i className="bi bi-chevron-up"></i>
            </span>
          </FilterTitle>

          <FilterWrap className={`range filter-wrap ${
            !isPriceFilterOpen ? "hide" : "show"}`}
          >
            <div className="range-slider">
              <span className="range-selected h-full bg-sea-green"
                style={{
                  left: calculateRangePosition(minRange, 1000),
                  right: calculateRangePosition(1000 - maxRange, 1000)
                }}
              >

              </span>
            </div>

            <div className="range-input">
              <input 
                type="range" name="min" 
                min={0} max={1000} step={10} 
                value={minRange}
                onChange={handleInputChange} 
                className="min w-full"
              />

              <input 
                type="range" name="max" 
                min={0} max={1000} step={10} 
                value={maxRange}
                onChange={handleInputChange} 
                className="min w-full"
              />
            </div>

            <div className="range-price w-full flex items-center">
              <input 
                type="number" name="min" 
                value={minRange} 
                onChange={handleInputChange} 
                className="text-center" 
              />

              <input 
                type="number" name="max" 
                value={maxRange} 
                onChange={handleInputChange} 
                className="text-center" 
              />
            </div>
          </FilterWrap>
      </PriceFilter>

      <ColorsFilter>
        <FilterTitle className="flex items-center justify-between"
          onClick={() => toggleFilter("color")}
        >
          <p className="filter-title-text text-gray text-base font-semibold text-lg">
            Colors
          </p>

          <span className={`text-gray text-xl filter-title-icon ${
            !isColorFilterOpen ? "rotate" : ""}`}
          >
            <i className="bi bi-chevron-up"></i>
          </span>
        </FilterTitle>

        <FilterWrap className={`${!isColorFilterOpen ? "hide" : "show"}`}>
          <section className="colors-list grid">
            <div className="colors-item text-center flex flex-col justify-center items-center">
              <input type="checkbox" name="check" id="check" />
              <img src={staticImages.color1} alt="purple" />
            </div>

            <div className="colors-item text-center flex flex-col justify-center items-center">
              <input type="checkbox" name="check" id="check" />
              <img src={staticImages.color2} alt="black" />
            </div>

            <div className="colors-item text-center flex flex-col justify-center items-center">
              <input type="checkbox" name="check" id="check" />
              <img src={staticImages.color3} alt="red" />
            </div>

            <div className="colors-item text-center flex flex-col justify-center items-center">
              <input type="checkbox" name="check" id="check" />
              <img src={staticImages.color4} alt="orange" />
            </div>

            <div className="colors-item text-center flex flex-col justify-center items-center">
              <input type="checkbox" name="check" id="check" />
              <img src={staticImages.color5} alt="blue" />
            </div>

            <div className="colors-item text-center flex flex-col justify-center items-center">
              <input type="checkbox" name="check" id="check" />
              <img src={staticImages.color6} alt="white" />
            </div>

            <div className="colors-item text-center flex flex-col justify-center items-center">
              <input type="checkbox" name="check" id="check" />
              <img src={staticImages.color7} alt="brown" />
            </div>

            <div className="colors-item text-center flex flex-col justify-center items-center">
              <input type="checkbox" name="check" id="check" />
              <img src={staticImages.color8} alt="green" />
            </div>

            <div className="colors-item text-center flex flex-col justify-center items-center">
              <input type="checkbox" name="check" id="check" />
              <img src={staticImages.color9} alt="yellow" />
            </div>

            <div className="colors-item text-center flex flex-col justify-center items-center">
              <input type="checkbox" name="check" id="check" />
              <img src={staticImages.color10} alt="gray" />
            </div>

            <div className="colors-item text-center flex flex-col justify-center items-center">
              <input type="checkbox" name="check" id="check" />
              <img src={staticImages.color11} alt="pink" />
            </div>

            <div className="colors-item text-center flex flex-col justify-center items-center">
              <input type="checkbox" name="check" id="check" />
              <img src={staticImages.color12} alt="purple" />
            </div>
          </section>
        </FilterWrap>
      </ColorsFilter>

      <SizesFilter>
        <FilterTitle className="flex items-center justify-between"
            onClick={() => toggleFilter("size")}
          >
            <p className="filter-title-text text-gray text-base font-semibold text-lg">
              Size
            </p>

            <span className={`text-gray text-xl filter-title-icon ${
              !isSizeFilterOpen ? "rotate" : ""}`}
            >
              <i className="bi bi-chevron-up"></i>
            </span>
          </FilterTitle>

          <FilterWrap className={`${!isSizeFilterOpen ? "hide" : "show"}`}>
            <section className="sizes-list grid text-center justify-center">
              <div className="sizes-item text-sm font-semibold text-outerspace w-full">
                <input type="checkbox" name="check" id="check" />
                <span className="flex items-center justify-center uppercase">
                  xxs
                </span>
              </div>

              <div className="sizes-item text-sm font-semibold text-outerspace w-full">
                <input type="checkbox" name="check" id="check" />
                <span className="flex items-center justify-center uppercase">
                  xs
                </span>
              </div>

              <div className="sizes-item text-sm font-semibold text-outerspace w-full">
                <input type="checkbox" name="check" id="check" />
                <span className="flex items-center justify-center uppercase">
                  s
                </span>
              </div>

              <div className="sizes-item text-sm font-semibold text-outerspace w-full">
                <input type="checkbox" name="check" id="check" />
                <span className="flex items-center justify-center uppercase">
                  m
                </span>
              </div>

              <div className="sizes-item text-sm font-semibold text-outerspace w-full">
                <input type="checkbox" name="check" id="check" />
                <span className="flex items-center justify-center uppercase">
                  l
                </span>
              </div>

              <div className="sizes-item text-sm font-semibold text-outerspace w-full">
                <input type="checkbox" name="check" id="check" />
                <span className="flex items-center justify-center uppercase">
                  xl
                </span>
              </div>

              <div className="sizes-item text-sm font-semibold text-outerspace w-full">
                <input type="checkbox" name="check" id="check" />
                <span className="flex items-center justify-center uppercase">
                  3xl
                </span>
              </div>

              <div className="sizes-item text-sm font-semibold text-outerspace w-full">
                <input type="checkbox" name="check" id="check" />
                <span className="flex items-center justify-center uppercase">
                  4xl
                </span>
              </div>
            </section>
          </FilterWrap>
      </SizesFilter>

      <StyleFilter onClick={() => toggleFilter("style")}>
        <FilterTitle className="flex items-center justify-between">
          <p className="filter-title-text text-gray text-base font-semibold text-lg">
            Dress Style
          </p>
          <span
            className={`text-gray text-xl filter-title-icon ${
              !isStyleFilterOpen ? "rotate" : ""}`}
          >
            <i className="bi bi-chevron-up"></i>
          </span>
        </FilterTitle>

        <FilterWrap className={`${isStyleFilterOpen ? "hide" : "show"}`}>
          {StyleFilterList?.map((styleFilter) => (
            <div key={styleFilter.id} 
              className="style-filter-item"
            >
              <button type="button" 
                className="filter-item-head w-full flex items-center justify-between"
              >
                <span className="filter-head-title text-base text-gray font-semibold">
                  {styleFilter.title}
                </span>

                <span className="filter-head-icon text-gray">
                  <i className="bi bi-chevron-right"></i>
                </span>
              </button>
            </div>
          ))}
        </FilterWrap>
      </StyleFilter>
    </>
  )
}

export default ProductFilter
