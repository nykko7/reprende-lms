import { homeTexts } from "@/config/content/home";

export default function SocialProofBannerSection() {
  const { socialProofs } = homeTexts;

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
      <div className="relative">
        <dl className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 sm:grid-cols-3 lg:px-8">
          {socialProofs?.map((socialProof, index) => (
            <div
              key={index}
              className="group flex flex-col items-center rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 transition-all duration-300 hover:bg-white/10 hover:ring-white/20"
            >
              <div className="mb-4 rounded-full bg-gradient-to-br from-primary to-secondary p-3">
                <socialProof.icon className="h-8 w-8 text-foreground" />
              </div>
              <dt className="text-4xl font-bold ">{socialProof.number}</dt>
              <dd className="mt-2 text-center text-sm text-muted-foreground">
                {socialProof.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
