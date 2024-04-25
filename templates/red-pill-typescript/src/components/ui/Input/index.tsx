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

enum TextInputVariationEnum {
	outlined = "outlined",
	filled = "filled",
}

type TextInputVariation = "filled" | "outlined";

interface TextInputProps {
	value?: string;
	label?: string;
	sublabel?: string;
	leftIcon?: any;
	rightIcon?: any;
	leftIconComponent?: React.ReactNode;
	rightIconComponent?: React.ReactNode;
	variant: TextInputVariation;
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
	style,
	inputStyle,
	placeholder,
	onChangeText,
	value,
}) => {
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
		/>
	);

	return (
		<View style={[styles.container]}>
			{label && renderLabel()}
			<View
				style={[
					styles.innerContainer,
					variant === TextInputVariationEnum.outlined && styles.outlined,
					variant === TextInputVariationEnum.filled && styles.filled,
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
		gap: 5,
	},
	input: {
		flex: 1,
		height: "100%",
	},
	outlined: {
		borderColor: theme.colors.gray[3],
	},
	filled: {
		borderColor: theme.colors.gray[3],
		backgroundColor: theme.colors.gray[3],
	},
	innerContainer: {
		borderWidth: 1,
		flex: 1,
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
		color: "#666",
	},
}));

export default TextInput;
