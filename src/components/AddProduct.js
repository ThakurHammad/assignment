import { useState } from "react";
const ProductRow = ({ addProduct, onHide }) => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    addProduct(inputs)
    onHide();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Product name:</label>
      <br />
      <input type="text" name="name" onChange={handleChange} />
      <br />
      <label>Product Price:</label>
      <br />
      <input type="number" name="price" onChange={handleChange} />

      <br />

      <label>Product Description:</label>
      <br />

      <input type="text" name="dec" onChange={handleChange} />
      <br />
      <br />
      <input type="submit" />
    </form>
  );
};

export default ProductRow;
