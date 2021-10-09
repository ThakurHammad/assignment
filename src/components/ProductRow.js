const ProductRow = ({
  id,
  image,
  name,
  description,
  price,
  inventoryDate,
  deleteProduct,
}) => {
  return (
    <div className="row product" key={id}>
      <div className="col-md-2">
        <img src={image} alt={name} height="80" width={"80"} />
      </div>
      <div className="col-md-6 product-detail">
        <h4>Name: {name}</h4>
        <div>Dec: {description}</div>
      </div>
      <div className="col-md-4">
        <div className="product-detail">
          <h4>Price: ${price}</h4>
          <div>Date: {inventoryDate}</div>
          <button
            onClick={() => {
              deleteProduct(id);
            }}
          >
            Delete Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductRow;
