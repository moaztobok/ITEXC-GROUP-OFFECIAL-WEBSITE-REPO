"use client";
import { CustomButton } from "@/components/shared/Custom-btn";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateLead } from "@/actions/create-lead";
import { toast } from "sonner";
import { Form, FormField } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { usePathname } from "next/navigation";
import { getTeamId } from "@/lib/utils";
import { useEffect } from "react";

const FormSchema = z.object({
  team_id: z.string(),
  contact_name: z.string({ message: "Contact name is required" }).min(3),
  email_from: z.string().email({ message: "Invalid email address" }),
  name: z.string(),
  description: z.string().optional()
});

export type ContactFormSchema = z.infer<typeof FormSchema>;

const ContactForm = () => {
  const pathname = usePathname();

  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      team_id: "",
      contact_name: "",
      email_from: "",
      name: "I Want to Get in Touch",
      description: ""
    }
  });

  const onSubmit = async (data: ContactFormSchema) => {
    const response = await CreateLead(data);
    if (response) {
      toast.success("Form submitted successfully!");
      form.reset();
    } else {
      toast.error("Form submission failed.");
    }
  };

  useEffect(() => {
    form.setValue("team_id", getTeamId(pathname).toString());
  }, [form, pathname]);

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4 w-full max-w-md"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          name="email_from"
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Email"
              // name="email_from"
              className="p-4 py-6 rounded-none placeholder:text-muted-foreground text-lg border-muted-foreground"
            />
          )}
        />
        <FormField
          name="contact_name"
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Full name"
              className="p-4 py-6 rounded-none placeholder:text-muted-foreground text-lg border-muted-foreground"
            />
          )}
        />
        <FormField
          name="description"
          render={({ field }) => (
            <Textarea
              {...field}
              placeholder="Message"
              className="p-4 rounded-none min-h-48 placeholder:text-muted-foreground text-lg border-muted-foreground"
            />
          )}
        />
        <CustomButton label="Submit" />
      </form>
    </Form>
  );
};

export default ContactForm;
