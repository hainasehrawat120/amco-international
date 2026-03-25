import { Award, Users, TrendingUp, Shield } from "lucide-react";

export function About() {


  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="relative h-[300px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1769695832202-0f10d9d21f27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMHBsYW50JTIwaW5kdXN0cmlhbCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzM1NTc1MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="About Us" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">About Us</h1>
        </div>
      </div>

      {/* Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
              Brand <span className="text-orange-600">"ASIAN"</span>
            </h2>
            <p className="text-center text-xl text-gray-600 mb-8">
              A Trusted Name in Quality & Workmanship Since 2004
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <ValueCard
              icon={<Award className="w-10 h-10" />}
              title="20+ Years"
              description="Industry Experience"
            />
            <ValueCard
              icon={<Users className="w-10 h-10" />}
              title="Expert Team"
              description="Trained Engineers"
            />
            <ValueCard
              icon={<TrendingUp className="w-10 h-10" />}
              title="Innovation"
              description="Continuous Development"
            />
            <ValueCard
              icon={<Shield className="w-10 h-10" />}
              title="Quality"
              description="Certified Products"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <p className="text-gray-700 text-justify mb-4">
                <span className="font-bold text-orange-600">AMCO International</span> is one of the pioneers in eastern 
                India in manufacturing Electric Winches. We have been dedicated to improving the efficiency and performance 
                of businesses in all types of industries and we have done this by continuously providing products and 
                services people can trust.
              </p>
              <p className="text-gray-700 text-justify">
                When you choose AMCO, you acquire a unique resource of global experience and knowledge combined with 
                local know-how to empower your lifting solutions and increase your productivity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Legacy</h3>
                <p className="text-gray-700 text-justify">
                  An industry-leading group of lifting businesses that offers a complete range of advanced lifting 
                  solutions to many different industries both in India and overseas. Regardless of your lifting needs, 
                  <span className="text-orange-600 font-bold"> AMCO International</span> is committed to providing you 
                  with lifting equipment and services that increase the value and effectiveness of your business.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Expertise</h3>
                <p className="text-gray-700 text-justify">
                  We are the pioneers in manufacturing of 300 Tonnes S.W.L. Wire Rope Pulley Blocks in India. We undertake 
                  fabrication jobs and tailor-made specifications, executing them as per requirement under supervision of 
                  our fully trained engineers.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-700 to-orange-600 text-white p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold mb-4">Our Product Range</h3>
              <p className="mb-4">Our comprehensive range of products includes:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">▸</span>
                  <span>Electric / Hand Winches</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">▸</span>
                  <span>EOT, HOT, Gantry, Pillar, JIB Cranes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">▸</span>
                  <span>Conveyor Belt Changing Winches (Manual / Electrical)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">▸</span>
                  <span>Electric Hoists / Chain Pulley Blocks</span>
                </li>
              </ul>
              <p className="mt-4 text-sm">
                Supplied to leading reputed giants of Construction, Power Plants, Steel Plants, Railways, and more.
              </p>
            </div>

            <div className="bg-gray-800 text-white p-8 rounded-lg">
              <p className="text-xl font-bold text-center">
                Authorised Selling Agents of ROBIN HOOD WIRE ROPES – ENGLAND prior to Independence
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
      <div className="text-orange-600 flex justify-center mb-3">{icon}</div>
      <h3 className="font-bold text-xl text-gray-800 mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}