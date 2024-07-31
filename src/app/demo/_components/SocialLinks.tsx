import { Button } from "@/components/ui/button";
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
          href="https://wa.me/56944768853?text=Hola!%20Vengo%20desde%20https://www.reaprende.cl%20y%20me%20gustaría%20consultar%20sobre%20..."
          target="_blank"
        >
          <FaWhatsapp className="h-5 w-5 " />
        </Link>
      </Button>
    </div>
  );
};
