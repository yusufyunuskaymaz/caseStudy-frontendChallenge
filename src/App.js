import "./App.css";
import "./components/header.css";
import AppRouter from "./router/AppRouter";
import store from "./app/store";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
