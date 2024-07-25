"use client";

import React from "react";
import {
  FaXTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaDiscord,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";

const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-lg gap-4 float-right">
      <SocialLink href="https://x.com/hackersfund" icon={FaXTwitter} />
      <SocialLink href="/" icon={FaDiscord} />
      <SocialLink href="/" icon={FaYoutube} />
      <SocialLink href="/" icon={FaLinkedinIn} />
      <SocialLink href="mailto:" icon={TbMailFilled} />
    </div>
  );
}

export default function Footer() {
  return (
    <small className="block mt-28">
      <time>© {YEAR}</time>{" "}
      <a
        className="no-underline"
        href="https://x.com/hackersfund"
        target="_blank"
        rel="noopener noreferrer"
      >
        Hackers Fund
      </a>
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
      <SocialLinks />
    </small>
  );
}
