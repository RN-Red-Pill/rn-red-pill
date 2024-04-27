import type React from "react";
import { Text, View, type TextStyle, type ViewStyle } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import {
	createStyles,
	type RadiusSizes,
	type RedPillSizes,
	Radius,
} from "@theme";

type BadgeVariant = "filled" | "outline" | "light" | "transparent";

const variantValidator = (variant: string): BadgeVariant => {
	if (
		variant === "filled" ||
		variant === "outline" ||
		variant === "light" ||
		variant === "transparent"
	) {
		return variant as BadgeVariant;
	}
	return "filled";
};

interface BadgeProps {
	children: React.ReactNode;
	leftIcon?: string;
	rightIcon?: string;
	variant?: BadgeVariant;
	style?: ViewStyle;
	textStyle?: TextStyle;
	radius?: RadiusSizes;
	size?: RedPillSizes;
}

const BadgeVariantStyles = createStyles((theme) => ({
	filled: {
		backgroundColor: theme.semantic.bg.surface.normal,
		color: theme.semantic.text.body,
		borderWidth: 2,
		borderColor: theme.semantic.bg.surface.normal,
		borderRadius: theme.radius.full,
	},
	outline: {
		borderColor: theme.semantic.border.container,
		color: theme.semantic.text.body,
		borderWidth: 2,
	},
	light: {
		backgroundColor: theme.semantic.border.primary.normal,
		borderColor: theme.semantic.border.primary.normal,
		color: theme.semantic.bg.primary.normal,
		borderWidth: 2,
	},
	transparent: {
		borderWidth: 2,
		borderColor: "transparent",
		backgroundColor: "transparent",
		color: theme.semantic.text.body,
	},
}));

const iconStyles = createStyles((theme) => ({
	filled: {
		color: theme.semantic.text.body,
	},
	outline: {
		color: theme.semantic.text.body,
	},
	light: {
		color: theme.semantic.bg.primary.normal,
	},
	transparent: {
		color: theme.semantic.text.body,
	},
}));

const badgeTextStyles = createStyles((theme) => ({
	xs: {
		fontSize: theme.fontSizes.xs,
	},
	sm: {
		fontSize: theme.fontSizes.sm,
	},
	md: {
		fontSize: theme.fontSizes.md,
	},
	lg: {
		fontSize: theme.fontSizes.lg,
	},
	xl: {
		fontSize: theme.fontSizes.xl,
	},
}));

const Badge: React.FC<BadgeProps> = ({
	children,
	leftIcon,
	rightIcon,
	variant = "filled",
	radius = "full",
	size = "md",
	style,
	textStyle,
}) => {
	const validatedVariant = variantValidator(variant);

	const renderLeftIcon = () => {
		if (leftIcon) {
			return (
				<Icon
					name={leftIcon}
					style={[styles.icon, iconStyles[validatedVariant], styles.leftIcon]}
				/>
			);
		}
		return null;
	};

	const renderRightIcon = () => {
		if (rightIcon) {
			return (
				<Icon
					name={rightIcon}
					style={[styles.icon, iconStyles[validatedVariant], styles.rightIcon]}
				/>
			);
		}
		return null;
	};

	return (
		<View
			style={[
				styles.container,
				BadgeVariantStyles[validatedVariant],
				{
					borderRadius: Radius[radius],
					//   maxWidth: isFullWidth ? "100%" : 120,
				},
				style,
			]}
		>
			{renderLeftIcon()}
			<View style={styles.textContainer}>
				<Text
					style={[
						styles.text,
						textStyle,
						badgeTextStyles[size],
						{
							color: BadgeVariantStyles[validatedVariant].color,
						},
					]}
				>
					{children}
				</Text>
			</View>
			{renderRightIcon()}
		</View>
	);
};

const styles = createStyles((theme) => ({
	container: {
		alignSelf: "flex-start",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: theme.spacing.xs,
		paddingHorizontal: theme.spacing.md,
	},
	textContainer: {
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		gap: 10,
	},
	text: {
		fontSize: 16,
		textAlign: "center",
	},
	icon: {
		fontSize: 20,
	},
	leftIcon: {
		marginRight: 10,
	},
	rightIcon: {
		marginLeft: 10,
	},
}));

export default Badge;
