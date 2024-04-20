import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function UnderConstructionPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-[#f5f5f5] px-4 dark:bg-[#111111]">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-[#333333] sm:text-5xl md:text-6xl dark:text-[#f5f5f5]">
          La página se encuentra en construcción
        </h1>
        <p className="text-lg text-[#666666] md:text-xl dark:text-[#aaaaaa]">
          Estamos trabajando en ella para ofrecerte una mejor experiencia de
          aprendizaje en matemáticas.
        </p>
        <p className=" text-[#666666] dark:text-[#aaaaaa]">
          Si tienes alguna consulta, escríbenos a:{" "}
          <a
            className="underline hover:text-[#333333] dark:hover:text-[#f5f5f5]"
            href="#"
          >
            reaprendemate.oficial@gmail.com
          </a>
        </p>
        <p className=" text-[#666666] dark:text-[#aaaaaa]">
          O contáctanos a través de nuestras redes sociales:
        </p>
        <div className="flex items-center justify-center space-x-4">
          <Button
            variant={"ghost"}
            size="icon"
            asChild
            className="hover:bg-instagram rounded-full p-0 transition-all hover:text-white"
          >
            <Link
              href="https://www.instagram.com/reaprende.mate/"
              target="_blank"
            >
              <FaInstagram className="h-7 w-7 " />
            </Link>
          </Button>
          <Button
            variant={"ghost"}
            size="icon"
            asChild
            className="hover:bg-facebook rounded-full p-0 transition-all hover:text-white"
          >
            <Link
              href="https://web.facebook.com/Reaprende.mate"
              target="_blank"
            >
              <FaFacebookSquare className="h-7 w-7 " />
            </Link>
          </Button>
          <Button
            variant={"ghost"}
            size="icon"
            asChild
            className="hover:bg-whatsapp rounded-full p-0 transition-all hover:text-white"
          >
            <Link
              href="https://wa.me/56944768853?text=Hola!%20Vengo%20desde%20www.reaprende.cl%20y%20me%20gustaría%20consultar%20sobre%20..."
              target="_blank"
            >
              <FaWhatsapp className="h-7 w-7 " />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
