import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>();

export default function App() {
  const [videos, setVideos] = useState<Array<Schema["Video"]["type"]>>([]);

  function listVideos() {
    client.models.Video.observeQuery().subscribe({
      next: (data) => setVideos([...data.items]),
    });
  }

  useEffect(() => {
    listVideos();
  }, []);

  function createTodo() {
    // client.models.Video.create({
    //   content: window.prompt("Todo content"),
    // });
  }

  return (
    <main>
      <h1>My videos</h1>
      {/* <button onClick={createTodo}>+ new</button> */}
      <ul>
        {videos.map((video) => (
          <li key={video.id}>{video.title}</li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/gen2/start/quickstart/nextjs-pages-router/">
          Review next steps of this tutorial.
        </a>
      </div>
    </main>
  );
}
