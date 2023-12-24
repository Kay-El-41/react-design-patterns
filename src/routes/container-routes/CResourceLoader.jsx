import React from "react";
import UserInfo from "../../components/pattern-components/container-components/UserInfo";
import BookInfo from "../../components/pattern-components/container-components/BookInfo";
import Navbar from "../../components/Navbar";
import ResourceLoader from "../../components/pattern-components/container-components/ResourceLoader";

const CResourceLoader = () => {
  return (
    <>
      <Navbar />
      <section className="container mt-3 space-y-5">
        <div>
          <ResourceLoader resourceUrl={"/users/2"} resourceName={"user"}>
            <UserInfo />
          </ResourceLoader>
        </div>

        <div>
          <ResourceLoader resourceUrl={"/books/1"} resourceName={"book"}>
            <BookInfo />
          </ResourceLoader>
        </div>
      </section>
    </>
  );
};

export default CResourceLoader;
