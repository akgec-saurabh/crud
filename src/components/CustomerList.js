import classes from "./CustomerList.module.css";
import Header from "./Header";
import edit from "../assets/create-outline.svg";
import trash from "../assets/trash-outline.svg";
import AddUser from "./AddUser";

const CustomerList = (props) => {
  return (
    <div>
      <Header />
      <AddUser add={props.add} />
      <div className={classes.flex}>
        <table className={classes.table}>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Login Id</th>
              <th>Phone Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {props.list.map((item) => {
              return (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{item.emailId}</td>
                  <td>{item.number}</td>
                  <td>
                    <div
                      className={classes.btn}
                      onClick={() => props.onInvoice(item.name)}
                    >
                      <img className={classes.eimg} src={edit} />
                      <img className={classes.trash} src={trash} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default CustomerList;
