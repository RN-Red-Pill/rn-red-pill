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
	} else {
		return "filled";
	}
};

interface TagProps {
	leftIcon?: any;
	rightIcon?: any;
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
		backgroundColor: theme.colors.gray[6],
		color: theme.white,
		borderWidth: 2,
		borderColor: theme.colors.gray[6],
		borderRadius: theme.radius.full,
	},
	outline: {
		borderColor: theme.colors.gray[6],
		color: theme.colors.gray[6],
		borderWidth: 1,
	},
	light: {
		backgroundColor: theme.colors.gray[1],
		borderColor: theme.colors.gray[1],
		color: theme.colors.gray[6],
		borderWidth: 2,
	},
	transparent: {
		backgroundColor: "transparent",
		color: theme.colors.gray[6],
	},
}));

const iconStyles = createStyles((theme) => ({
	filled: {
		color: theme.white,
	},
	outline: {
		color: theme.colors.gray[6],
	},
	light: {
		backgroundColor: theme.colors.gray[1],
		color: theme.colors.gray[6],
	},
	transparent: {
		backgroundColor: theme.colors.gray[1],
		color: theme.colors.gray[6],
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
	onPress,
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
			style={[
				styles.container,
				TagVariantStyles[validatedVariant],
				{
					borderRadius: Radius[radius],
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
		fontSize: 20,
	},
	leftIcon: {
		marginRight: 10,
	},
	rightIcon: {
		marginLeft: 10,
	},
}));

export default Tag;
