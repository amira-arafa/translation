import React from "react";
import Routing from "./Routing";
import "./App.scss";
import { IntlProvider } from "react-intl";
import translation from './translation';
import {connect} from 'react-redux';
import {setCurrentLang} from '../Redux/Actions/index';



export class App extends React.Component {
  setLanguage = lang => {
    
    this.props.setCurrentLang(lang);
  };
  
  render() {
    // {console.log("bebo",translation[lang].title,lang)}
    // const { translation } = this.props.intl;
    const {lang}=this.props;
    console.log("object",lang,translation.ar.title)
    return (
      <IntlProvider locale={lang} messages={translation[lang]}>
        <div  className={lang === 'ar' ? 'rtl' : 'ltr'} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
       <p>{translation[lang].title}</p>
       <button  className="btn " id="en" onClick={() => this.setLanguage('en')}>English</button>
                <button  className="btn " id="ar" onClick={() => this.setLanguage('ar')}>العربية</button>

          <Routing />
          </div>
     
      </IntlProvider>
    );
  }
  
}
const mapStateToProps = state => {
  console.log("state",state);

  return {
    lang: state.language.lang
  }
}
// const AppComponent=injectIntl(App)
export default connect(mapStateToProps,{setCurrentLang})(App);
