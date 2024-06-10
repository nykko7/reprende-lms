import { motion } from "framer-motion";
import Image from "next/image";
import { type FC } from "react";

interface ImageTestimonial {
  imageSrc: string;
  imageAlt: string;
}

const ImageTestimonialCard: FC<ImageTestimonial> = ({ imageSrc, imageAlt }) => (
  <motion.div
    className="relative mb-8 flex w-full justify-center rounded-xl p-2"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <Image
      src={imageSrc}
      alt={imageAlt}
      width={300}
      height={200}
      className="rounded-xl object-cover"
    />
  </motion.div>
);

export default ImageTestimonialCard;
