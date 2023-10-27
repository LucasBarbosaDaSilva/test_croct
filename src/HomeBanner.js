import React from "react";

export function HomeBanner() {
  const content = useContent("home-banner", {
    // Omit this property if you want your component to suspend
    initial: null,
    // It is a good practice to define a fallback to make your
    // application resilient to external errors.
    fallback: {
      title: "Your static title",
      subtitle: "Your static subtitle.",
      cta: "Your static CTA",
    },
  });

  if (content === null) {
    // Render a loading state
    return <div>✨ Personalizing...</div>;
  }

  const { title, subtitle, cta } = content;

  return (
    <div id="hero-banner">
      <h1>{title}</h1>
      <p className="subtitle">{subtitle}</p>
      <a className="cta" href="#">
        {cta}
      </a>
    </div>
  );
}
