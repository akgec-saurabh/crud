import classes from "./Header.module.css";
import logoadd from "../assets/logoadd.png";
import addlogo from "../assets/addLogo.png";
const Header = () => {
  return (
    <div className={classes.div}>
      <img src={logoadd} className={classes.img} />
      <img src={addlogo} className={classes.img} />
    </div>
  );
};
export default Header;
