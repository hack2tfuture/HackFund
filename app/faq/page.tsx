import React from "react";

export default function Faq() {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">FAQs</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <h3> Who can apply?</h3>
        <p>
          Anyone aged 19 or younger, working on a cool project and in need of a
          grant, is eligible to apply.
        </p>
        <h3>How much grant do you give?</h3>
        <p>
          We give grants from $100 to $1000, depending on your project's needs.
        </p>
        <h3>Do you take equity in my company or poject?</h3>
        <p>
          No, we don’t take any equity in your company or project. We just give
          grants for working on your cool project.
        </p>
        <h3>Is there an application deadline?</h3>
        <p>
          No deadlines! You can apply anytime. If you’re working on something
          cool,{" "}
          <a href="https://forms.gle/GU2kLMjrWgKxKJ1u7" target="_blank">
            Apply now
          </a>
          .
        </p>
        <h3>More questions?</h3>
        <p>Feel free to email us at info.hackersfund@gmail.com</p>
      </div>
    </div>
  );
}
