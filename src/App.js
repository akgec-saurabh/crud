import { Fragment } from "react";
import "./App.css";
import CustomerList from "./components/CustomerList";
import { useEffect, useState } from "react";
import InvoicePage from "./Pages/InvoicePage";
import MainInvoice from "./Pages/MainInvoice";

function App() {
  const [customerList, setCustomerList] = useState([]);
  const [invoice, setInvoice] = useState(false);
  const [selected, setSelected] = useState();
  const [mainInvoice, setMainInvoice] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchUser = async () => {
    const url = "https://dummyjson.com/users?limit=5";
    const body = await fetch(url);
    const data = await body.json();
    const transformdata = data.users.map((item) => {
      return {
        name: item.firstName,
        emailId: item.email,
        number: item.phone,
      };
    });
    setCustomerList(transformdata);
    console.log(transformdata);
  };
  useEffect(() => {
    fetchUser();
  }, []);

  //add user
  const add = (props) => {
    console.log(props);
    setCustomerList((prev) => {
      return [...prev, props];
    });
  };

  //adding product
  const productAdd = (pro) => {
    setProducts(pro);
  };

  //open main invoice
  const mainHandler = () => {
    setMainInvoice(true);
  };

  const backMain = () => {
    setMainInvoice(false);
  };

  // const setdefHandler = (props) => {
  //   console.log(props + "ff");
  //   console.log(selected);
  // };

  return (
    <Fragment>
      {!invoice && !mainInvoice && (
        <CustomerList
          add={add}
          list={customerList}
          onInvoice={(props) => {
            setInvoice(true);
            setSelected(props);
          }}
        />
      )}
      {invoice && !mainInvoice && (
        <InvoicePage
          // onsel={setdefHandler}
          onPro={productAdd}
          onMain={mainHandler}
          list={customerList}
          sel={selected}
          onBack={() => {
            setInvoice(false);
          }}
        />
      )}
      {mainInvoice && (
        <MainInvoice onBack={backMain} sel={selected} list={products} />
      )}
    </Fragment>
  );
}

export default App;
