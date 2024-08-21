import React from "react";
import GradualSpacing from "../magicui/gradual-spacing";
import {
  Facebook,
  Hotel,
  Instagram,
  Linkedin,
  Mail,
  Phone
} from "lucide-react";
import ContactForm from "./Components/ContactForm";
import { FadeElement } from "../magicui/fade-text";

const Contact = () => {
  return (
    <section className="bg-muted relative overflow-hidden">
      <FadeElement>
        <div className=" flex wrapper flex-col md:flex-row  gap-8">
          <div className="flex flex-col justify-center md:flex-[0.5] gap-6">
            <span className="font-semibold ">Contact us</span>
            <GradualSpacing
              text="Let's get in touch!"
              className="justify-start  Title"
            />
            <p>
              Got questions about the Itexc group and it’s units feel free to
              reach out.
            </p>
            <div className="flex flex-col mt-10 gap-4">
              <div className="grid grid-cols-[24px_auto] text-xl  gap-4">
                <Hotel size={24} className="mb-auto mt-1" />
                <p>
                  Subdivision of the commune, Lot N01, Building N02, Dar
                  El-Beida, Algiers.
                </p>
              </div>
              <div className="flex text-xl  gap-4">
                <Phone size={24} className="mb-auto mt-1" />
                <p>+213 345 6789</p>
              </div>
              <div className="flex text-xl  gap-4">
                <Mail size={24} className="mb-auto mt-1" />
                <p>contact@itexcgroup.com</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-10">
              <p className="text-2xl font-bold">Follow Us</p>
              <span className="flex gap-4">
                <span className="text-background bg-foreground p-2">
                  <Instagram size={24} className="stroke-background" />
                </span>
                <span className="text-background bg-foreground p-2">
                  <Facebook size={24} className="fill-background" stroke="0" />
                </span>
                <span className="text-background bg-foreground p-2">
                  <Linkedin size={24} className="fill-background" stroke="1" />
                </span>
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center md:flex-[0.5] gap-6">
            <ContactForm />
          </div>
        </div>
      </FadeElement>
    </section>
  );
};

export default Contact;
