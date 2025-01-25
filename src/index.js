import { createRoot } from "react-dom/client";
import React from "react";
import handleClick from "./controllers/handleClick";
import handleSubmit from "./controllers/handleSubmit";
import { MyGreeting } from "./utils/Views/MyGreeting";

const message = "The command line is so easy now!";
const root = createRoot(window.bodyTag);
root.render(
  <main>
    <h1>React is AWESOME"</h1>
    <p>{message}</p>
    <h1>React Programming</h1>
    <MyGreeting />

    <form onSubmit={handleSubmit}>
      <input type="text" />
      <input type="submit" />
    </form>
    <div class="container">
      <div class="row">
        <div class="col radius bg bg-black p-3 border border-white">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/rB9SaTnh41M?si=GeGmi3yV7IKCnElY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div class="col radius bg bg-black p-3 border border-white">
          <div
            style={{
              padding: "0 0 0 0",
              position: "relative",
            }}
          >
            <iframe
              src="https://player.vimeo.com/video/51467582?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              style={{
                position: "relative",
                top: 0,
                left: 0,
                width: "560px",
                height: "315px",
              }}
            >
              title="Creamfields Chile 2012"
            </iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      </div>
    </div>
  </main>
);
