import classes from "./AddUser.module.css";
import add from "../assets/person-add-outline.svg";
import { useRef } from "react";
const AddUser = (props) => {
  const fullName = useRef();
  const email = useRef();
  const phone = useRef();

  const addHandler = (e) => {
    e.preventDefault();
    const user = {
      name: fullName.current.value,
      emailId: email.current.value,
      number: phone.current.value,
    };
    props.add(user);

    fullName.current.value = null;
    email.current.value = null;
    phone.current.value = null;
  };

  return (
    <div className={classes.add}>
      <div className={classes.cont}>
        <form className={classes.hello} onSubmit={addHandler}>
          <label>
            Name : &nbsp; <input required ref={fullName} type="text" />
          </label>
          <label>
            Email : &nbsp;
            <input required ref={email} type="email" />
          </label>
          <label>
            Phone : &nbsp;
            <input required ref={phone} type="number" />
          </label>
          <input type="image" src={add} />
        </form>
      </div>
    </div>
  );
};
export default AddUser;
