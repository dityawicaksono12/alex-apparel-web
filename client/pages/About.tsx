import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-cream py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-stone-900 mb-8">
            About ALX
          </h1>
          <p className="text-xl md:text-2xl text-stone-700 font-light italic mb-12">
            Crafting style, one piece at a time.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-white py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-8">
            Our Story
          </h2>
          <div className="space-y-6 text-lg text-stone-700 leading-relaxed">
            <p>
              ALX Custom Apparel was founded with a singular vision: to create
              exceptional, custom-designed clothing that celebrates
              individuality and craftsmanship. In a world of mass production, we
              believe in the power of personalization and quality.
            </p>
            <p>
              Our journey began with a passion for textiles and design. Each
              piece in our collection is thoughtfully designed and meticulously
              crafted, ensuring that your apparel not only looks exceptional but
              feels premium.
            </p>
            <p>
              We work closely with our clients to understand their vision,
              preferences, and style. From initial concept to final delivery,
              every step of the process reflects our commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-cream py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-16 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-stone-900 text-white rounded-full">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">
                Quality
              </h3>
              <p className="text-stone-600 leading-relaxed">
                We use only the finest materials and employ expert craftsmanship
                in every piece we create.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-stone-900 text-white rounded-full">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">
                Creativity
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Innovation and creativity drive our design process, pushing
                boundaries while respecting timeless style.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-stone-900 text-white rounded-full">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">
                Partnership
              </h3>
              <p className="text-stone-600 leading-relaxed">
                We believe in close collaboration with our clients to bring their
                vision to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Process Section */}
      <section className="bg-white py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-12">
            Our Process
          </h2>
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "We start by understanding your vision, style preferences, and requirements.",
              },
              {
                step: "02",
                title: "Design",
                description:
                  "Our designers create custom designs tailored to your specifications.",
              },
              {
                step: "03",
                title: "Crafting",
                description:
                  "Each piece is meticulously crafted using premium materials and techniques.",
              },
              {
                step: "04",
                title: "Quality Check",
                description:
                  "We perform rigorous quality checks to ensure excellence in every detail.",
              },
              {
                step: "05",
                title: "Delivery",
                description:
                  "Your custom apparel is carefully packaged and delivered to you.",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-8">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 bg-stone-900 text-white rounded-full">
                    <span className="font-serif font-bold text-lg">{item.step}</span>
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
