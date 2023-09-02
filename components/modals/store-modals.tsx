"use client";

import axios from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(1),
});
export const StoreModal = () => {
  const StoreModal = useStoreModal();
  
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });


  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    
    try {
      setLoading(true);
      const response = await axios.post('./api/stores', values);
      console.log(response.data)
    } catch (error) {
      console.log(error); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title="Create store"
      description="Add a new stor to manage your products"
      isOpen={StoreModal.isOpen}
      onClose={StoreModal.onClose}
    >
      <div className="">
        <div className="space-y-4 py-2 pb-4">
                  <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)}>
                          <FormField control={form.control} name="name" render={({ field }) => (
                              <FormItem>
                                  <FormLabel>Name</FormLabel>
                                  <FormControl>
                                      <Input disabled={loading} placeholder="E-Commerce" {...field} />
                                  </FormControl>
                                  <FormMessage/>
                              </FormItem>
                          )} />
                          <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                              <Button disabled={loading} variant="output" onClick={StoreModal.onclose}>Cancel</Button>
                              <Button disabled={loading} type="submit">Continue</Button>
                          </div>
                      </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
