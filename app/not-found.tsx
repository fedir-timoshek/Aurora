import Link from "next/link";

const NotFound = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-night-950 px-6">
      <div className="absolute inset-0 bg-aurora-grid opacity-50" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-night-900/40 via-transparent to-night-950" />
      <main className="relative z-10 w-full max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-neon-300">Помилка 404</p>
        <h1 className="notfound-title mt-4 text-6xl font-semibold md:text-7xl">404</h1>
        <p className="mt-4 text-xl text-white">Сторінку не знайдено</p>
        <p className="mt-3 text-base text-slate-300">
          Можливо, посилання застаріло або сторінка була переміщена.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-full border border-neon-400/70 bg-neon-500/25 px-6 py-3 text-sm font-semibold text-neon-100 shadow-glow transition hover:border-neon-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neon-300"
          >
            На головну
          </Link>
          <Link
            href="/#contact"
            className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-neon-300 hover:text-neon-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neon-300"
          >
            До контактів
          </Link>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
