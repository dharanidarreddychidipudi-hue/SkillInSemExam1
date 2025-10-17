import React from "react";
import Card from "./Card";

const App = () => {
  return (
    <div>
      <Card>
        <h2>Title 1</h2>
        <p>This is some text inside the first card.</p>
      </Card>

      <Card>
        <h2>Title 2</h2>
        <p>This is another card with different content.</p>
        <button>Click Me</button>
      </Card>
    </div>
  );
};

export default App;
