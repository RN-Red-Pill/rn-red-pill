import type React from "react";
import { TouchableOpacity, StyleSheet, type ViewStyle } from "react-native";
import Icon from "@expo/vector-icons/AntDesign";
import { createStyles, type RadiusSizes, type RedPillSizes } from "@theme";

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
	onPress: () => void;
	loading?: boolean;
	disabled?: boolean;
	variant?: ButtonVariant;
	style?: ViewStyle;
	radius?: RadiusSizes;
	size?: RedPillSizes;
	name: string;
}

const buttonVariantStyles = createStyles((theme) => ({
	filled: {
		backgroundColor: theme.semantic.bg.primary.normal,
		borderWidth: 2,
		borderColor: theme.semantic.bg.primary.normal,
		borderRadius: theme.radius.full,
	},
	outline: {
		borderColor: theme.semantic.bg.primary.normal,
		borderWidth: 2,
	},
	light: {
		backgroundColor: theme.semantic.border.primary.normal,
		borderColor: theme.semantic.border.primary.normal,
		borderWidth: 2,
	},
	transparent: {
		backgroundColor: "transparent",
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
		color: theme.semantic.icon.primary.normal,
	},
}));

enum Radius {
	xs = 2,
	sm = 4,
	md = 8,
	lg = 16,
	xl = 32,
	full = 99,
}

enum IconSizes {
	xs = 16,
	sm = 20,
	md = 24,
	lg = 32,
	xl = 40,
}

const IconButton: React.FC<ButtonProps> = ({
	name,
	onPress,
	loading = false,
	disabled = false,
	variant = "filled",
	radius = "md",
	size = "md",
	style,
}) => {
	const validatedVariant = variantValidator(variant);
	const normalizedSize = IconSizes[size];

	return (
		<TouchableOpacity
			style={[
				styles.container,
				buttonVariantStyles[validatedVariant],
				disabled && styles.disabled,
				{
					borderRadius: Radius[radius],
					height: normalizedSize * 2,
					width: normalizedSize * 2,
				},
				style,
			]}
			onPress={onPress}
			disabled={loading || disabled}
		>
			<Icon
				name={name}
				style={[
					{
						fontSize: normalizedSize,
					},
					iconStyles[validatedVariant],
				]}
			/>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
	},
	disabled: {
		opacity: 0.6,
	},
	fullWidth: {
		width: "100%",
	},
});

export default IconButton;
