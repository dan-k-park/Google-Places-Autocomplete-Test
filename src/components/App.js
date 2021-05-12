import React from "react";
import SearchBar from "./search/SearchBar";

class App extends React.Component {
  onSearchSubmit = (formValues) => {
    console.log(formValues);
  };

  render() {
    return (
      <div>
        <h1>Search for city!</h1>
        <SearchBar handleSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
