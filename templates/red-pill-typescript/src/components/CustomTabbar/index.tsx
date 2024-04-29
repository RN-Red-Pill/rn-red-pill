import type React from "react";
import { useMemo } from "react";
import { Pressable, View } from "react-native";
import { useTranslation } from "react-i18next";
import Icon from "@expo/vector-icons/Octicons";

import { createStyles, type RedPillThemeType, useTheme } from "@theme";
import { APP_NAVIGATION } from "@navigations/constants/navigationOptions";
import { moderateScale } from "@utils/ScaleHelper";
import { Text } from "@ui";

import type { NavigationState } from "@react-navigation/native";
import type { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

interface TabBarItem {
	name: string;
	iconName: string;
	label: string;
}

interface CustomTabBarProps {
	state: NavigationState;
	navigation: {
		navigate: (name: string) => void;
	};
	descriptors: {
		[key: string]: {
			options: BottomTabNavigationOptions;
		};
	};
}

const TabbarItems: TabBarItem[] = [
	{
		name: APP_NAVIGATION.SETTINGS_SCREEN.name,
		iconName: "gear",
		label: "Settings",
	},
];

const CustomTabBar: React.FC<CustomTabBarProps> = ({
	state,
	navigation,
	descriptors,
}) => {
	const { theme } = useTheme();
	const { t } = useTranslation();

	const currentRouteName = state.routeNames[state.index];
	const currentDescriptor = descriptors[state.routes[state.index].key];
	const focusedOptions = currentDescriptor.options;

	if (focusedOptions.tabBarVisible === false) {
		return null;
	}

	const onNavigate = ({ name }: { name: string }) => {
		navigation.navigate(name);
	};

	const TabbarList = useMemo(() => TabbarItems, []);

	return (
		<View style={{ backgroundColor: theme.semantic.bg.muted }}>
			<View style={TabbarStyles.container}>
				{TabbarList.map(({ name, ...props }) => (
					<CustomTabBarItem
						key={name}
						name={name}
						currentRouteName={currentRouteName}
						onNavigate={onNavigate}
						t={t}
						theme={theme}
						{...props}
					/>
				))}
			</View>
		</View>
	);
};

interface CustomTabBarItemProps {
	name: string;
	iconName: string;
	label: string;
	currentRouteName: string;
	onNavigate: ({ name }: { name: string }) => void;
	t: (label: string) => string;
	theme: RedPillThemeType;
}

const CustomTabBarItem: React.FC<CustomTabBarItemProps> = ({
	name,
	iconName,
	label,
	currentRouteName,
	onNavigate,
	t,
	theme,
}) => {
	return (
		<Pressable
			style={TabbarStyles.tabbarItemContainer}
			onPress={() => onNavigate({ name })}
		>
			<Icon
				name={iconName}
				size={moderateScale(24)}
				color={
					currentRouteName === name
						? theme.semantic.bg.primary.normal
						: theme.semantic.text.body
				}
			/>
			{label && (
				<Text
					style={{
						...TabbarStyles.tabbarItemLabelText,
						color:
							currentRouteName === name
								? theme.semantic.bg.primary.normal
								: theme.semantic.text.body,
					}}
				>
					{t(label)}
				</Text>
			)}
		</Pressable>
	);
};

const TabbarStyles = createStyles((theme) => ({
	container: {
		backgroundColor: theme.semantic.bg.body,
		borderTopColor: theme.semantic.bg.page,
		borderTopWidth: 1,
		flexDirection: "row",
		height: 90,
		justifyContent: "space-around",
		width: "100%",
	},
	tabbarItemContainer: {
		alignItems: "center",
		justifyContent: "center",
	},
	tabbarItemLabelText: {
		color: theme.semantic.bg.primary.normal,
		fontSize: theme.fontSizes.md,
		fontWeight: "700",
	},
}));

export default CustomTabBar;
