export function ProvidersSection() {
  return (
    <section
      id="providers"
      className="container py-12 md:py-24 lg:py-32 bg-white"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Supported Providers
        </h2>
        <p className="max-w-[600px] text-muted-foreground md:text-xl">
          We support blacklisting from major providers including Betika,
          Mozartbet, Betnara, and more.
        </p>
        {/* Add Logos or List here */}
      </div>
    </section>
  );
}
