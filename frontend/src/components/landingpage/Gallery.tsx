export default function Gallery() {
  return (
    <section className="bg-[#f0f1ea] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <span className="text-[#ea7a24] font-semibold uppercase tracking-widest text-sm">
            Moments
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900">
            Behind The Journey
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="relative h-[400px] md:h-[450px] rounded-2xl overflow-hidden shadow-md bg-stone-200"
            >
              <img
                src={`/gallery-${item}.jpg`}
                alt={`Gallery ${item}`}
                className="object-cover w-full h-full transition hover:scale-105 duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
