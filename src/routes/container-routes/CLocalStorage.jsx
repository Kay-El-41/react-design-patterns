import React from "react";
import Navbar from "../../components/Navbar";
import DataSource from "../../components/pattern-components/container-components/DataSource";

const getDataFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};

const Message = ({ msg }) => {
  return <h1>{msg}</h1>;
};

const CLoacalStorage = () => {
  return (
    <>
      <Navbar />
      <section className="container mt-3 space-y-5">
        <div>
          <DataSource
            getData={() => getDataFromLocalStorage("isAuthenticated")}
            resourceName={"msg"}
          >
            <Message />
          </DataSource>
        </div>
      </section>
    </>
  );
};

export default CLoacalStorage;
