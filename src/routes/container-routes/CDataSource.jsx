import axios from "axios";
import React from "react";
import Navbar from "../../components/Navbar";
import DataSource from "../../components/pattern-components/container-components/DataSource";
import UserInfo from "../../components/pattern-components/container-components/UserInfo";

const getDataFromServer = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const CDataSource = () => {
  return (
    <>
      <Navbar />
      <section className="container mt-3 space-y-5">
        <div>
          <DataSource
            getData={() => getDataFromServer("/api/users/3")}
            resourceName={"user"}
          >
            <UserInfo />
          </DataSource>
        </div>
      </section>
    </>
  );
};

export default CDataSource;

//? This is more generic than the other container components
//* The fetching data can be either axios or other anything.
