import "./App.css";
import { Provider } from "react-redux";
import store from "./server/http/store";
import Router from "./routes/routes";
import ThemeProvider from "./theme";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
