export interface ModalItem {
  name: string;
  icon?: string;
  title?: string;
  description?: string;
  image?: string;
}

export type ModalComponent = () => JSX.Element;

export interface ModalMap {
  [key: string]: ModalComponent;
}

export interface ModalContextType {
  isModalActive: boolean;
  activeModals: ModalItem[];
}
export interface ModalControlContextType {
  openModal: (modal: object) => void;
  closeModal: () => boolean;
  closeAllModals: () => void;
}
