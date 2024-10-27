"use server";

import { CreateLeadSchemaType } from "@/components/shared/GetQuoteModal";

export const CreateLead = async (data: CreateLeadSchemaType) => {
  const formData = new FormData();
  console.log("data: ", data);

  Object.entries(data).forEach(([key, value]) =>
    formData.append(key, value ? value.toString() : "")
  );
  console.log("formData: ", formData);
  try {
    const response = await fetch(
      "https://www.itexcgroup.com/website/form/crm.lead",
      {
        method: "POST",
        body: formData
      }
    );

    console.log("response :", response);

    if (response.ok) {
      console.log("Form submitted successfully!");
    } else {
      console.error("Form submission failed.");
    }

    return response.ok;
  } catch (error) {
    console.error(error);
    return false;
  }
};
