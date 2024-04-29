import { getLocales } from "expo-localization";
// i18 modules
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
// Language resources
import { en, es } from "./resources";

export const resources = {
	en: {
		translation: en,
	},
	es: {
		translation: es,
	},
};

const getUserLanguage = (): string => {
	const LOCALE = getLocales()[0];
	return LOCALE?.languageCode || "en";
};

i18next.use(initReactI18next).init({
	debug: false,
	lng: getUserLanguage(),
	compatibilityJSON: "v3",
	fallbackLng: "en",
	resources,
});

export default i18next;
