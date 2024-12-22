import { SocialLinks } from "./SocialLinks";

export const Footer = () => {
  // return <div className="block text-center">Reaprende Mate</div>;
  return (
    <footer className="text-center">
      <div className="container mx-auto flex flex-col items-center px-4 py-8">
        <SocialLinks />
        <div className="mt-4">
          <p>
            &copy; {new Date().getFullYear()} Reaprende Mate. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
