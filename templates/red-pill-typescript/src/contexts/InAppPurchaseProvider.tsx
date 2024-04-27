import type React from "react";
import { useEffect, createContext, useContext, useState } from "react";
import { Platform } from "react-native";
import Purchases from "react-native-purchases";

interface InAppPurchaseContextType {
	packages: any;
	purchasePackage: (pack: any) => void;
	isPurchaseReady: boolean;
	isPurchasing: boolean;
}

const InAppPurchaseContext = createContext({
	packages: [],
	purchasePackage: () => {},
	isPurchaseReady: false,
	isPurchasing: false,
} as InAppPurchaseContextType);

interface InAppPurchaseProviderProps {
	children: React.ReactNode;
}

export const InAppPurchaseProvider: React.FC<InAppPurchaseProviderProps> = ({
	children,
}) => {
	const [packages, setPackages] = useState([]);
	const [isPurchaseReady, setIsPurchaseReady] = useState(false);
	const [isPurchasing, setIsPurchasing] = useState(false);

	useEffect(() => {
		const setup = async () => {
			try {
				if (Platform.OS === "android") {
					Purchases.configure("YOUR_API_KEY");
				}
				if (Platform.OS === "ios") {
					Purchases.configure("YOUR_API_KEY");
				}
				await loadOfferings();
				setIsPurchaseReady(true);
			} catch (error) {
				setIsPurchaseReady(false);
				console.log("Error setting up purchases:", error);
			}
		};

		setup();
	}, []);

	const loadOfferings = async () => {
		try {
			const offerings = await Purchases.getOfferings();
			const currentOffering = offerings.current;

			if (currentOffering) {
				setPackages(currentOffering.availablePackages);
			}
		} catch (error) {
			console.log("Error loading offerings:", error);
		}
	};

	const purchasePackage = async (pack: any) => {
		setIsPurchasing(true);
		try {
			const { customerInfo } = await Purchases.purchasePackage(pack);
			console.log("Purchase successful. Customer info:", customerInfo);
		} catch (error) {
			console.log("Purchase failed:", error);
		}
		setIsPurchasing(false);
	};

	const contextValue: InAppPurchaseContextType = {
		packages,
		purchasePackage,
		isPurchaseReady,
		isPurchasing,
	};

	return (
		<InAppPurchaseContext.Provider value={contextValue}>
			{children}
		</InAppPurchaseContext.Provider>
	);
};

export const useInAppPurchase = () => useContext(InAppPurchaseContext);
