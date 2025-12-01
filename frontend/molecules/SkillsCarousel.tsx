import SectionContainer from "@/lib/Wrapper/SectionContainer";
import SectionHeading from "../atoms/SectionHeading";
import InfiniteScroller from "../atoms/InfiniteScrollbar";

const SkillsCarousel = () => {
  return (
    <div className="w-full -mb-8 mt-5">
      <SectionContainer>
        <SectionHeading
          badge="Highlights"
          badgeColor="bg-indigo-500"
          badgePosition="-rotate-2"
          heading="The Tools I Work With"
          description="A continuously evolving collection of modern tools I use to create meaningful digital experiences."
        />

        <div className="-space-y-16 sm:-space-y-8 relative -mt-8">
          <InfiniteScroller direction="right" />
          <InfiniteScroller direction="left" />
        </div>
      </SectionContainer>
    </div>
  );
};

export default SkillsCarousel;

// -------------------------------------------------------
