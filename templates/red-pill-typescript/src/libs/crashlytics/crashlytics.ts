import firebase from "@react-native-firebase/crashlytics";

class Crashlytics {
	static recordError(error: Error) {
		firebase().recordError(error);
	}

	static log(key: string, value: any) {
		firebase().log(key, value);
	}

	static setUserIdentifier(userId: string) {
		firebase().setUserId(userId);
	}

	static setAttribute(key: string, value: string) {
		firebase().setAttribute(key, value);
	}
}

export default Crashlytics;
