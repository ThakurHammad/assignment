import React, { useState, useEffect } from "react";
import ProductRow from "./ProductRow";
import AddProduct from "./AddProduct";
import SearchBar from "./Search";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as ProductActions from "./../redux/actions";
const ProductList = ({ products, actions }) => {
  const [input, setInput] = useState("");
  const [data, setData] = useState(products);
  const [showForm, setShowForm] = useState(false);
  const updateSearch = async (s) => {
    if (s.length > 0) {
      let search = await products?.filter((el) =>
        el.name.toLowerCase().includes(s)
      );
      setData(search);
    } else {
      setData(products);
    }
    setInput(s);
  };

  useEffect(() => {
    setData(products);
  }, [products?.length]);
  return (
    <div className="container main-content">
      {showForm ? (
        <AddProduct
          addProduct={actions.addProduct}
          onHide={() => setShowForm(false)}
        />
      ) : (
        <>
          <div className="row">
            <div className="col-md-9">
              <button
                onClick={() => {
                  setShowForm(true);
                }}
              >
                Add Product
              </button>
            </div>
            <div className="col-md-2">
              <SearchBar input={input} setInput={updateSearch} />
            </div>
          </div>
          {data?.map((product) => {
            return (
              <ProductRow
                id={product.id}
                image={product.image}
                name={product.name}
                description={product.description}
                price={product.price}
                inventoryDate={product.inventoryDate}
                deleteProduct={actions.deleteProduct}
              />
            );
          })}
        </>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.data.products,
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ProductActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
