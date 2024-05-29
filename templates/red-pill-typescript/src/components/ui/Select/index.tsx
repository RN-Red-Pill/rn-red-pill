import type React from "react";
import { useState } from "react";
import {
	View,
	TouchableOpacity,
	Pressable,
	type ViewStyle,
} from "react-native";
import Icon from "@expo/vector-icons/Entypo";
import { makeStyles } from "@theme";
import Label from "../Label";
import Text from "../Text";

interface SelectItem {
	label: string;
	value: any;
}

enum SelectVariationEnum {
	outlined = "outlined",
	filled = "filled",
}

type SelectVariation = "filled" | "outlined";

interface SelectProps {
	items: SelectItem[];
	onSelect: (value: any) => void;
	placeholder?: string;
	label?: string;
	sublabel?: string;
	value?: string;
	leftIcon?: string;
	rightIcon?: string;
	leftIconComponent?: React.ReactNode;
	rightIconComponent?: React.ReactNode;
	variant?: SelectVariation;
	style?: ViewStyle;
	secureTextEntry?: boolean;
	onChangeText?: ((text: string) => void) | undefined;
	initialValue?: string | number | object;
}

const Select: React.FC<SelectProps> = ({
	items,
	onSelect = () => {},
	placeholder = "Select",
	label,
	sublabel,
	leftIcon,
	rightIcon,
	leftIconComponent,
	rightIconComponent,
	variant = SelectVariationEnum.filled,
	initialValue,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState<SelectItem>(initialValue);
	const [isFocused, setIsFocused] = useState<boolean>(false);

	const styles = useStyles();

	const toggleSelect = () => {
		setIsOpen(!isOpen);
		setIsFocused(!isFocused);
	};

	const handleSelectItem = (item: SelectItem) => {
		setSelectedItem(item);
		onSelect(item.value);
		setIsOpen(false);
		setIsFocused(false);
	};

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
		return <Icon name="chevron-down" size={24} style={styles.icon} />;
	};

	const renderLabel = () => {
		if (label) {
			return (
				<Text size="lg" style={styles.generalText}>
					{label}
				</Text>
			);
		}
		return null;
	};

	const renderSublabel = () => {
		if (sublabel) {
			return (
				<Label style={styles.generalText} size="xs">
					{sublabel}
				</Label>
			);
		}
		return null;
	};

	return (
		<View style={styles.container}>
			{label && renderLabel()}
			<View style={[styles.innerContainer]}>
				<Pressable
					onPress={toggleSelect}
					style={[
						styles.selectedItem,
						variant === SelectVariationEnum.outlined && styles.outlined,
						variant === SelectVariationEnum.filled && styles.filled,
						isFocused && styles.focused,
					]}
				>
					<View style={{ gap: 10, flexDirection: "row" }}>
						{leftIcon && renderLeftIcon()}
						<Text style={styles.generalText}>
							{selectedItem ? selectedItem.label : placeholder}
						</Text>
					</View>
					{renderRightIcon()}
				</Pressable>
				{isOpen && (
					<View
						style={[
							styles.dropdown,
							variant === SelectVariationEnum.outlined && styles.outlined,
							variant === SelectVariationEnum.filled && styles.filled,
						]}
					>
						{items.map((item, index) => {
							const isLastItem = items.length - 1 === index;
							return (
								<TouchableOpacity
									key={item.value}
									onPress={() => handleSelectItem(item)}
									style={[
										styles.selectItem,
										!isLastItem && styles.selectItemBorder,
									]}
								>
									<Text style={styles.generalText}>{item.label}</Text>
								</TouchableOpacity>
							);
						})}
					</View>
				)}
			</View>
			{sublabel && renderSublabel()}
		</View>
	);
};

const useStyles = makeStyles((theme) => ({
	container: {
		gap: theme.spacing.xs,
		position: "relative",
		zIndex: 9,
		color: theme.semantic.text.body,
	},
	generalText: {
		color: theme.semantic.text.body,
	},
	innerContainer: {
		position: "relative",
		zIndex: 5,
	},
	selectedItem: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: theme.semantic.bg.surface.normal,
		padding: theme.spacing.sm,
		borderRadius: theme.radius.md,
		borderWidth: 1,
	},
	dropdown: {
		position: "absolute",
		top: "100%",
		left: 0,
		right: 0,
		// backgroundColor: theme.semantic.bg.surface.normal,
		transform: "translateY(10px)",
		zIndex: 5,
		borderRadius: theme.radius.md,
		paddingHorizontal: theme.spacing.md,
		borderWidth: 1,
	},
	selectItem: {
		padding: theme.spacing.md,
	},
	selectItemBorder: {
		padding: theme.spacing.md,
		borderBottomWidth: 2,
		borderBottomColor: theme.semantic.border.inactive,
	},
	outlined: {
		borderColor: theme.semantic.border.inactive,
		backgroundColor: theme.semantic.default,
		// backgroundColor: theme.white,// theme.semantic.default,
	},
	filled: {
		borderColor: theme.semantic.border.inactive,
		backgroundColor: theme.semantic.bg.surface.normal,
	},
	focused: {
		borderColor: theme.semantic.border.primary.active,
	},
	icon: {
		fontSize: 20,
		color: theme.semantic.icon.default,
	},
}));

export default Select;
