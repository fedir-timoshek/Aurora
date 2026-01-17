const Loading = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-night-950 px-6">
      <div className="absolute inset-0 bg-aurora-grid opacity-60" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-night-900/20 via-transparent to-night-950" />
      <div className="relative z-10 text-center">
        <div className="loader-track mx-auto" aria-hidden="true" />
        <div className="truck-loader" aria-hidden="true">
          <div className="truck-body" />
          <div className="truck-cab" />
          <div className="truck-wheel left" />
          <div className="truck-wheel right" />
        </div>
        <div className="truck-road" aria-hidden="true" />
        <p className="mt-6 text-sm uppercase tracking-[0.35em] text-neon-300">Завантаження</p>
        <p className="mt-2 text-base text-slate-200">Готуємо маршрут і перевіряємо деталі.</p>
      </div>
    </div>
  );
};

export default Loading;
