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
  FormControl,
  FormMessage,
  FormDescription
} from "@/components/ui/form";
import { ArrowRight } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { CreateLead } from "@/actions/create-lead";
import { useState } from "react";
import { toast } from "sonner";
import { CustomButton } from "./Custom-btn";
import { teamlead } from "@/lib/utils";

const FormSchema = z.object({
  team_id: z.string(),
  contact_name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(50, { message: "Name cannot exceed 50 characters" }),
  email_from: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
  phone: z
    .string()
    .min(1, { message: "Phone number is required" })
    .regex(
      /^(\+\d{1,3}[-\s.]?)?\(?([0-9]{3})\)?[-\s.]?([0-9]{3})[-\s.]?([0-9]{4})$/,
      {
        message:
          "Please enter a valid phone number (e.g. (123) 456-7890 or +1-234-567-8900)"
      }
    ),
  name: z
    .string()
    .min(1, { message: "Title is required" })
    .max(100, { message: "Title cannot exceed 100 characters" }),
  description: z
    .string()
    .min(200, { message: "Description must be at least 200 characters" })
    .max(2000, { message: "Description cannot exceed 2000 characters" })
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<CreateLeadSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      team_id: team_id.toString(),
      contact_name: "",
      email_from: "",
      phone: "",
      name: title,
      description: ""
    },
    mode: "onChange" // This enables real-time validation
  });

  const handleClose = () => {
    setIsOpen(false);
    form.reset();
  };

  const onSubmit = async (data: CreateLeadSchemaType) => {
    try {
      setIsSubmitting(true);
      const response = await CreateLead(data);
      if (response) {
        toast.success("Form submitted successfully!");
        handleClose();
      } else {
        toast.error("Form submission failed. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get form error count
  const errorCount = Object.keys(form.formState.errors).length;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen} modal>
      <DialogTrigger asChild>
        <Button variant="ghost" className={buttonClassName}>
          {buttonLabel} <ArrowRight className="ml-2" size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl sm:rounded-none">
        <DialogHeader>
          <DialogTitle className="text-xl">Estimate your project</DialogTitle>
          <DialogDescription>
            Through this you will be connected to our {teamlead(team_id)}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-4"
          >
            {/* Show overall form error message if there are errors */}
            {errorCount > 0 && (
              <div className="rounded-md bg-red-50 p-4 mb-4 col-span-2">
                <div className="flex">
                  <div className="text-sm text-red-700">
                    Please fix the {errorCount} error{errorCount > 1 ? "s" : ""}{" "}
                    below.
                  </div>
                </div>
              </div>
            )}

            <Input
              type="hidden"
              value={team_id.toString()}
              {...form.register("team_id")}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel className="text-base">
                    Title <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className={`p-4 py-6 rounded-none placeholder:text-muted-foreground text-lg
                        ${form.formState.errors.name ? "border-red-500" : "border-muted-foreground"}`}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contact_name"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel className="text-base">
                    Contact Name <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className={`p-4 py-6 rounded-none placeholder:text-muted-foreground text-lg
                        ${form.formState.errors.contact_name ? "border-red-500" : "border-muted-foreground"}`}
                      placeholder="Your full name"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-xs text-muted-foreground">
                    Enter your full name (3-50 characters)
                  </FormDescription>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email_from"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">
                    Email <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className={`p-4 py-6 rounded-none placeholder:text-muted-foreground text-lg
                        ${form.formState.errors.email_from ? "border-red-500" : "border-muted-foreground"}`}
                      type="email"
                      placeholder="your@email.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">
                    Phone <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className={`p-4 py-6 rounded-none placeholder:text-muted-foreground text-lg
                        ${form.formState.errors.phone ? "border-red-500" : "border-muted-foreground"}`}
                      placeholder="(123) 456-7890"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-xs text-muted-foreground">
                    Enter in format: (123) 456-7890 or +1-234-567-8900
                  </FormDescription>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel className="text-base">
                    Description <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className={`p-4 rounded-none min-h-48 placeholder:text-muted-foreground text-lg
                        ${form.formState.errors.description ? "border-red-500" : "border-muted-foreground"}`}
                      placeholder="Please provide detailed information about your requirements (minimum 200 characters)"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-xs text-muted-foreground">
                    Minimum 200 characters required
                  </FormDescription>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <DialogFooter className="col-span-2">
              <div className="w-full flex flex-col gap-2">
                {/* Show validation errors summary before submit button */}
                {errorCount > 0 && (
                  <div className="text-sm text-red-500">
                    Please fix all errors before submitting.
                  </div>
                )}
                <CustomButton
                  type="submit"
                  disabled={isSubmitting || errorCount > 0}
                  label={isSubmitting ? "Submitting..." : "Save changes"}
                />
              </div>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
