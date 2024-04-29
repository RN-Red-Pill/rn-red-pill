import analytics from "@react-native-firebase/analytics";

class AnalyticsFactory {
	logEvent(eventName, params) {
		analytics().logEvent(eventName, params);
	}

	setUserProperties(properties) {
		analytics().setUserProperties(properties);
	}

	setUserId(userId) {
		analytics().setUserId(userId);
	}
}

const Analytics = new AnalyticsFactory();

export default Analytics;
