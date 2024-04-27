import type React from "react";
import {
	TouchableOpacity,
	Text,
	View,
	StyleSheet,
	type TextStyle,
	type ViewStyle,
} from "react-native";
import Icon from "@expo/vector-icons/AntDesign";
import {
	createStyles,
	type RadiusSizes,
	type RedPillSizes,
	Radius,
} from "@theme";
import Spinner from "../Spinner";

type ButtonVariant = "filled" | "outline" | "light" | "transparent";

const variantValidator = (variant: string): ButtonVariant => {
	if (
		variant === "filled" ||
		variant === "outline" ||
		variant === "light" ||
		variant === "transparent"
	) {
		return variant as ButtonVariant;
	}
	return "filled";
};

interface ButtonProps {
	children: React.ReactNode;
	onPress: () => void;
	loading?: boolean;
	leftIcon?: string;
	rightIcon?: string;
	disabled?: boolean;
	variant?: ButtonVariant;
	success?: boolean;
	isFullWidth?: boolean;
	style?: ViewStyle;
	textStyle?: TextStyle;
	radius?: RadiusSizes;
	size?: RedPillSizes;
}

const buttonVariantStyles = createStyles((theme) => ({
	filled: {
		backgroundColor: theme.semantic.bg.primary.normal,
		color: theme.white,
		borderWidth: 2,
		borderColor: theme.semantic.bg.primary.normal,
		borderRadius: theme.radius.full,
	},
	outline: {
		borderColor: theme.semantic.bg.primary.normal,
		color: theme.semantic.bg.primary.normal,
		borderWidth: 2,
	},
	light: {
		backgroundColor: theme.semantic.border.primary.normal,
		borderColor: theme.semantic.border.primary.normal,
		color: theme.semantic.bg.primary.normal,
		borderWidth: 2,
	},
	transparent: {
		backgroundColor: "transparent",
		color: theme.semantic.bg.primary.normal,
	},
}));

const iconStyles = createStyles((theme) => ({
	filled: {
		color: theme.semantic.icon.neutral,
	},
	outline: {
		color: theme.semantic.icon.primary.normal,
	},
	light: {
		color: theme.semantic.icon.primary.normal,
	},
	transparent: {
		color: theme.semantic.bg.primary.normal,
	},
}));

const buttonTextStyles = createStyles((theme) => ({
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

const Button: React.FC<ButtonProps> = ({
	children,
	onPress,
	loading = false,
	leftIcon,
	rightIcon,
	disabled = false,
	variant = "filled",
	success = false,
	isFullWidth = false,
	radius = "md",
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
		if (success) {
			return <Icon name="check" style={[styles.icon, styles.successIcon]} />;
		}
		return null;
	};

	const renderLoadingIndicator = () => {
		if (loading) {
			return <Spinner size="md" />;
		}
		return null;
	};

	return (
		<TouchableOpacity
			style={[
				styles.container,
				buttonVariantStyles[validatedVariant],
				disabled && styles.disabled,
				isFullWidth && styles.fullWidth,
				{
					borderRadius: Radius[radius],
					height: 50,
				},
				style,
			]}
			onPress={onPress}
			disabled={loading || disabled}
		>
			{renderLeftIcon()}
			<View style={styles.textContainer}>
				<Text
					style={[
						styles.text,
						textStyle,
						buttonTextStyles[size],
						{
							color: buttonVariantStyles[validatedVariant].color,
						},
					]}
				>
					{children}
				</Text>
				{loading && renderLoadingIndicator()}
			</View>
			{renderRightIcon()}
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 10,
		paddingHorizontal: 20,
		// minWidth: 100,
	},
	disabled: {
		opacity: 0.6,
	},
	fullWidth: {
		width: "100%",
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
	successIcon: {
		marginLeft: 10,
		color: "#fff",
	},
});

export default Button;
