import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        Fueling Ideas, Funding Dreams!
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Hackers Fund is committed to supporting young innovators working on
          cool ideas and projects through micro-grants.
        </p>
        <p>
          We offer micro-grants ranging from $100 to $1000 as non-dilutive
          capital (no equity) to help fuel your passion and drive for
          your cool project.
        </p>
        <p>
          As an HF Fellow, you'll receive more than funding. You'll join a
          vibrant community of founders, investors, and scientists. Collaborate
          with fellow visionaries and amplify your impact in our network of
          creative minds.
        </p>
        <p>
          Our mission is to ignite the spark of innovation in young minds. We
          fuel bold ideas, empower overlooked talent, and nurture a community of
          dreamers and doers shaping tomorrow's world.
        </p>
        <p>
          Got a cool project and need a grant? {""}
          <a href="https://forms.gle/GU2kLMjrWgKxKJ1u7" target="_blank">
            Apply now
          </a>
          —it only takes a few minutes!
        </p>
        <p>
          Founded by{" "}
          <a href="https://x.com/1msirius_" target="_blank">
            Sirius
          </a>
          , founder and CEO of{" "}
          <a href="http://mithrilai.xyz/" target="_blank">
            Mithril AI.
          </a>
        </p>
      </div>
    </section>
  );
}
