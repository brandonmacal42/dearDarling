
export function SuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[rgb(253_242_248)] p-6">
      <div className="relative flex h-[70vh] w-[min(90vw,900px)] max-h-[760px] items-center justify-center overflow-hidden rounded-[32px] border border-pink-200 bg-white/70 shadow-[0_24px_80px_rgba(183,130,160,0.18)] backdrop-blur-sm">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.8),_rgba(253,242,248,0.2)_45%,_rgba(253,242,248,0.9))]" />

        <div className="relative z-10 flex max-w-xl flex-col items-center gap-4 rounded-3xl bg-white/80 p-8 text-center shadow-xl">
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="Bear kiss"
            className="h-[240px] rounded-xl object-cover"
          />

          <div className="text-4xl font-bold text-pink-600">WOOOOOO!!! Te amo Cris!! c: 🩷 </div>
        </div>
      </div>
    </div>
  );
}
