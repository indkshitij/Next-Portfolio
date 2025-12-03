import SectionHeading from "../atoms/SectionHeading";
import { Globe } from "../atoms/Globe";
import ContactForm from "../molecules/ContactForm";
import SectionContainer from "@/lib/Wrapper/SectionContainer";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

export default function ContactSection() {
  return (
    <div className="relative pb-10">
      <SectionContainer>
        <SectionHeading
          badge="Get in Touch"
          badgeColor="bg-blue-600"
          heading="Let's Build Something Amazing"
          description="Fill out the form below — whether it’s a project idea, a question, or just to say hi."
          descriptionColor="text-gray-600"
          badgePosition="rotate-4"
        />

        <div className="relative flex flex-col-reverse sm:flex-row gap-10 items-start">
          <div className="w-full -mb-28 sm:mb-0">
            <Suspense
              fallback={
                <Skeleton className="w-80 h-full sm:h-[400px] rounded-lg" />
              }
            >
              <Globe />
            </Suspense>
          </div>

          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
