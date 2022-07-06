import React from "react";
import EmailForm from "./components/EmailForm/EmailForm";
import Header from "./components/Header/Header";
import Feature from "./components/Feature/Feature";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <EmailForm />
      <Feature
        icon="icon1"
        title="Premium Materials"
        desc="Our trombones use the shiniest brass which is sourced locally.
        This will increase the longevity of your purchase.
      
      
              "
      />
      <Feature
        icon="icon2"
        title="Fast Shipping"
        desc="We make sure you recieve your trombone as soon as we have
        finished making it. We also provide free returns if you are not
        satisfied."
      />
      <Feature
        icon="icon3"
        title="Quality Assurance"
        desc="For every purchase you make, we will ensure there are no damages
        or faults and we will check and test the pitch of your
        instrument."
      />
    </div>
  );
}

export default App;
