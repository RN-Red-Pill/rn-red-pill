import { DefaultColors } from "../default-colors";
import type { SemanticColors } from "src/theme/types";

export const DarkTheme = (
	colorStr: keyof typeof DefaultColors = "indigo",
): SemanticColors => ({
	primary: "#000",
	bg: {
		page: DefaultColors.neutral[8],
		body: DefaultColors.neutral[9],

		primary: {
			normal: DefaultColors[colorStr][7],
			hover: DefaultColors[colorStr][6],
			subtle: DefaultColors[colorStr][4],
			subtleHover: DefaultColors[colorStr][5],
			focus: DefaultColors[colorStr][7],
			active: DefaultColors[colorStr][6],
			disabled: DefaultColors[colorStr][1],
			muted: DefaultColors[colorStr][4],
		},

		success: {
			normal: DefaultColors.green[4],
			hover: DefaultColors.green[3],
			muted: DefaultColors.green[4],
		},
		warning: {
			normal: DefaultColors.yellow[4],
			hover: DefaultColors.yellow[3],
			muted: DefaultColors.yellow[4],
		},
		error: {
			normal: DefaultColors.red[4],
			hover: DefaultColors.red[3],
			muted: DefaultColors.red[4],
		},
		info: {
			normal: DefaultColors.blue[4],
			hover: DefaultColors.blue[3],
			muted: DefaultColors.blue[4],
		},
		surface: {
			normal: DefaultColors.neutral[9],
			invert: DefaultColors.neutral[1],
			raised: DefaultColors.neutral[8],
		},
		strong: DefaultColors.neutral[5],
		subtle: DefaultColors.neutral[3],
		muted: DefaultColors.neutral[4],
		input: {
			normal: "#fff",
			hover: DefaultColors.neutral[2],
			focus: "#fff",
			disabled: DefaultColors.neutral[2],
		},
	},

	border: {
		primary: {
			normal: DefaultColors[colorStr][2],
			hover: DefaultColors[colorStr][3],
			subtle: DefaultColors[colorStr][4],
			subtleHover: DefaultColors[colorStr][5],
			focus: DefaultColors[colorStr][4],
			active: DefaultColors[colorStr][5],
			disabled: DefaultColors[colorStr][2],
		},
		container: DefaultColors.neutral[5],
		strong: DefaultColors.neutral[5],
		subtle: DefaultColors.neutral[8],
		inactive: DefaultColors.neutral[7],
		success: DefaultColors.green[6],
		warning: DefaultColors.yellow[6],
		error: DefaultColors.red[6],
		info: DefaultColors.blue[6],
		input: {
			normal: DefaultColors.neutral[2],
			hover: DefaultColors.neutral[3],
			focus: DefaultColors[colorStr][5],
			disabled: DefaultColors.neutral[4],
		},
	},

	icon: {
		default: "#ffffff",
		muted: DefaultColors.neutral[5],
		inactive: DefaultColors.neutral[4],
		neutral: "#ffffff",
		success: DefaultColors.green[6],
		warning: DefaultColors.yellow[6],
		error: DefaultColors.red[6],
		info: DefaultColors.blue[2],
		secondary: DefaultColors[colorStr][2],
		tertiary: DefaultColors.blue[3],
		primary: {
			normal: DefaultColors[colorStr][5],
			hover: DefaultColors[colorStr][7],
			focus: DefaultColors[colorStr][5],
			active: DefaultColors[colorStr][5],
			disabled: DefaultColors[colorStr][2],
		},
	},

	text: {
		body: DefaultColors.neutral[0],
		secondary: DefaultColors.neutral[2],
		subtle: DefaultColors.neutral[4],
		muted: DefaultColors.neutral[4],
		inactive: DefaultColors.neutral[4],
		success: DefaultColors.green[6],
		warning: DefaultColors.yellow[6],
		error: DefaultColors.red[6],
		info: DefaultColors.blue[2],
		primary: {
			normal: DefaultColors[colorStr][2],
			hover: DefaultColors[colorStr][3],
			link: DefaultColors[colorStr][2],
			focus: DefaultColors[colorStr][2],
			active: DefaultColors[colorStr][5],
			disabled: DefaultColors[colorStr][2],
		},
		input: {
			normal: DefaultColors.neutral[5],
			hover: DefaultColors.neutral[6],
			focus: DefaultColors.neutral[9],
		},
		on: {
			subtle: DefaultColors.neutral[9],
			image: "#fff",
			invert: DefaultColors.neutral[9],
		},
	},
});
