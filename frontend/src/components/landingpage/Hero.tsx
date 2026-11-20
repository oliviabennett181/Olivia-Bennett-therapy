import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-end pb-12 md:pb-20 text-center px-4 overflow-hidden">
      {/* Background Image Container */}
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-top md:bg-[center_top_10%] transition-all duration-700"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        {/* Gentle gradient to make text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30"></div>
      </div>

      {/* HERO CONTENT OVERLAY */}
      <div className="relative z-10 max-w-5xl w-full px-2">
        {/* Olivia-Bennett'S STUDIO - STRICTLY ON A SINGLE STRAIGHT LINE */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-3 tracking-[0.1em] uppercase drop-shadow-md font-normal whitespace-nowrap">
          Olivia-Bennett&apos;s Studio
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-stone-200 mb-8 font-light italic tracking-wide drop-shadow-sm max-w-2xl mx-auto">
          &quot;Expert therapeutic massage to restore your mind, body, and
          wellness.&quot;
        </p>

        {/* ACTION BUTTONS WITH HOVER-TO-WHITE STYLING */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-3xl mx-auto">
          {/* Customer Reviews Button */}
          <Link
            href="#reviews"
            className="w-full sm:w-auto min-w-[200px] bg-[#ea7a24] border-2 border-[#ea7a24] text-white hover:bg-white hover:text-stone-900 hover:border-white px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-md text-center"
          >
            Customer Reviews
          </Link>

          {/* Payment Methods Button (NOW ORANGE DEFAULT, TURNS WHITE ON HOVER) */}
          <Link
            href="#payments"
            className="w-full sm:w-auto min-w-[200px] bg-[#ea7a24] border-2 border-[#ea7a24] text-white hover:bg-white hover:text-stone-900 hover:border-white px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-md text-center"
          >
            Payment Methods
          </Link>

          {/* Check Gift Card Balance Button */}
          <Link
            href="/gift-card-balance"
            className="w-full sm:w-auto min-w-[200px] bg-[#ea7a24] border-2 border-[#ea7a24] text-white hover:bg-white hover:text-stone-900 hover:border-white px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-md text-center"
          >
            Check Gift Card Balance
          </Link>
        </div>
      </div>
    </section>
  );
}
