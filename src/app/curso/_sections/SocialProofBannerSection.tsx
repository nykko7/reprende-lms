type SocialProofBannerSectionProps = {
  socialProofs: {
    number: string;
    description: string;
  }[];
};
export const SocialProofBannerSection = ({
  socialProofs,
}: SocialProofBannerSectionProps) => {
  return (
    <section className="align center bg-gradient from-bg-primary/60 group z-20 my-0 flex flex-col justify-center gap-4 to-secondary/60 py-8 text-center text-primary-foreground">
      <dl className="mx-auto grid max-w-screen-md gap-16 sm:grid-cols-3">
        {socialProofs?.map((socialProof, index) => (
          <div key={index} className="flex max-w-40 flex-col items-center  ">
            <dt className="mb-2 text-3xl font-extrabold drop-shadow-[0_1.5px_1.5px_rgba(8,8,8,0.8)] sm:text-4xl">
              {socialProof.number}
            </dt>
            <dd className="text-lg font-medium text-muted-foreground drop-shadow-lg">
              {socialProof.description}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};
