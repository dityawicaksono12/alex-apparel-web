import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

export default function Index() {
  const featuredWork = [
    {
      id: 1,
      title: "Signature Collection",
      image: "https://images.unsplash.com/photo-1556821552-5ae0d378e68f?w=600&h=600&fit=crop",
      category: "Streetwear",
      backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2F2aafd8ea11644bbfae7442527bc86b35%2F2c09d1d7eb61448d926d11d6fc86fb88)",
    },
    {
      id: 2,
      title: "Heritage Series",
      image: "https://images.unsplash.com/photo-1520006613208-a2e6692c8e5f?w=600&h=600&fit=crop",
      category: "Premium",
      backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2F2aafd8ea11644bbfae7442527bc86b35%2Fc4e52014ddd54a779a91a82bfab97438)",
    },
    {
      id: 3,
      title: "Urban Design",
      image: "https://images.unsplash.com/photo-1598554416243-0c5fcb4739c7?w=600&h=600&fit=crop",
      category: "Casual",
      backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2F2aafd8ea11644bbfae7442527bc86b35%2F36ae893c96a046a381d99ab4c443ed06)",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-white py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F2aafd8ea11644bbfae7442527bc86b35%2F8392ad4388ab46c3a81310f811cfbb52?format=webp&width=800"
              alt="ALX Custom Apparel"
              className="max-w-sm mx-auto mb-4 h-auto"
            />
          </div>

          <p className="text-base md:text-lg text-stone-700 max-w-2xl mx-auto mb-12 leading-relaxed">
            Discover bespoke apparel crafted with meticulous attention to detail.
            From concept to creation, we bring your vision to life with premium
            materials and expert craftsmanship.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/gallery"
              className="px-8 py-3 bg-stone-900 text-white uppercase text-sm tracking-wider hover:bg-stone-800 transition-colors font-light"
            >
              View Gallery
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border-2 border-stone-900 text-stone-900 uppercase text-sm tracking-wider hover:bg-stone-900 hover:text-white transition-colors font-light"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">
              Featured Work
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Explore our latest custom creations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredWork.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative overflow-hidden bg-stone-200 mb-4 aspect-square">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div
                    className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-300"
                    style={{
                      backgroundImage: item.backgroundImage,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  />
                </div>
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm uppercase tracking-wider text-stone-600">
                  {item.category}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-block text-stone-900 uppercase text-sm tracking-wider font-light hover:text-stone-600 transition-colors border-b border-stone-900 hover:border-stone-600 pb-2"
            >
              View All →
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
                Our Story
              </h2>
              <p className="text-stone-700 text-lg leading-relaxed mb-6">
                ALX Custom Apparel was born from a passion for quality
                craftsmanship and contemporary design. We believe in creating
                pieces that transcend trends, combining timeless style with
                modern sensibilities.
              </p>
              <p className="text-stone-600 text-lg leading-relaxed mb-8">
                Every garment is meticulously crafted to meet the highest
                standards of quality and aesthetics.
              </p>
              <Link
                to="/about"
                className="inline-block text-stone-900 uppercase text-sm tracking-wider font-light hover:text-stone-600 transition-colors border-b border-stone-900 hover:border-stone-600 pb-2"
              >
                Learn More →
              </Link>
            </div>
            <div className="bg-stone-200 aspect-square rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop"
                alt="Craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-stone-900 text-white py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Create?
          </h2>
          <p className="text-lg text-stone-300 mb-12 max-w-2xl mx-auto">
            Let's collaborate on your next custom apparel project. Get in touch
            to discuss your vision.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-white text-stone-900 uppercase text-sm tracking-wider hover:bg-stone-100 transition-colors font-light"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </Layout>
  );
}
