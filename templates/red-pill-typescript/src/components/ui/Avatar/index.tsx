import type React from "react";
import {
	View,
	Image,
	type ImageSourcePropType,
	type ViewStyle,
} from "react-native";
import { createStyles, type RadiusSizes, Radius } from "@theme";
import Title from "../Title";

const AvatarSize = {
	xs: 30,
	sm: 40,
	md: 50,
	lg: 60,
	xl: 80,
};

interface AvatarProps {
	imageSrc?: ImageSourcePropType | any;
	initials?: string;
	size?: keyof typeof AvatarSize | number;
	style?: ViewStyle;
	radius?: RadiusSizes;
}

const Avatar: React.FC<AvatarProps> = ({
	imageSrc,
	initials,
	size = "md",
	radius = "md",
	style,
}) => {
	const sizeController = () => {
		if (typeof size === "string") {
			return AvatarSize[size];
		}

		if (typeof size === "number") {
			return size;
		}

		return AvatarSize.md;
	};

	const avatarSize = sizeController();

	return (
		<View
			style={[
				styles.avatarContainer,
				{ width: avatarSize, height: avatarSize, borderRadius: Radius[radius] },
				style,
			]}
		>
			{imageSrc ? (
				<Image
					source={{ uri: imageSrc }}
					style={[
						styles.avatarImage,
						{
							width: avatarSize,
							height: avatarSize,
							borderRadius: Radius[radius],
						},
					]}
				/>
			) : (
				<Title style={styles.initials}>{initials}</Title>
			)}
		</View>
	);
};

const styles = createStyles((theme) => ({
	avatarContainer: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: theme.colors.gray[4],
	},
	avatarImage: {
		resizeMode: "cover",
	},
	initials: {
		fontSize: theme.fontSizes.md,
		fontWeight: "bold",
		color: theme.white,
		textTransform: "uppercase",
	},
}));

export default Avatar;
