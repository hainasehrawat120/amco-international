import { Globe, TrendingUp, Package } from "lucide-react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export function Export() {
  const exportDestinations = [
    { country: "DUBAI", region: "U.A.E", product: "Winches & Wire Rope Pulley Blocks", flag: "🇦🇪" },
    { country: "BANGLADESH", region: "South Asia", product: "Bore Pilling Winch", flag: "🇧🇩" },
    { country: "SRI LANKA", region: "South Asia", product: "Hoists / Chain Pulley Blocks", flag: "🇱🇰" },
    { country: "NEPAL", region: "South Asia", product: "Wire Rope, D Shackles, Clamps", flag: "🇳🇵" },
    { country: "BHUTAN", region: "South Asia", product: "Wire Rope, Chain", flag: "🇧🇹" },
  ];

  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="relative h-[300px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1759851335382-fb8ba2e17276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBzaGlwcGluZyUyMGNvbnRhaW5lciUyMHBvcnR8ZW58MXx8fHwxNzczNTU3NTAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Export" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Global Exports</h1>
        </div>
      </div>

      {/* Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Expanding <span className="text-orange-600">Global Presence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building our reputation in international markets with quality products and reliable service
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-700 text-justify text-lg mb-4">
                In the modern day business, one has to keep pace with global scenario where companies must be ready 
                to meet the challenges and demands of the clientele across the globe.
              </p>
              <p className="text-gray-700 text-justify text-lg">
                <span className="font-bold text-orange-600">AMCO International</span>, since its inception, has addressed 
                this situation most effectively and efficiently. We are slowly building up our reputation in quality 
                and standards, supplying products at par with international benchmarks.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-700 text-justify text-lg mb-4">
                The export market has flourished, but today's customers are no longer accepting "one-size-fits-all" 
                solutions. Increasing competition coupled with highly diverse customer groups demands customization.
              </p>
              <p className="text-gray-700 text-justify text-lg">
                To meet such varied and task-specific needs, our products are structured to fully meet the diverse 
                requirements of a global clientele.
              </p>
            </div>
          </div>

          {/* Export Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <ExportHighlight
              icon={<Globe className="w-12 h-12" />}
              title="Global Reach"
              description="Export marketing has been given special privilege for economic growth"
            />
            <ExportHighlight
              icon={<TrendingUp className="w-12 h-12" />}
              title="Growing Markets"
              description="Slowly building up our reputation in the global market with quality products"
            />
            <ExportHighlight
              icon={<Package className="w-12 h-12" />}
              title="Custom Solutions"
              description="Products structured to meet diverse and task-specific needs"
            />
          </div>

          {/* Export Destinations */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Export Destinations</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {exportDestinations.map((destination, index) => (
                <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">{destination.flag}</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-800 mb-1">{destination.country}</h4>
                      <p className="text-sm text-gray-500 mb-2">{destination.region}</p>
                      <p className="text-gray-700 font-semibold">{destination.product}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-red-700 to-orange-600 text-white p-10 rounded-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-4">Interested in Our Export Services?</h3>
              <p className="text-xl mb-6">
                Contact us to discuss how we can meet your international lifting equipment requirements
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-white text-red-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Get In Touch <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExportHighlight({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
      <div className="text-orange-600 flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}