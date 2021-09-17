/* Require reusable components */
require("@mymonero/mymonero-web-components");

/* Require various view elements */
require("./Components/Exchange/ChangenowBuyWithFiatView");
require("./Components/Exchange/ChangenowFixedRateView")
require("./Components/Exchange/ChangenowFloatingRateView");

/* Import exchange landing page class */
import ExchangeLandingPage from "./Components/Exchange/ExchangeLandingPage";
import ExchangeNavigationController from "./Components/Controllers/ExchangeNavigationController";

/* Export page templates */
export default { 
    ExchangeLandingPage,
    ExchangeNavigationController
}
