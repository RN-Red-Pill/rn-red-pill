import analytics from "@react-native-firebase/analytics";

class AnalyticsFactory {
  logEvent(eventName: string, params?: { [key: string]: any }) {
    analytics().logEvent(eventName, params);
  }

  setUserProperties(properties: { [key: string]: string }) {
    analytics().setUserProperties(properties);
  }

  setUserId(userId: string | null) {
    analytics().setUserId(userId);
  }
}

const Analytics = new AnalyticsFactory();

export default Analytics;
