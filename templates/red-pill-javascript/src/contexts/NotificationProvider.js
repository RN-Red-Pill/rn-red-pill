import { useState, useEffect, useRef, createContext } from "react";
import * as Notifications from "expo-notifications";
import NotificationHelper from "@libs/expo-notifications";

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: false,
		shouldSetBadge: false,
	}),
});

const NotificationContext = createContext(
	undefined,
);

export function NotificationProvider({
	children,
}) {
	const [expoPushToken, setExpoPushToken] = useState<string | null>("");
	const [notification, setNotification] = useState<
		boolean | Notifications.Notification
	>(false);

	const notificationListener = useRef();
	const responseListener = useRef();

	useEffect(() => {
		NotificationHelper.registerForPushNotificationsAsync().then((token) =>
			setExpoPushToken(token),
		);

		notificationListener.current =
			Notifications.addNotificationReceivedListener((notification) => {
				setNotification(notification);
			});

		responseListener.current =
			Notifications.addNotificationResponseReceivedListener((response) => {
				console.log(response);
			});

		return () => {
			Notifications.removeNotificationSubscription(
				notificationListener.current,
			);
			Notifications.removeNotificationSubscription(responseListener.current);
		};
	}, []);

	return (
		<NotificationContext.Provider
			value={{
				notification,
				expoPushToken,
			}}
		>
			{children}
		</NotificationContext.Provider>
	);
}
