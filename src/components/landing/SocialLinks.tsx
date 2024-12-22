import { Button } from "@/components/ui/button";
import { createWhatsAppMessageLink } from "@/lib/whatsapp";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";

export const SocialLinks = () => {
  return (
    <div className="flex items-center">
      <Button
        variant={"ghost"}
        size="smIcon"
        asChild
        className="hover:bg-instagram rounded-full p-0 transition-all hover:text-white"
      >
        <Link href="https://www.instagram.com/reaprende.mate/" target="_blank">
          <FaInstagram className="h-5 w-5 " />
        </Link>
      </Button>
      <Button
        variant={"ghost"}
        size="smIcon"
        asChild
        className="hover:bg-facebook rounded-full p-0 transition-all hover:text-white"
      >
        <Link href="https://web.facebook.com/Reaprende.mate" target="_blank">
          <FaFacebookSquare className="h-5 w-5 " />
        </Link>
      </Button>
      <Button
        variant={"ghost"}
        size="smIcon"
        asChild
        className="hover:bg-whatsapp rounded-full p-0 transition-all hover:text-white"
      >
        <Link
          href={createWhatsAppMessageLink(
            "Hola! Vengo desde www.reaprende.cl y me gustaría consultar sobre...",
          )}
          target="_blank"
        >
          <FaWhatsapp className="h-5 w-5 " />
        </Link>
      </Button>
    </div>
  );
};
