import React from "react";
import RecipeMid from "../components/Recipie/RecipeMid";
import RecipieContainer from "../components/Recipie/RecipieContainer";
import Recipiehead from "../components/Recipie/Recipiehead";

function Recipes(props) {
  return (
    <div>
      <Recipiehead />
      <RecipeMid />
      <RecipieContainer />
    </div>
  );
}

export default Recipes;
