import { useState, useMemo } from "react";
import Layout from "@/components/Layout";

const galleryItems = [
  {
    id: 1,
    title: "Urban Collection",
    image: "https://images.unsplash.com/photo-1556821552-5ae0d378e68f?w=600&h=600&fit=crop",
    category: "Streetwear",
    backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2F2aafd8ea11644bbfae7442527bc86b35%2F9f1d563c829d4abea38f3b1e4af897f4)",
  },
  {
    id: 2,
    title: "Heritage Series",
    image: "https://images.unsplash.com/photo-1520006613208-a2e6692c8e5f?w=600&h=600&fit=crop",
    category: "Premium",
    backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2F2aafd8ea11644bbfae7442527bc86b35%2Ff0072f7a13914ccd986c8d51bb1f62da)",
  },
  {
    id: 3,
    title: "Classic Line",
    image: "https://images.unsplash.com/photo-1598554416243-0c5fcb4739c7?w=600&h=600&fit=crop",
    category: "Casual",
    backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2F2aafd8ea11644bbfae7442527bc86b35%2F12acc1ba6cbc40a0925107c2b5b00833)",
  },
  {
    id: 4,
    title: "Modern Edge",
    image: "https://images.unsplash.com/photo-1552062407-291826ad9c4e?w=600&h=600&fit=crop",
    category: "Contemporary",
    backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2F2aafd8ea11644bbfae7442527bc86b35%2F42d82fd00b52480cb5d71f9f7e642768)",
  },
  {
    id: 5,
    title: "Minimalist",
    image: "https://images.unsplash.com/photo-1539533057527-21b8de3f0c1d?w=600&h=600&fit=crop",
    category: "Essential",
    backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2F2aafd8ea11644bbfae7442527bc86b35%2Fc4e52014ddd54a779a91a82bfab97438)",
  },
  {
    id: 6,
    title: "Bold Statement",
    image: "https://images.unsplash.com/photo-1561821397-b1b9b4f6e3f6?w=600&h=600&fit=crop",
    category: "Designer",
    backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2F2aafd8ea11644bbfae7442527bc86b35%2F36ae893c96a046a381d99ab4c443ed06)",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = useMemo(
    () => ["All", ...new Set(galleryItems.map((item) => item.category))],
    [],
  );

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <Layout>
      <section className="bg-cream py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-stone-900 mb-4">
              Gallery
            </h1>
            <p className="text-stone-600 text-lg">
              Explore our complete collection of custom apparel
            </p>
          </div>

          {/* Filter/Category Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 text-sm uppercase tracking-wider font-light transition-colors ${
                    isActive
                      ? "bg-stone-900 text-white"
                      : "border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
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
        </div>
      </section>
    </Layout>
  );
}
