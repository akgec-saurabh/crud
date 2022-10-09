import { Fragment } from "react";
import "./App.css";
import CustomerList from "./components/CustomerList";
import { useEffect, useState } from "react";
import InvoicePage from "./Pages/InvoicePage";

function App() {
  const [customerList, setCustomerList] = useState([]);
  const [invoice, setInvoice] = useState(false);
  const [selected, setSelected] = useState();

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
  return (
    <Fragment>
      {!invoice && (
        <CustomerList
          list={customerList}
          onInvoice={(props) => {
            setInvoice(true);
            setSelected(props);
          }}
        />
      )}
      {invoice && (
        <InvoicePage
          list={customerList}
          sel={selected}
          onBack={() => {
            setInvoice(false);
          }}
        />
      )}
    </Fragment>
  );
}

export default App;
