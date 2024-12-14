import * as React from 'react';
import { useContext, useState } from 'react';
import { IntlProvider } from 'react-intl';
import English from '../../lang/en.json';
//import Spanish from '../../lang/es.json';

type ContextProps = {
  locale?: string;
  languageName?: string;
  selectLanguage?: (e:any)=>void;
};

const Context = React.createContext<ContextProps>({});
export const useWraperContext = () => useContext(Context);

// let local = navigator.language;
// const localStorageLang = localStorage.getItem('lang');
// if(localStorageLang){
//   local = localStorageLang;  
// }
// let lang = Spanish;
// let languageN = 'Spanish';
// if (local === "en") {
//   lang = English;
//   languageN = "English";
// } else {
//   lang = Spanish;
//   languageN = "Spanish";
// }

let local = "en";
let lang = 'English';

const Wrapper = ({ children, config }: any) => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);
  //const [languageName, setLanguageName] = useState(languageN);
  
  // function selectLanguage(langParameter: string) {
  //   const newLocale = langParameter;
  //   setLocale(newLocale);
  //   if (newLocale === "en") {
  //     setMessages(English);
  //     setLanguageName("English");
  //   } else {
  //     setMessages(Spanish);
  //     setLanguageName("Spanish");
  //   }
  // }
  return (
    <Context.Provider value={{ locale }}>
      <IntlProvider messages={{ ...English }} locale="en">
        {children}
      </IntlProvider>
    </Context.Provider>
  );
};
export default Wrapper;