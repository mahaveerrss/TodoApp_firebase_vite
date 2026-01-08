import React from "react";
import List from "../../List/List";

function Completed() {
  return (
    <div className="flex w-full justify-center items-center">
      <List isCompletePage={true} />
    </div>
  );
}

export default Completed;
