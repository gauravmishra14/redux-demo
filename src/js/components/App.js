import React from "react";
import List from "./List";
import Form from "./Form";
const App = () => (
  <div className="container">
    <div className="col-sm-4">
      <h2>Articles</h2>
      <List />
    </div>
    <div className="col-sm-4">
      <h2>Add a new article</h2>
      <Form />
    </div>
  </div>
);
export default App;