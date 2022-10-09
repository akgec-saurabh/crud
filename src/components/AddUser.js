import classes from "./AddUser.module.css";
import add from "../assets/person-add-outline.svg";
const AddUser = () => {
  return (
    <div className={classes.add}>
      <div className={classes.cont}>
        <label>
          Name : &nbsp; <input type="text" />
        </label>
        <label>
          Email : &nbsp;
          <input type="email" />
        </label>
        <label>
          Phone : &nbsp;
          <input type="number" />
        </label>
        <img src={add} />
      </div>
    </div>
  );
};
export default AddUser;
