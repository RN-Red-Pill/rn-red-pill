import firebase from "@react-native-firebase/crashlytics";

class CrashlyticsFactory {
  recordError(error: Error) {
    firebase().recordError(error);
  }

  log(message: string) {
    firebase().log(message);
  }

  setUserIdentifier(userId: string) {
    firebase().setUserId(userId);
  }

  setAttribute(key: string, value: string) {
    firebase().setAttribute(key, value);
  }
}

const Crashlytics = new CrashlyticsFactory();

export default Crashlytics;
