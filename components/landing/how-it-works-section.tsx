export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="container py-12 md:py-24 lg:py-32 bg-white"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          How It Works
        </h2>
        <p className="max-w-[600px] text-muted-foreground md:text-xl">
          A brief explanation of the process will go here. (e.g., Select
          providers, provide details, submit request).
        </p>
        {/* Add Steps or Cards here */}
      </div>
    </section>
  );
}
