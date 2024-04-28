import type React from "react";
import {
	useState,
	useContext,
	useMemo,
	createContext,
	type ReactNode,
} from "react";
import { Modal, View } from "react-native";
import { useNonReactiveCallback } from "@hooks/useNonReactiveCallback";
import { createStyles } from "@theme";
import { IconButton } from "@ui";

import type {
	ModalItem,
	ModalControlContextType,
	ModalContextType,
} from "../types/index";
import { modals } from "../constants/modals";

const ModalContext = createContext<ModalContextType>({
	isModalActive: false,
	activeModals: [],
});

const ModalControlContext = createContext<ModalControlContextType>({
	openModal: () => {},
	closeModal: () => false,
	closeAllModals: () => {},
});

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [activeModals, setActiveModals] = useState([]);

	const openModal = useNonReactiveCallback((modal) => {
		setActiveModals((modals) => [...modals, modal]);
	});

	const closeModal = useNonReactiveCallback(() => {
		const wasActive = activeModals.length > 0;
		setActiveModals((modals) => {
			return modals.slice(0, -1);
		});
		return wasActive;
	});

	const closeAllModals = useNonReactiveCallback(() => {
		setActiveModals([]);
	});

	const state = useMemo(
		() => ({
			isModalActive: activeModals.length > 0,
			activeModals,
		}),
		[activeModals],
	);

	const methods = useMemo(
		() => ({
			openModal,
			closeModal,
			closeAllModals,
		}),
		[openModal, closeModal, closeAllModals],
	);

	const activeModal: ModalItem =
		state.activeModals[state.activeModals.length - 1];

	const ModalRenderer = modals[activeModal?.name];

	return (
		<ModalContext.Provider value={state}>
			<ModalControlContext.Provider value={methods}>
				{children}
				{state.isModalActive && <View style={styles.overlay} />}
				{state.isModalActive && (
					<Modal
						animationType="slide"
						visible={state.isModalActive}
						transparent
						onRequestClose={closeModal}
					>
						<View style={styles.container}>
							<View style={styles.innerContainer}>
								<View style={styles.titleContainer}>
									<IconButton
										variant="transparent"
										name="close"
										onPress={closeModal}
									/>
									<View style={styles.content}>
										<ModalRenderer />
									</View>
								</View>
							</View>
						</View>
					</Modal>
				)}
			</ModalControlContext.Provider>
		</ModalContext.Provider>
	);
};

const styles = createStyles((theme) => ({
	container: {
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	innerContainer: {
		borderRadius: theme.radius.md,
		backgroundColor: theme.semantic.bg.body,
		borderWidth: 1,
		borderColor: theme.semantic.border.inactive,
		width: theme.width * 0.9,
		minHeight: theme.height * 0.3,
		maxHeight: theme.height * 0.6,
	},
	overlay: {
		position: "absolute",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		backgroundColor: theme.black,
		opacity: 0.5,
	},
	titleContainer: {
		alignItems: "flex-end",
	},
	content: {
		padding: theme.spacing.xs,
		width: "100%",
	},
}));

export const useModal = (): ModalContextType => {
	const context = useContext(ModalContext);
	if (!context) {
		throw new Error("useModal must be used within a ModalProvider");
	}
	return context;
};

export const useModalControls = (): ModalControlContextType => {
	const context = useContext(ModalControlContext);
	if (!context) {
		throw new Error("useModal must be used within a ModalProvider");
	}
	return context;
};
