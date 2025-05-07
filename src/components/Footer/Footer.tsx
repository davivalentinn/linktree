import type { ReactNode } from "react";
import { SocialMedia } from "../SocialMedia/SocialMedia";

interface FooterProps {
  children?: ReactNode;
}

export function Footer({ children }: FooterProps) {
  return (
    <footer className="">

      {children}

      <div className="flex justify-center gap-3 my-4">
        <SocialMedia url="https://facebook.com/sujeitoprogramador">
          <i className="text-2xl text-white ri-facebook-circle-fill"></i>
        </SocialMedia>
        <SocialMedia url="https://youtube.com/sujeitoprogramador">
          <i className="text-2xl text-white ri-youtube-fill"></i>
        </SocialMedia>
        <SocialMedia url="https://instagram.com/sujeitoprogramador">
          <i className="text-2xl text-white ri-instagram-fill"></i>
        </SocialMedia>
      </div>
    </footer>
  );
}

export default Footer;
