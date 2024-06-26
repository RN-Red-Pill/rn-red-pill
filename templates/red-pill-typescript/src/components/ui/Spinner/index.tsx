import type React from "react";
import { useRef, useEffect } from "react";
import { View, Animated, Easing } from "react-native";
import {
	useTheme,
	type DefaultColorsTypes,
	type RedPillSizes,
	makeStyles,
} from "@theme";

interface SpinnerProps {
	size?: RedPillSizes;
	color?: keyof DefaultColorsTypes;
}

enum SpinnerSizes {
	xs = 16,
	sm = 20,
	md = 24,
	lg = 32,
	xl = 40,
}

enum BorderWidths {
	xs = 1,
	sm = 2,
	md = 3,
	lg = 4,
	xl = 6,
}

const Spinner: React.FC<SpinnerProps> = ({ size = "md" }) => {
	const { theme } = useTheme();
	const spinValue = useRef(new Animated.Value(0)).current;
	const styles = useStyles();

	useEffect(() => {
		Animated.loop(
			Animated.timing(spinValue, {
				toValue: 1,
				duration: 1000,
				easing: Easing.linear,
				useNativeDriver: true,
			}),
		).start();
	}, [spinValue]);

	const spin = spinValue.interpolate({
		inputRange: [0, 1],
		outputRange: ["0deg", "360deg"],
	});

	return (
		<View style={styles.container}>
			<View
				style={[
					styles.circle,
					{
						width: SpinnerSizes[size],
						height: SpinnerSizes[size],
						borderRadius: SpinnerSizes[size],
						borderWidth: BorderWidths[size],
						borderColor: theme.semantic.border.primary.normal,
					},
				]}
			/>
			<Animated.View
				style={[
					styles.spinner,
					{
						width: SpinnerSizes[size],
						height: SpinnerSizes[size],
						borderRadius: SpinnerSizes[size],
						borderWidth: BorderWidths[size],
						borderColor: theme.semantic.border.primary.active,
						transform: [{ rotate: spin }],
					},
				]}
			/>
		</View>
	);
};

const useStyles = makeStyles(() => ({
	container: {
		justifyContent: "center",
		alignItems: "center",
	},
	circle: {
		opacity: 0.5,
	},
	spinner: {
		position: "absolute",
		borderTopColor: "transparent",
		borderLeftColor: "transparent",
		borderRigthColor: "transparent",
	},
}));

export default Spinner;
