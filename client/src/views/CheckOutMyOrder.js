import React from "react";
import OrderTable from "../components/molecules/OrderTable/OrderTable";
import HeaderParagraph from "../components/atoms/HeaderParagraph/HeaderParagraph";

const CheckOutMyOrder = () => {
  return (
    <>
      <HeaderParagraph>your order :</HeaderParagraph>
      <OrderTable />
    </>
  );
};

export default CheckOutMyOrder;
