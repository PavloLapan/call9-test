import React from 'react';
import TopStories from "./components/topStories";
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
  return (
      <Provider store={store}>
          <TopStories />
      </Provider>
  );
}

export default App;
