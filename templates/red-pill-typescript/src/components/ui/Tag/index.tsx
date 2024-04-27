import type React from "react";
import {
	Text,
	View,
	type TextStyle,
	type ViewStyle,
	Pressable,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import {
	createStyles,
	type RadiusSizes,
	type RedPillSizes,
	Radius,
} from "@theme";

type TagVariant = "filled" | "outline" | "light" | "transparent";

const variantValidator = (variant: string): TagVariant => {
	if (
		variant === "filled" ||
		variant === "outline" ||
		variant === "light" ||
		variant === "transparent"
	) {
		return variant as TagVariant;
	}
	return "filled";
};

interface TagProps {
	leftIcon?: string;
	rightIcon?: string;
	variant?: TagVariant;
	style?: ViewStyle;
	textStyle?: TextStyle;
	radius?: RadiusSizes;
	size?: RedPillSizes;
	label: string;
	onPress: () => void;
}

const TagVariantStyles = createStyles((theme) => ({
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

const tagTextStyles = createStyles((theme) => ({
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

const Tag: React.FC<TagProps> = ({
	leftIcon,
	rightIcon,
	variant = "filled",
	radius = "md",
	size = "md",
	style,
	textStyle,
	label,
	onPress = () => {},
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
		<Pressable
			style={({ pressed }) => [
				styles.container,
				TagVariantStyles[validatedVariant],
				{
					borderRadius: Radius[radius],
					opacity: pressed ? 0.3 : 1,
					//   maxWidth: isFullWidth ? "100%" : 120,
				},
				style,
			]}
			onPress={onPress}
		>
			{renderLeftIcon()}
			<View style={styles.textContainer}>
				<Text
					style={[
						styles.text,
						textStyle,
						tagTextStyles[size],
						{
							color: TagVariantStyles[validatedVariant].color,
						},
					]}
				>
					{label}
				</Text>
			</View>
			{renderRightIcon()}
		</Pressable>
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
		fontSize: theme.fontSizes.xl,
	},
	leftIcon: {
		marginRight: 10,
	},
	rightIcon: {
		marginLeft: 10,
	},
}));

export default Tag;
