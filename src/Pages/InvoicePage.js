import Invoice from "./Invoice";
import classes from "./InvoicePage.module.css";
import Header from "../components/Header";
import { Fragment, useState } from "react";

const InvoicePage = (props) => {
  return (
    <Fragment>
      <Header />
      <button className={classes.back} onClick={props.onBack}>
        Back
      </button>
      <div className={classes.detail}>
        <div className={classes.customerDetail}>
          <label>
            Bill to :
            <select>
              {props.list.map((item) => {
                console.log("props sel " + props.sel);
                if (props.sel === item.name) {
                  return (
                    <option selected key={Math.random()}>
                      {item.name}
                    </option>
                  );
                } else {
                  return <option key={Math.random()}>{item.name}</option>;
                }
              })}
            </select>
          </label>
          <div>
            Invoice Date : <span>{new Date().toLocaleDateString()}</span>
          </div>
          <div>
            Invoice Number :&nbsp;
            <span>{`IN${Math.trunc(Math.random() * 10000000)}`}</span>
          </div>
        </div>
        <Invoice list={props.list} />
      </div>
    </Fragment>
  );
};
export default InvoicePage;
