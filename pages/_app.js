import { useEffect } from "react";
import { useRouter } from "next/router";
import i18next from 'i18next';
import LogRocket from 'logrocket';

import { ToastProvider } from "context"
import ResponsiveContainer from 'components/responsiveContainer'
import 'utils/i18n';

import { pageview } from "utils/analyticsTracker";
import 'semantic-ui-css/semantic.min.css'
import 'styles/globals.css'

LogRocket.init('jsaom2/visionacat');

const App = function ({ Component, pageProps }) {
  i18next.changeLanguage(pageProps.language);
  const router = useRouter();

  const handleRouteChange = (url) => {
    if (process.env.NODE_ENV === 'production') {
      pageview(url);
    } else {
      console.log(`[GTAG- pageview] - ${url}`)
    }
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ToastProvider>
      <ResponsiveContainer>
        <Component {...pageProps} />
      </ResponsiveContainer>
    </ToastProvider>
  );
};

export default App;
