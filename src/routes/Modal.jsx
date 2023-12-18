import React from "react";
import ModalCom from "../components/pattern-components/layout-components/modal/ModalCom";
import NumberedList from "../components/pattern-components/layout-components/list-display/lists/Numbered";
import { authors } from "../data/authors";
import SmallAuthorListItems from "../components/pattern-components/layout-components/list-display/authors/SmallListItems";

const Modal = () => {
  return (
    <ModalCom>
      <NumberedList
        items={authors}
        sourceName={"author"}
        ItemComponent={SmallAuthorListItems}
      />
    </ModalCom>
  );
};

export default Modal;
