import { Platform } from "react-native";
import * as Device from "expo-device";
import * as ExpoNotifications from "expo-notifications";

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
class NotificationHelper {
	static async schedulePushNotification() {
		await ExpoNotifications.scheduleNotificationAsync({
			content: {
				title: "You've got mail! 📬",
				body: "Here is the notification body",
				data: { data: "goes here" },
			},
			trigger: { seconds: 2 },
		});
	}

	static async registerForPushNotificationsAsync(): Promise<string | null> {
		let token: string | null = null;

		if (Platform.OS === "android") {
			await ExpoNotifications.setNotificationChannelAsync("default", {
				name: "default",
				importance: ExpoNotifications.AndroidImportance.MAX,
				vibrationPattern: [0, 250, 250, 250],
				lightColor: "#FF231F7C",
			});
		}

		if (Device.isDevice) {
			const { status: existingStatus } =
				await ExpoNotifications.getPermissionsAsync();
			let finalStatus = existingStatus;
			if (existingStatus !== "granted") {
				const { status } = await ExpoNotifications.requestPermissionsAsync();
				finalStatus = status;
			}
			if (finalStatus !== "granted") {
				alert("Failed to get push token for push notification!");
				return null;
			}
			token = (
				await ExpoNotifications.getExpoPushTokenAsync({
					projectId: "your-project-id",
				})
			).data;
		} else {
			console.log("Must use physical device for Push Notifications");
		}

		return token;
	}
}

export default NotificationHelper;
