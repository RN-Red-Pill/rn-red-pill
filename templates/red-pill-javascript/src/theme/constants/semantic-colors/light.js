import { DefaultColors } from "../default-colors";

export const LightTheme = (
	colorStr = "indigo",
) => ({
	primary: "#000",
	bg: {
		page: "#FFFFFF",
		body: "#FFFFFF",

		primary: {
			normal: DefaultColors[colorStr][5],
			hover: DefaultColors[colorStr][7],
			subtle: DefaultColors[colorStr][4],
			subtleHover: DefaultColors[colorStr][6],
			focus: DefaultColors[colorStr][5],
			active: DefaultColors[colorStr][6],
			disabled: DefaultColors[colorStr][1],
			muted: DefaultColors[colorStr][0],
		},

		success: {
			normal: DefaultColors.green[5],
			hover: DefaultColors.green[6],
			muted: DefaultColors.green[2],
		},
		warning: {
			normal: DefaultColors.yellow[5],
			hover: DefaultColors.yellow[6],
			muted: DefaultColors.yellow[2],
		},
		error: {
			normal: DefaultColors.red[5],
			hover: DefaultColors.red[6],
			muted: DefaultColors.red[2],
		},
		info: {
			normal: DefaultColors.blue[5],
			hover: DefaultColors.blue[6],
			muted: DefaultColors.blue[2],
		},
		surface: {
			normal: DefaultColors.neutral[1],
			invert: DefaultColors.neutral[9],
			raised: DefaultColors.neutral[9],
		},
		strong: DefaultColors.neutral[9],
		subtle: DefaultColors.neutral[1],
		muted: DefaultColors.neutral[2],
		input: {
			normal: "#fff",
			hover: DefaultColors.neutral[1],
			focus: "#fff",
			disabled: DefaultColors.neutral[1],
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
			disabled: DefaultColors[colorStr][1],
		},
		container: DefaultColors.neutral[4],
		strong: DefaultColors.neutral[9],
		subtle: DefaultColors.neutral[1],
		inactive: DefaultColors.neutral[3],
		success: DefaultColors.green[4],
		warning: DefaultColors.yellow[4],
		error: DefaultColors.red[4],
		info: DefaultColors.blue[4],
		input: {
			normal: DefaultColors.neutral[3],
			hover: DefaultColors.neutral[4],
			focus: DefaultColors.blue[2],
			disabled: DefaultColors.neutral[3],
		},
	},

	icon: {
		default: DefaultColors.neutral[9],
		muted: DefaultColors.neutral[5],
		inactive: DefaultColors.neutral[3],
		neutral: "#fff",
		success: DefaultColors.green[5],
		warning: DefaultColors.yellow[5],
		error: DefaultColors.red[5],
		info: DefaultColors.blue[5],
		secondary: DefaultColors[colorStr][5],
		tertiary: DefaultColors.blue[5],
		primary: {
			normal: DefaultColors[colorStr][5],
			hover: DefaultColors[colorStr][7],
			focus: DefaultColors[colorStr][5],
			active: DefaultColors[colorStr][7],
			disabled: DefaultColors[colorStr][1],
		},
	},

	text: {
		body: DefaultColors.neutral[7],
		secondary: DefaultColors.neutral[8],
		subtle: DefaultColors.neutral[6],
		muted: DefaultColors.neutral[4],
		inactive: DefaultColors.neutral[3],
		success: DefaultColors.green[5],
		warning: DefaultColors.yellow[5],
		error: DefaultColors.red[5],
		info: DefaultColors.blue[5],
		primary: {
			normal: DefaultColors[colorStr][5],
			hover: DefaultColors[colorStr][7],
			link: DefaultColors[colorStr][5],
			focus: DefaultColors[colorStr][5],
			active: DefaultColors[colorStr][7],
			disabled: DefaultColors[colorStr][1],
		},
		input: {
			normal: DefaultColors.neutral[5],
			hover: DefaultColors.neutral[6],
			focus: DefaultColors.neutral[9],
		},
		on: {
			subtle: DefaultColors.neutral[6],
			image: "#fff",
			invert: "#fff",
		},
	},
});
