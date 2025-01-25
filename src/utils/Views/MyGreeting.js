import React, { useState } from "react";

export function MyGreeting() {
  // let greeting = "hello worlds!";
const myArray = useState("The time has come to");
const greeting = myArray[0];
const setGreeting = myArray[1];
setTimeout(changeGreeting, 3000);

  return (
    <section>
      <h3>My Greeting</h3>
      <p>{greeting}</p>
    </section>
  );

  function changeGreeting() {
    debugger;
    // greeting = "goodbye world!";
    setGreeting("GALVANiZE");
    
  }
}
