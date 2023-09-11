import { create } from "zustand";

interface useStoreModal{
    isOpen: () => void;
    onClose: () => void;
};
export const useStoreModal = create<useStoreModal>((set) => ({
    isOpen: () => set({ isOpen: true }),
    onClose: () => set({ onOpen: false }),
}));


