"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl
} from "@/components/ui/form";
import { ArrowRight } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { CreateLead } from "@/actions/create-lead";
import { useState } from "react";
import { toast } from "sonner";

const FormSchema = z.object({
  team_id: z.string(),
  contact_name: z.string({ message: "Contact name is required" }).min(3),
  email_from: z.string().email({ message: "Invalid email address" }),
  phone: z.string().regex(/^\d+$/, { message: "Phone must be a valid number" }),
  name: z.string({ message: "Title is required" }),
  description: z.string().optional()
});

export type CreateLeadSchemaType = z.infer<typeof FormSchema>;

export function GetQuoteModal({
  team_id,
  title,
  buttonLabel,
  buttonClassName
}: {
  team_id: number;
  title: string;
  buttonLabel: string;
  buttonClassName?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const form = useForm<CreateLeadSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      team_id: team_id.toString(),
      contact_name: "",
      email_from: "",
      phone: "",
      name: title,
      description: ""
    }
  });

  const onSubmit = async (data: CreateLeadSchemaType) => {
    const response = await CreateLead(data);
    if (response) {
      toast.success("Form submitted successfully!");
      form.reset();
      handleClose();
    } else {
      toast.error("Form submission failed.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className={buttonClassName}>
          {buttonLabel} <ArrowRight size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>{buttonLabel}</DialogTitle>
          <DialogDescription>Fill out the details below</DialogDescription>
        </DialogHeader>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Hidden Service ID */}
            <input
              type="hidden"
              value={team_id.toString()}
              {...form.register("team_id")}
            />

            {/* Contact Name */}
            <FormField
              name="contact_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Email From */}
            <FormField
              name="email_from"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Phone */}
            <FormField
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Title */}
            <FormField
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Description */}
            <FormField
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Submitting" : "Save changes"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
