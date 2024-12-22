import { motion } from "framer-motion";
import Image from "next/image";
import { type FC } from "react";

interface ImageTestimonial {
  imageSrc: string;
  imageAlt: string;
  priority?: boolean; // Add priority prop
}

const ImageTestimonialCard: FC<ImageTestimonial> = ({
  imageSrc,
  imageAlt,
  priority,
}) => (
  <motion.div
    className="relative mb-8 flex w-full justify-center rounded-xl p-2 last:mb-0"
    initial={{ opacity: 0, scale: 0.6 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
  >
    <Image
      src={imageSrc}
      alt={imageAlt}
      width={300}
      height={200}
      className="rounded-xl object-cover"
      priority={priority} // Use the priority prop
      loading={priority ? "eager" : "lazy"} // Load eagerly if priority is true
    />
  </motion.div>
);

export default ImageTestimonialCard;
