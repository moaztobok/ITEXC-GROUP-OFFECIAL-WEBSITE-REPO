import Image from "next/image";
import { FadeElement } from "../magicui/fade-text";
import { CustomButton } from "../shared/Custom-btn";
import SectionWrapper from "../shared/SectionWrapper";

const Office = () => {
  return (
    <SectionWrapper
      className={{
        innerWrapper: "flex-col-reverse md:flex-row "
      }}
    >
      <FadeElement className="flex-1">
        <Image
          src="/images/our-office.png"
          alt="office"
          width={600}
          height={600}
        />
      </FadeElement>
      <FadeElement className="flex-1">
        <div className="flex flex-col gap-6 h-full justify-center">
          <h2 className="justify-start Title">Our office</h2>
          <p className="">
            Our head office extends over two floors with more than 230 m² for
            each floor, thoughtfully designed to foster productivity and
            innovation.
          </p>
          <p className="">
            The main floor is dedicated to our core operations, housing the IT
            and Operation teams. This floor includes two fully equipped
            workspaces for our development and design teams, complemented by a
            spacious meeting room and several offices to facilitate seamless
            collaboration and efficient workflow.
          </p>
          <p className="">
            The second floor is a hub for growth and learning, home to our
            start-up incubator and ITEXC INCUBATOR &quot;INCUBYTE&quot;
            initiative. This level is equipped with modern workspaces and
            training rooms, providing an ideal environment for incubating
            companies and consulting projects. It also serves as a learning
            center for aspiring engineers and learners, helping them develop
            their IT skills and advance their careers.
          </p>
          <div className="flex">
            <CustomButton label="Meet our team" />
          </div>
        </div>
      </FadeElement>
    </SectionWrapper>
  );
};

export default Office;
