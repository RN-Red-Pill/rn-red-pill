import ExampleModal from "../components/ExampleModal";
import type { ModalMap } from "../types";

// you can export other modals there.
export const modals: ModalMap = {
	"example-modal": () => <ExampleModal />,
};
