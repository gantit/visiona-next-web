import { useEffect } from "react";
import ReactGA from "react-ga";
import { useHistory } from "react-router-dom";

const initializeGA = () => {
  ReactGA.initialize("UA-121463453-1");
};

const logPageView = (history) => {
  history.listen((location) => {
    const page = location.pathname || window.location.pathname;
    ReactGA.set({ page });
    ReactGA.pageview(page);
    console.log(`Page View logged for: ${page}`);
  });
};
// eslint-disable-next-line react/display-name, react/jsx-props-no-spreading
const withTracker = (WrappedComponent) => (props) => {
  const history = useHistory();

  useEffect(() => {
    logPageView(history);
  }, [history]);

  return <WrappedComponent {...props} />;
};

export { withTracker, logPageView, initializeGA };
