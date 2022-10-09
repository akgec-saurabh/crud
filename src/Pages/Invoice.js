import { useRef, useState } from "react";
import classes from "./Invoice.module.css";

const Invoice = (props) => {
  const [products, setProducts] = useState([
    {
      name: "iphone",
      price: 749,
      quantity: 1,
    },
  ]);

  const productName = useRef();
  const productPrice = useRef();
  const productQuantity = useRef();

  const delHandler = (e) => {
    setProducts((prev) => {
      const arr = prev.filter((item) => item.name !== e.target.value);
      console.log(arr);
      return arr;
    });
    // console.log(e.target.value);
  };

  const addProductHandler = (e) => {
    e.preventDefault();
    const product = {
      name: productName.current.value,
      price: Number(productPrice.current.value),
      quantity: Number(productQuantity.current.value),
    };
    console.log(product);
    setProducts((prev) => {
      return [...prev, product];
    });
    productName.current.value = null;
    productPrice.current.value = null;
    productQuantity.current.value = null;
  };
  return (
    <div className={classes.in}>
      <div className={classes.add}>
        <div>Add New Product</div>

        <form onSubmit={addProductHandler}>
          <label>
            Name
            <input ref={productName} required type="text"></input>
          </label>

          <label>
            Price
            <input ref={productPrice} required type="number"></input>
          </label>

          <label>
            Quantity
            <input ref={productQuantity} required type="number"></input>
          </label>
          <button type="submit">Add Products</button>
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => {
            return (
              <tr key={Math.random()}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <button value={item.name} onClick={delHandler}>
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <span>
          Invoice Total : &nbsp;
          <span>
            Rs.
            {products
              .map((item) => item.price * item.quantity)
              .reduce((a, b) => a + b)}
          </span>
        </span>
      </div>
    </div>
  );
};
export default Invoice;
