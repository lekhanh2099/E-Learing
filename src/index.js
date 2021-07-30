import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyles } from "./global-style";
import { Provider } from "react-redux";
import { store } from "./Redux/configStore";
import "bootstrap/dist/css/bootstrap.min.css";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

// pick a date util library
import DateFnsUtils from "@date-io/date-fns";

ReactDOM.render(
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </MuiPickersUtilsProvider>,
  document.getElementById("root")
);
