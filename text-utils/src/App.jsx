import React from "react";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
// import TextForm from "./components/text-form/TextForm";

const App = () => {
  return (
    <>
      <Navbar title={"TextUtils"} />
      <div className="container mt-4">
        {/* <TextForm header={`Write What's on Your Mind🤓`} /> */}
        <About />
      </div>
    </>
  );
};

export default App;
