"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
    const StoreModal = useStoreModal();
    return(
    <Modal title="Create store"
        description="Add a new stor to manage your products"
        isOpen={StoreModal.isOpen}
        onClose={StoreModal.onClose}
    >
            Future Create Store Form
    </Modal>
)}