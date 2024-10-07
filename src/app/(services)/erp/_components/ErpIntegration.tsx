import { FadeElement } from "@/components/magicui/fade-text";
import SectionWrapper from "@/components/shared/SectionWrapper";
import List from "@/components/ui/List";
import ListItem from "@/components/ui/ListItem";

const ErpIntegration = () => {
  return (
    <SectionWrapper
      className={{
        section: "bg-muted"
      }}
    >
      <FadeElement className="flex-1">
        <h1 className="Title font-semibold">
          ERP{" "}
          <span className="text-primary-erp">Integration in Operations</span>
        </h1>
      </FadeElement>
      <FadeElement className="flex-1 font-medium text-xl flex flex-col gap-4">
        <p>
          Integrating ERP into operations involves connecting all departments
          finance, HR, procurement, sales into a single platform to streamline
          workflows and data management.
        </p>
        <p>
          Before implementation, ensure the enterprise team is prepared with the
          following prerequisites:
        </p>
        <List>
          <ListItem text="Clear understanding of current processes" />
          <ListItem text="Defined roles and responsibilities" />
          <ListItem text="Data migration plan for legacy systems" />
          <ListItem text="Comprehensive training on the ERP platform" />
          <ListItem text="IT infrastructure capable of supporting the system" />
        </List>
      </FadeElement>
    </SectionWrapper>
  );
};

export default ErpIntegration;
