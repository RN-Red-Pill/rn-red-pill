import type React from "react";
import {
	View,
	TextInput as RNTextInput,
	type TextStyle,
	type ViewStyle,
} from "react-native";
import Icon from "@expo/vector-icons/AntDesign";
import Label from "../Label";
import Title from "../Title/index";
import { createStyles } from "@theme";
import { useState } from "react";

enum TextInputVariationEnum {
	outlined = "outlined",
	filled = "filled",
}

type TextInputVariation = "filled" | "outlined";

interface TextInputProps {
	value?: string;
	label?: string;
	sublabel?: string;
	leftIcon?: string;
	rightIcon?: string;
	leftIconComponent?: React.ReactNode;
	rightIconComponent?: React.ReactNode;
	variant?: TextInputVariation;
	style?: ViewStyle;
	inputStyle?: TextStyle;
	placeholder?: string;
	onChangeText?: ((text: string) => void) | undefined;
}

const TextInput: React.FC<TextInputProps> = ({
	label,
	sublabel,
	leftIcon,
	rightIcon,
	leftIconComponent,
	rightIconComponent,
	variant = TextInputVariationEnum.outlined,
	inputStyle,
	placeholder,
	onChangeText,
	value,
}) => {
	const [isFocused, setIsFocused] = useState<boolean>(false);

	const renderLeftIcon = () => {
		if (leftIconComponent) {
			return leftIconComponent;
		}
		if (leftIcon) {
			return <Icon name={leftIcon} style={styles.icon} />;
		}
		return null;
	};

	const renderRightIcon = () => {
		if (rightIconComponent) {
			return rightIconComponent;
		}
		if (rightIcon) {
			return <Icon name={rightIcon} style={styles.icon} />;
		}
		return null;
	};

	const renderLabel = () => {
		if (label) {
			return <Title>{label}</Title>;
		}
		return null;
	};

	const renderSublabel = () => {
		if (sublabel) {
			return <Label size="xs">{sublabel}</Label>;
		}
		return null;
	};

	const renderInput = () => (
		<RNTextInput
			onChangeText={onChangeText}
			style={[styles.input, inputStyle]}
			placeholder={placeholder}
			value={value}
			onFocus={() => setIsFocused(true)}
			onBlur={() => setIsFocused(false)}
		/>
	);

	return (
		<View style={styles.container}>
			{label && renderLabel()}
			<View
				style={[
					styles.innerContainer,
					variant === TextInputVariationEnum.outlined && styles.outlined,
					variant === TextInputVariationEnum.filled && styles.filled,
					isFocused && styles.focused,
				]}
			>
				{leftIcon && renderLeftIcon()}
				<View style={styles.textContainer}>{renderInput()}</View>
				{rightIcon && renderRightIcon()}
			</View>
			{sublabel && renderSublabel()}
		</View>
	);
};

const styles = createStyles((theme) => ({
	container: {
		gap: theme.spacing.xs,
	},
	input: {
		flex: 1,
		height: "100%",
		color: theme.semantic.text.input.normal,
	},
	outlined: {
		borderColor: theme.semantic.bg.surface.normal,
	},
	filled: {
		borderColor: theme.semantic.bg.surface.raised,
		backgroundColor: theme.semantic.bg.surface.normal,
		color: theme.semantic.text.body,
	},
	focused: {
		borderColor: theme.semantic.border.primary.active,
	},
	innerContainer: {
		borderWidth: 1,
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 10,
		borderRadius: 8,
		minHeight: 45,
	},
	textContainer: {
		flex: 1,
		paddingLeft: 10,
	},
	icon: {
		fontSize: 20,
		color: theme.semantic.icon.default,
	},
}));

export default TextInput;
