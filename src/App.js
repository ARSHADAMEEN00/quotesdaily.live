import "./App.css";
import { Provider } from "react-redux";
import store from "./server/http/store";
import Router from "./routes/routes";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
