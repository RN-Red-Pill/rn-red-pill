import firebase from "@react-native-firebase/crashlytics";

class CrashlyticsFactory {
	recordError(error) {
		firebase().recordError(error);
	}

	log(message) {
		firebase().log(message);
	}

	setUserIdentifier(userId) {
		firebase().setUserId(userId);
	}

	setAttribute(key, value) {
		firebase().setAttribute(key, value);
	}
}

const Crashlytics = new CrashlyticsFactory();

export default Crashlytics;
