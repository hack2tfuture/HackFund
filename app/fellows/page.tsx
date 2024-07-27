import React from "react";

export default function Faq() {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">HF Fellows</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          We’ve just launched! Be the first to become a Hackers Fund Fellow and
          secure grants (non-dilutive ideation capital) for your exciting
          project.
        </p>
        <p>
          If you are working on something cool and need a grant, {""}
          <a href="https://forms.gle/GU2kLMjrWgKxKJ1u7" target="_blank">
            Apply now
          </a>
          —it only takes a few minutes!
        </p>
      </div>
    </div>
  );
}
