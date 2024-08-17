import CTAButton from "@/app/curso/_components/CTAButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowDown,
  ArrowRightIcon,
  CheckIcon,
  ChevronRight,
} from "lucide-react";
import { type FC } from "react";
import { SectionWrapper } from "../../_components/SectionWrapper";

interface TargetAudienceSectionProps {
  title: string;
  profiles: {
    title: string;
    list: {
      title: string;
      descriptions: string[];
    }[];
  };
  goals: {
    title: string;
    list: string[];
  };
  footer: string;
  buttonText: string;
}

const TargetAudienceSection: FC<TargetAudienceSectionProps> = ({
  title,
  profiles,
  goals,
  footer,
  buttonText,
}) => {
  return (
    <SectionWrapper className="flex flex-col gap-y-6">
      <h2 className="mb-4 text-center text-4xl font-bold sm:text-5xl">
        {title}
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-4 border-orange-500">
          <CardHeader>
            <CardTitle className="font-bold">{profiles.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {profiles.list.map((profile) => (
                <li className="flex items-start" key={profile.title}>
                  <span>
                    <ArrowRightIcon className="mt-1  text-orange-500" />
                  </span>
                  <span className="ml-2">
                    <p className="font-bold">{profile.title}</p>
                    <ul className="space-y-2">
                      {profile.descriptions.map((description, index) => (
                        <li key={index} className="flex items-start">
                          <span>
                            <ChevronRight className="mt-1 size-5 text-gray-500" />
                          </span>
                          <span className="ml-2">{description}</span>
                        </li>
                      ))}
                    </ul>
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-4 border-green-500">
          <CardHeader>
            <CardTitle>{goals.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {goals.list.map((goal, index) => (
                <li key={index} className="flex items-start">
                  <span>
                    <CheckIcon className="mt-1  text-green-500" />
                  </span>
                  <span className="ml-2">{goal}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      <h3 className="text-center text-2xl font-bold">{footer}</h3>
      <div className="flex justify-center">
        <CTAButton>
          {buttonText} <ArrowDown className="ml-2 h-5 w-5" />
        </CTAButton>
      </div>
    </SectionWrapper>
  );
};

export default TargetAudienceSection;
