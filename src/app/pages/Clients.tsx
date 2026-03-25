import { Building2, Factory, Train, Zap } from "lucide-react";

export function Clients() {
  const majorClients = [
    { name: "NTPC", sector: "Power", logo: "/media/logos/ntpc.png" },
    { name: "BHEL", sector: "Engineering", logo: "/media/logos/bhel.png" },
    { name: "L&T", sector: "Construction", logo: "/media/logos/lt.png" },
    { name: "HINDALCO", sector: "Manufacturing", logo: "/media/logos/hindalco.png" },
    { name: "ONGC", sector: "Oil & Gas", logo: "/media/logos/ongc.png" },
    { name: "TELCO", sector: "Automotive", logo: "/media/logos/tata.png" },
  ];

  const steelPlants = [
    { name: "BOKARO STEEL PLANT", logo: "/media/logos/sail.png" },
    { name: "BHILAI STEEL PLANT", logo: "/media/logos/sail.png" },
    { name: "DURGAPUR STEEL PLANT", logo: "/media/logos/sail.png" },
    { name: "VISHAKHAPATNAM STEEL PLANT", logo: "/media/logos/sail.png" },
    { name: "TATA IRON & STEEL CO", logo: "/media/logos/tata.png" },
    { name: "TAYO ROLLS LTD", logo: "/media/logos/tata.png" },
  ];

  const railways = [
    { name: "INDIAN RAILWAYS", logo: "/media/logos/indian_railways.png" },
    { name: "SOUTH EASTERN RAILWAYS", logo: "/media/logos/indian_railways.png" },
  ];

  const others = [
    { name: "BANGALORE POWER", logo: "" },
    { name: "HINDUSTAN STEEL WORKS CONSTRUCTION LTD.", logo: "" },
  ];

  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="relative h-[300px] overflow-hidden">
        <img 
          src="/media/banners/clients-banner.jpg"
          alt="Our Clients" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Our Clients</h1>
        </div>
      </div>

      {/* Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Trusted by <span className="text-orange-600">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are proud to serve some of the most prestigious organizations in India and abroad. Our commitment 
              to quality and reliability has earned us the trust of leading companies across various industries.
            </p>
          </div>

          {/* Major Clients */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Major Clients</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {majorClients.map((client, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"
                >
                  <div className="h-16 flex items-center justify-center mb-3">
                    <img src={client.logo} alt={client.name} className="max-h-full max-w-full object-contain" />
                  </div>
                  <h4 className="font-bold text-lg text-gray-800 mb-1">{client.name}</h4>
                  <p className="text-sm text-gray-600">{client.sector}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Steel Plants */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Steel Industry</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {steelPlants.map((plant, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-16 flex-shrink-0 flex items-center justify-center">
                      <img src={plant.logo} alt={plant.name} className="max-h-full max-w-full object-contain" />
                    </div>
                    <h4 className="font-bold text-gray-800">{plant.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Railways */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Railways</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {railways.map((railway, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-16 flex-shrink-0 flex items-center justify-center">
                      <img src={railway.logo} alt={railway.name} className="max-h-full max-w-full object-contain" />
                    </div>
                    <h4 className="font-bold text-gray-800">{railway.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Clients */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Power & Construction</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {others.map((client, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-orange-600">
                      <Building2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-gray-800">{client.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industries Served */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <IndustryCard 
              title="Steel Industry"
              description="Major steel plants across India"
              icon={<Factory className="w-10 h-10" />}
            />
            <IndustryCard 
              title="Power Sector"
              description="Leading power generation companies"
              icon={<Zap className="w-10 h-10" />}
            />
            <IndustryCard 
              title="Railways"
              description="Indian Railways and regional zones"
              icon={<Train className="w-10 h-10" />}
            />
            <IndustryCard 
              title="Construction"
              description="Infrastructure and construction giants"
              icon={<Building2 className="w-10 h-10" />}
            />
          </div>

          {/* Testimonial Section */}
          <div className="bg-gradient-to-br from-red-700 to-orange-600 text-white p-10 rounded-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-4">20+ Years of Trust</h3>
              <p className="text-xl">
                Since 2004, we have been the preferred choice for quality lifting equipment solutions across diverse industries, 
                earning the trust and loyalty of India's leading companies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IndustryCard({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
      <div className="text-orange-600 flex justify-center mb-3">{icon}</div>
      <h3 className="font-bold text-lg text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}