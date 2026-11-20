export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-16 items-center">
      <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-xl bg-stone-200">
        <img
          src="/brooke-about.jpg"
          alt="Olivia-Bennett - Massage Therapist"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="space-y-6 text-stone-700">
        <span className="text-[#ea7a24] font-semibold uppercase tracking-widest text-sm">
          Meet Olivia-Bennett
        </span>
        <h2 className="text-4xl md:text-5xl font-serif text-stone-900 pb-2">
          Your Expert Massage Therapist
        </h2>

        <div className="space-y-5 leading-relaxed font-light text-lg">
          <p>
            Hello gentlemen, I&apos;m Olivia-Bennett. I&apos;m 28 years old, single, and
            independent.
          </p>
          <p>
            With over years of experience in therapeutic massage and holistic
            wellness, I&apos;ve dedicated my career to mastering both traditional
            healing techniques and contemporary spa innovations. My journey
            began with a passion for helping others find relief from pain and
            stress.
          </p>
          <p>
            I&apos;m fun, sweet, sensual, and easygoing, with a great sense of
            humor. I enjoy good conversation, great company, and always treat
            others with respect.
          </p>
          <p>
            I&apos;m available for both incall and outcall, and I offer a
            full-service experience for generous, respectful gentlemen. No
            games, please—I&apos;m here for genuine, respectful arrangements only.
          </p>
          <p>
            My mission is to provide you with an exceptional wellness experience
            in a warm, Let me give you an unforgettable experience you&apos;ll want
            to come back to.
          </p>
        </div>
      </div>
    </section>
  );
}
