import React from "react";
import Heading from "../../CommonComponents/Heading";
import Timer from "../../CommonComponents/Timer";

const FlashSale = () => {
  return (
    <div className="container mx-auto">
      <Heading title={"Today"} description={"Flash Sale"} />
      <Timer />
    </div>
  );
};

export default FlashSale;
