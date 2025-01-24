import { createRoot } from "react-dom/client";
import React from "react";
import handleClick from "./controllers/handleClick";
import handleSubmit from "./controllers/handleSubmit";

const message = "The command line is so easy now!";
const root = createRoot(window.bodyTag);
root.render(
  <main>
    <h1>React is AWESOME"</h1>
    <p>{message}</p>
    <h3>React Programming</h3>
    <button onClick={handleClick}>Click</button>
    <output id="outputTag"></output>
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <input type="submit" />
    </form>
  </main>
);
