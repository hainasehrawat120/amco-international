import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export function Products() {
  const products = [
    {
      category: "Winches",
      items: [
        "Electric Winches",
        "Hand Winches",
        "Wire Rope Winches",
        "Belt Changing Winches (Manual/Electrical)",
      ],
      image: "/media/WhatsApp Image 2026-03-18 at 22.04.22.jpeg",
    },
    {
      category: "Double Drum Electric Winch",
      items: [
        "Heavy Duty Operation",
        "Variable Speed Control",
        "High Capacity Drums",
        "Fail-Safe Braking",
        "Custom Winch Solutions",
      ],
      image: "/media/WhatsApp Image 2026-03-18 at 22.04.21 (1).jpeg",
    },
    {
      category: "EOT Cranes",
      items: [
        "EOT Cranes (Electric Overhead Travelling)",
        "HOT Cranes (Hand Operated Travelling)",
        "Gantry Cranes",
        "Pillar & JIB Cranes",
      ],
      image: "/media/WhatsApp Image 2026-03-18 at 22.04.23 (1).jpeg",
    },
    {
      category: "Hoists",
      items: [
        "Electric Hoists",
        "Wire Rope Hoists",
        "Chain Hoists",
        "Manual Hoists",
      ],
      image: "/media/WhatsApp Image 2026-03-18 at 22.04.22 (2).jpeg",
    },
    {
      category: "Builder's Hoist",
      items: [
        "Material Lifting",
        "Construction Applications",
        "Custom Heights and Capacities",
      ],
      image: "/media/WhatsApp Image 2026-03-18 at 22.04.23.jpeg",
    }
  ];

  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="relative h-[300px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1767281075989-7571356d477e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwcHJvZHVjdGlvbiUyMGxpbmUlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzczNTU3NTAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Products" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Our Products</h1>
        </div>
      </div>

      {/* Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Complete Range of <span className="text-orange-600">Lifting Solutions</span>
            </h2>
            <p className="text-xl text-gray-600">
              High-quality equipment for various industrial applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {products.map((product, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <ImageWithFallback 
                    src={product.image} 
                    alt={product.category}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-orange-600">{product.category}</h3>
                  <ul className="space-y-2">
                    {product.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-orange-500 mr-2 mt-1">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Solutions */}
          <div className="bg-gradient-to-br from-red-700 to-orange-600 text-white p-10 rounded-lg mb-12">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-4">Custom Solutions Available</h3>
              <p className="text-lg mb-6">
                We undertake fabrication jobs and tailor-made specifications. Execute them as per requirement 
                under supervision of our fully trained engineers.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-white text-red-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Request Custom Solution <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
              <h4 className="font-bold text-xl text-gray-800 mb-2">Pioneer Manufacturer</h4>
              <p className="text-gray-600">300 Tonnes S.W.L. Wire Rope Pulley Blocks in India</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
              <h4 className="font-bold text-xl text-gray-800 mb-2">Quality Assured</h4>
              <p className="text-gray-600">All products meet international standards</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
              <h4 className="font-bold text-xl text-gray-800 mb-2">Expert Support</h4>
              <p className="text-gray-600">Supervised by fully trained engineers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}