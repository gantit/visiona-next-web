import 'semantic-ui-css/semantic.min.css'
import 'utils/i18n';
import i18next from 'i18next';
import { ToastProvider } from "context"
import ResponsiveContainer from 'components/responsiveContainer'

const App = function ({ Component, pageProps }) {
  i18next.changeLanguage(pageProps.language);
  return (
    <ToastProvider>
      <ResponsiveContainer>
        <Component {...pageProps} />
      </ResponsiveContainer>
    </ToastProvider>
  );
};

export default App;
