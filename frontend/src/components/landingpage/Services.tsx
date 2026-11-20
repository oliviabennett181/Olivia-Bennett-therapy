interface ServicesProps {
  onBookNow: () => void;
}

export default function Services({ onBookNow }: ServicesProps) {
  return (
    <section id="services" className="bg-[#e4ecce] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-orange-600 font-semibold uppercase tracking-widest text-sm">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900">
            Massage Treatments
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Choose from our premium massage treatments. Select your preferred
            duration and pricing during booking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer group">
            <div className="w-12 h-12 border border-orange-200 rounded-lg flex items-center justify-center text-orange-500 mb-6 transition-colors duration-300 group-hover:bg-orange-50">
              ✨
            </div>
            <h3 className="text-xl font-serif mb-3 group-hover:text-orange-500 transition-colors">
              SPECIAL SERVICE (NURU + GFE + FS)
            </h3>
            <p className="text-stone-500 mb-8 flex-grow">
              Full service with no restrictions.
            </p>

            <div className="space-y-4 mb-8">
              <span className="text-xs text-stone-400 uppercase tracking-wider block mb-1">
                Pricing
              </span>
              <div className="flex justify-between items-center text-sm border-t border-stone-100 pt-4">
                <span className="text-stone-500">60 Minutes</span>
                <span className="text-[#ea7a24] font-semibold">$350</span>
              </div>
              <div className="flex justify-between items-center text-sm border-t border-stone-100 pt-4">
                <span className="flex items-center gap-2 text-stone-500">
                  90 Minutes
                  <span className="bg-[#ea7a24] text-white text-[10px] px-2 py-0.5 rounded-full uppercase">
                    Recommended
                  </span>
                </span>
                <span className="text-[#ea7a24] font-semibold">$400</span>
              </div>
              <div className="flex justify-between items-center text-sm border-t border-stone-100 pt-4">
                <span className="text-stone-500">120 Minutes</span>
                <span className="text-[#ea7a24] font-semibold">$500</span>
              </div>
            </div>
            <button
              onClick={onBookNow}
              className="w-full border border-stone-200 group-hover:border-[#ea7a24] group-hover:bg-[#ea7a24] group-hover:text-white text-stone-600 py-3 rounded-lg transition-all duration-300 mt-auto font-medium"
            >
              BOOK NOW
            </button>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer group">
            <div className="w-12 h-12 border border-orange-200 rounded-lg flex items-center justify-center text-orange-500 mb-6 transition-colors duration-300 group-hover:bg-orange-50">
              🤍
            </div>
            <h3 className="text-xl font-serif mb-3 group-hover:text-orange-500 transition-colors">
              SWEDISH MASSAGE
            </h3>
            <p className="text-stone-500 mb-8 flex-grow">
              Gentle massage that relieves stress, improves circulation, and
              promotes deep relaxation.
            </p>

            <div className="mb-8 border-t border-stone-100 pt-4">
              <span className="text-xs text-stone-400 uppercase tracking-wider block mb-1">
                Starting From
              </span>
              <div className="text-[#ea7a24] font-bold text-3xl">
                $250{" "}
                <span className="text-sm font-normal text-stone-400 group-hover:text-stone-500">
                  / hour
                </span>
              </div>
            </div>
            <button
              onClick={onBookNow}
              className="w-full border border-stone-200 group-hover:border-[#ea7a24] group-hover:bg-[#ea7a24] group-hover:text-white text-stone-600 py-3 rounded-lg transition-all duration-300 mt-auto font-medium"
            >
              BOOK NOW
            </button>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer group">
            <div className="w-12 h-12 bg-[#ea7a24] rounded-lg flex items-center justify-center text-white mb-6 transition-transform duration-300 group-hover:scale-110">
              🖐️
            </div>
            <h3 className="text-xl font-serif mb-3 group-hover:text-orange-500 transition-colors">
              DEEP TISSUE MASSAGE
            </h3>
            <p className="text-stone-500 mb-8 flex-grow">
              Firm pressure designed to release chronic muscle tension and
              stiffness.
            </p>

            <div className="mb-8 border-t border-stone-100 pt-4">
              <span className="text-xs text-stone-400 uppercase tracking-wider block mb-1">
                Starting From
              </span>
              <div className="text-[#ea7a24] font-bold text-3xl">
                $250{" "}
                <span className="text-sm font-normal text-stone-400 group-hover:text-stone-500">
                  / hour
                </span>
              </div>
            </div>
            <button
              onClick={onBookNow}
              className="w-full border border-stone-200 group-hover:border-[#ea7a24] group-hover:bg-[#ea7a24] group-hover:text-white text-stone-600 py-3 rounded-lg transition-all duration-300 mt-auto font-medium"
            >
              BOOK NOW
            </button>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer group">
            <div className="w-12 h-12 border border-orange-200 rounded-lg flex items-center justify-center text-orange-500 mb-6 transition-colors duration-300 group-hover:bg-orange-50">
              🔥
            </div>
            <h3 className="text-xl font-serif mb-3 group-hover:text-orange-500 transition-colors">
              HOT STONE MASSAGE
            </h3>
            <p className="text-stone-500 mb-8 flex-grow">
              Heated stones melt away stress while soothing tight muscles and
              improving circulation.
            </p>

            <div className="mb-8 border-t border-stone-100 pt-4">
              <span className="text-xs text-stone-400 uppercase tracking-wider block mb-1">
                Starting From
              </span>
              <div className="text-[#ea7a24] font-bold text-3xl">
                $250{" "}
                <span className="text-sm font-normal text-stone-400 group-hover:text-stone-500">
                  / hour
                </span>
              </div>
            </div>
            <button
              onClick={onBookNow}
              className="w-full border border-stone-200 group-hover:border-[#ea7a24] group-hover:bg-[#ea7a24] group-hover:text-white text-stone-600 py-3 rounded-lg transition-all duration-300 mt-auto font-medium"
            >
              BOOK NOW
            </button>
          </div>

          {/* Service 5 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer group">
            <div className="w-12 h-12 border border-orange-200 rounded-lg flex items-center justify-center text-orange-500 mb-6 transition-colors duration-300 group-hover:bg-orange-50">
              🏃
            </div>
            <h3 className="text-xl font-serif mb-3 group-hover:text-orange-500 transition-colors">
              SPORTS MASSAGE
            </h3>
            <p className="text-stone-500 mb-8 flex-grow">
              Perfect for athletes to improve recovery, flexibility, and
              performance.
            </p>

            <div className="mb-8 border-t border-stone-100 pt-4">
              <span className="text-xs text-stone-400 uppercase tracking-wider block mb-1">
                Starting From
              </span>
              <div className="text-[#ea7a24] font-bold text-3xl">
                $250{" "}
                <span className="text-sm font-normal text-stone-400 group-hover:text-stone-500">
                  / hour
                </span>
              </div>
            </div>
            <button
              onClick={onBookNow}
              className="w-full border border-stone-200 group-hover:border-[#ea7a24] group-hover:bg-[#ea7a24] group-hover:text-white text-stone-600 py-3 rounded-lg transition-all duration-300 mt-auto font-medium"
            >
              BOOK NOW
            </button>
          </div>

          {/* Service 6 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer group">
            <div className="w-12 h-12 border border-orange-200 rounded-lg flex items-center justify-center text-orange-500 mb-6 transition-colors duration-300 group-hover:bg-orange-50">
              🌸
            </div>
            <h3 className="text-xl font-serif mb-3 group-hover:text-orange-500 transition-colors">
              AROMATHERAPY MASSAGE
            </h3>
            <p className="text-stone-500 mb-8 flex-grow">
              Relaxing massage enhanced with essential oils for complete mind
              and body wellness.
            </p>

            <div className="mb-8 border-t border-stone-100 pt-4">
              <span className="text-xs text-stone-400 uppercase tracking-wider block mb-1">
                Starting From
              </span>
              <div className="text-[#ea7a24] font-bold text-3xl">
                $250{" "}
                <span className="text-sm font-normal text-stone-400 group-hover:text-stone-500">
                  / hour
                </span>
              </div>
            </div>
            <button
              onClick={onBookNow}
              className="w-full border border-stone-200 group-hover:border-[#ea7a24] group-hover:bg-[#ea7a24] group-hover:text-white text-stone-600 py-3 rounded-lg transition-all duration-300 mt-auto font-medium"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
