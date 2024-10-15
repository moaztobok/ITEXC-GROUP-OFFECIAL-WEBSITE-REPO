import { FadeElement } from "@/components/magicui/fade-text";
import { CustomButton } from "@/components/shared/Custom-btn";
import AcademyGraphics from "./AcademyGraphics";
import SectionWrapper from "../shared/SectionWrapper";

const ItexcAcaddmy = () => {
  return (
    <SectionWrapper
      className={{
        section: "bg-muted"
      }}
    >
      <FadeElement className="flex-1">
        <div className="flex flex-col justify-center gap-6">
          <span className="font-semibold ">Our incubator</span>
          <h2 className="justify-start Title">INCUBYTE DZ</h2>
          <p>
            INCUBYTE is your gateway to a successful career in technology. We
            offer industry-leading courses taught by seasoned professionals,
            empowering you with the skills to excel in your field. Beyond
            technical expertise, we foster innovation and entrepreneurship,
            providing the support you need to launch your own tech venture. Join
            us in shaping the future of technology.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-10 my-10">
            <FadeElement direction="up">
              <div className="flex flex-col gap-4">
                <p className="text-2xl font-semibold">Program Variations</p>
                <p>
                  Join our IT courses: quick basics or in-depth PATH programs
                  for serious learners.
                </p>
              </div>
            </FadeElement>
            <FadeElement direction="up">
              <div className="flex flex-col gap-4">
                <p className="text-2xl font-semibold">Get certified</p>
                <p>
                  Get certified by professionals to prove yourself and show your
                  skills in your field
                </p>
              </div>
            </FadeElement>
          </div>
          <div>
            <CustomButton
              label="Enroll now"
              className="text-lg border bg-foreground border-foreground hover:bg-foreground/85 "
            />
          </div>
        </div>
      </FadeElement>
      <AcademyGraphics />
    </SectionWrapper>
  );
};

export default ItexcAcaddmy;
