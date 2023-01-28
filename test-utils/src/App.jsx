import React from "react";
import Navbar from "./components/navbar/Navbar";
import TextForm from "./components/text-form/TextForm";

const App = () => {
  return (
    <>
      <Navbar title={"TextUtils"} />
      <div className="container mt-4">
        <TextForm header={`Write What's on Your Mind🤓`} />
      </div>
    </>
  );
};

export default App;
