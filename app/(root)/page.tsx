"use client";
import { Modal } from "@/components/ui/modal";

const SatupPage =()=> {
    return (
        <div className="p-4">
        <Modal title="Test" description="Test Description" isOpen onClose={()=>{}}>
        Children
        </Modal>
      </div>
    )
  }
export default SatupPage;