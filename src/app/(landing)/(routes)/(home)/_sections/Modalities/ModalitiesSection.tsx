import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BookOpen, CheckCircle, PlayCircle, Users, Video } from "lucide-react";
import Link from "next/link";
import { type FC } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { SectionWrapper } from "../../../../../../components/landing/SectionWrapper";
import { createWhatsAppMessageLink } from "@/lib/whatsapp";

interface ModalitiesSectionProps {
  title: string;
  description: string;
  modalities: {
    id: string;
    name: string;
    icon: string;
    tagline: string;
    description: string;
    price: string;
    duration: string;
    features: string[];
    urgencyNote?: string;
    semiUrgencyNote?: string;
    notUrgencyNote?: string;
  }[];
  commonBenefits: {
    title: string;
    benefits: string[];
  };
  ctaText: string;
  ctaButtonText: string;
}
const ModalitiesSection: FC<ModalitiesSectionProps> = ({
  title,
  description,
  modalities,
  commonBenefits,
  ctaText,
  ctaButtonText,
}) => {
  const iconComponents: Record<string, JSX.Element> = {
    PlayCircle: (
      <PlayCircle className="mx-auto h-16 w-16 text-primary-foreground" />
    ),
    Video: <Video className="mx-auto h-16 w-16 text-primary-foreground" />,
    Users: <Users className="mx-auto h-16 w-16 text-primary-foreground" />,
  };

  const whatsappLinkById: Record<string, string> = {
    live: createWhatsAppMessageLink(
      "Hola! Vengo desde www.reaprende.cl y me gustaría inscribirme en la modalidad en vivo",
    ),
    recorded: createWhatsAppMessageLink(
      "Hola! Vengo desde www.reaprende.cl y me gustaría inscribirme en la modalidad grabada",
    ),
    hybrid: createWhatsAppMessageLink(
      "Hola! Vengo desde www.reaprende.cl y me gustaría inscribirme en la modalidad híbrida",
    ),
  };

  return (
    <SectionWrapper id="inscripciones" className="">
      <div className="mx-auto mb-12 flex max-w-3xl flex-col gap-2 text-center">
        <h2 className="text-4xl font-bold sm:text-5xl">{title}</h2>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-8 grid gap-6 lg:grid-cols-3">
          {modalities.map((modality, index) => (
            <Card
              key={index}
              className="relative flex flex-col rounded-lg border-2 border-primary p-6"
            >
              <CardHeader className="min-h-48 text-center">
                {iconComponents[modality.icon] ?? null}
                <h3 className="text-2xl font-bold text-primary-foreground">
                  {modality.name}
                </h3>
                <p className="text-lg font-semibold text-muted-foreground">
                  {modality.tagline}
                </p>
              </CardHeader>
              <CardContent className="flex h-full flex-col gap-6 text-center">
                <p className="text-card-foreground">{modality.description}</p>
                <ul className="text-left text-card-foreground">
                  {modality.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="mb-2 flex items-start">
                      <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex h-full flex-col justify-end gap-2">
                  <p className="text-2xl font-extrabold text-primary-foreground">
                    {modality.price}
                  </p>
                  <Button
                    size="lg"
                    asChild
                    className="flex h-fit flex-wrap text-wrap p-4 font-bold"
                  >
                    <Link href={whatsappLinkById[modality.id]!} target="_blank">
                      <FaWhatsapp className="mr-2 h-5 w-5" />
                      Consultar disponiblidad
                    </Link>
                  </Button>
                  {/* <Button size={"lg"}></Button> */}
                  {modality.urgencyNote && (
                    <p className="text-sm text-red-400">
                      {modality.urgencyNote}
                    </p>
                  )}
                  {modality.notUrgencyNote && (
                    <p className="text-sm text-green-400">
                      {modality.notUrgencyNote}
                    </p>
                  )}
                  {modality.semiUrgencyNote && (
                    <p className="text-sm text-yellow-400">
                      {modality.semiUrgencyNote}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="mb-8 rounded-lg border-2 border-secondary p-6">
          <CardContent className="flex flex-col items-center gap-4 pt-6 text-center">
            <BookOpen className="mb-4 h-16 w-16 text-primary-foreground" />
            <h4 className="mb-4 text-2xl font-bold text-primary-foreground">
              {commonBenefits.title}
            </h4>
            <ul className="grid gap-2 text-primary-foreground md:grid-cols-2">
              {commonBenefits.benefits.map((benefit, benefitIndex) => (
                <li key={benefitIndex} className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-400" />
                  {benefit}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <p className="mb-6 text-center text-lg">{ctaText}</p>
        {/* <div className="text-center">
          <Button
            size="lg"
            asChild
            className="flex h-full flex-wrap text-wrap bg-green-800 p-4 text-xl font-bold hover:bg-green-800/80"
          >
            <Link
              href="https://wa.me/56944768853?text=Hola!%20Vengo%20desde%20https://www.reaprende.cl%20y%20me%20gustaría%20inscribir%20en%20la%20modalidad%20..."
              target="_blank"
            >
              <FaWhatsapp className="mr-2 h-8 w-8" />
              {ctaButtonText}
            </Link>
          </Button>
        </div> */}
      </div>
    </SectionWrapper>
  );
};

export default ModalitiesSection;
