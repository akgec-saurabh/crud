import Header from "../components/Header";
import classes from "./MainInvoice.module.css";

const MainInvoice = (props) => {
  console.log(props.sel);

  return (
    <div>
      <Header />
      <button
        className={classes.back}
        onClick={() => {
          props.onBack();
        }}
      >
        Back
      </button>
      <div className={classes.box}>
        <h1>Invoice</h1>
        <h2>
          Customer Name : <span>{props.sel}</span>
        </h2>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Quantity</th>
              <th>Product Price</th>
            </tr>
          </thead>
          <tbody>
            {props.list.map((item) => {
              return (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className={classes.total}>
          {props.list.map((item) => {
            return (
              <span className={classes.last}>
                {" "}
                <span>{`Rs.${item.price}x${item.quantity}`}</span>
                <span>+</span>
              </span>
            );
          })}
        </div>

        <div className={classes.final}>
          <span>Total = Rs. &nbsp;</span>
          {props.list
            .map((item) => item.price * item.quantity)
            .reduce((a, b) => a + b)}
        </div>
      </div>
    </div>
  );
};
export default MainInvoice;
