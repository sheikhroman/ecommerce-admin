import { create } from "zustand";

interface useStoreModalStore{
    isOpen: () => void;
    onClose: () => void;
};
export const useStoreModal = create<useStoreModalStore>((set) => ({
    isOpen: () => set({ isOpen: true }),
    onClose: () => set({ onOpen: false }),
}));


