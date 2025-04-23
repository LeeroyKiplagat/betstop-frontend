export function FeaturesSection() {
  return (
    <section id="features" className="container py-12 md:py-24 lg:py-32">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Features
        </h2>
        <p className="max-w-[600px] text-muted-foreground md:text-xl">
          Highlighting key benefits. (e.g., Comprehensive provider list, Secure
          process, One-click action).
        </p>
        {/* Add Feature Cards or list here */}
      </div>
    </section>
  );
}
