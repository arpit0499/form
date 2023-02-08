import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const usenavigate = useNavigate();
  const [porductlist, setProductslist] = useState(null);
  const [displayusername, displayusernameupdate] = useState("");
  useEffect(() => {
    let username = sessionStorage.getItem("username");
    if (username === "" || username === null) {
      usenavigate("/login");
    } else {
      displayusernameupdate(username);
    }

    axios
      .get("https://dummyjson.com/products?limit=100")
      .then((res) => {
        const products = res.data.products;
        setProductslist(products);
        console.log(products);
      })
      .catch((err) => {
        console.log(err.messsage);
      });
  }, []);

  return (
    <div>
      <div className="header">
        <h2>UserDashboard</h2>
        <span style={{ marginLeft: "80%" }}>
          Welcome <b>{displayusername}</b>
        </span>
        <Link style={{ float: "right" }} to={"/login"}>
          Logout
        </Link>
      </div>
      <h1 className="text-center">Welcome {displayusername}</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <td>id</td>
            <td>title</td>
            <td>rating</td>
            <td>description</td>
          </tr>
        </thead>
        <tbody>
          {porductlist &&
            porductlist.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.rating}</td>
                <td>{item.description}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDashboard;
