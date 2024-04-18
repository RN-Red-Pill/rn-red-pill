import analytics from '@react-native-firebase/analytics';

class Analytics {
  static logEvent(eventName: string, params?: { [key: string]: any }) {
    analytics().logEvent(eventName, params);
  }

  static setUserProperties(properties: { [key: string]: string }) {
    analytics().setUserProperties(properties);
  }

  static setUserId(userId: string | null) {
    analytics().setUserId(userId);
  }
}

export default new Analytics();
