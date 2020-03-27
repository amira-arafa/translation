import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import "bootstrap/dist/css/bootstrap.min.css";

// onChangeLanguage(lang) {
//   switch (lang) {
//       case 'DE': i18nConfig.messages = messages_de; break;
//       case 'EN': i18nConfig.messages = messages_en; break;
//       default: i18nConfig.messages = messages_en; break;
//   }
//   this.setState({ locale: lang });
//   i18nConfig.locale = lang;
// }

// const messages = {
//   en: messages_en,
//   de: messages_de
// // };
// const language = navigator.language.split(/[-_]/)[0]; // language without region code
// console.log("lang", language, i18nConfig.locale);
// import locale_en from "react-intl/locale-data/en";

// addLocaleData([...locale_en]);

ReactDOM.render(
  <Provider store={store}>
    {/* <IntlProvider locale={i18nConfig.locale} messages={i18nConfig.messages}> */}
    <App />
    {/* </IntlProvider> */}
  </Provider>,
  document.querySelector("#root")
);
