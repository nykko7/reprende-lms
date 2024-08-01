import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";
import { SectionWrapper } from "../_components/SectionWrapper";

interface WhoAmISectionProps {
  title: string;
  description: string;
  name: string;
  role: string;
  instagramUrl: string;
  instagramTag: string;
  bio: string;
  imagePath: string;
  imageAlt: string;
}

function boldStringParts(text: string) {
  // The bold text will be in the format **bold**
  const boldRegex = /\*\*(.*?)\*\*/g;
  const parts = text.split(boldRegex);

  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return <strong key={index}>{part}</strong>;
    }
    return part;
  });
}

const WhoAmISection: FC<WhoAmISectionProps> = ({
  title,
  description,
  name,
  role,
  instagramUrl,
  instagramTag,
  bio,
  imagePath,
  imageAlt,
}) => {
  return (
    <SectionWrapper>
      <div className="mx-auto mb-8 max-w-3xl text-center">
        <h2 className="text-4xl font-bold sm:text-5xl">{title}</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          {boldStringParts(description)}
        </p>
      </div>
      <div className="mx-auto max-w-6xl rounded-2xl bg-gradient-to-r from-primary/20  to-secondary/20 p-8 px-6 shadow-lg lg:px-8">
        <div className="flex flex-col items-center rounded-xl bg-black/50 p-6 md:flex-row">
          <div className="h-32 w-32 overflow-hidden md:h-48 md:w-48">
            <Image
              src={imagePath}
              alt={imageAlt}
              width={192}
              height={192}
              className="object-cover"
            />
          </div>
          <div className="mt-4 text-center md:ml-6 md:mt-0 md:text-left">
            <h2 className="text-3xl font-bold">{name}</h2>
            <p className="text-lg">{role}</p>
            <Link href={instagramUrl} target="_blank">
              <span className="bg-gradient-to-b from-fuchsia-500 to-cyan-500 bg-clip-text text-lg text-transparent drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] transition-all hover:from-fuchsia-300 hover:to-cyan-400">
                {instagramTag}
              </span>
            </Link>
          </div>
        </div>
        <div className="mt-6 text-center md:text-left">
          <p className="whitespace-pre-wrap text-base leading-relaxed">
            {boldStringParts(bio)}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhoAmISection;
