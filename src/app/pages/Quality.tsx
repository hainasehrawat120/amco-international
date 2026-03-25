import { CheckCircle, Award, Shield, Users, Target, Settings } from "lucide-react";

export function Quality() {
  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="relative h-[300px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1768796372343-99ed316eb5ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwY29udHJvbCUyMG1hbnVmYWN0dXJpbmclMjBpbnNwZWN0aW9ufGVufDF8fHx8MTc3MzU1NzUwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Quality" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Quality Assurance</h1>
        </div>
      </div>

      {/* Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Commitment to <span className="text-orange-600">Quality Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Manufacturing and supplying quality lifting equipment that confirms to international standards
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <p className="text-gray-700 text-justify text-lg mb-4">
              <span className="font-bold text-orange-600">AMCO International</span> is committed to manufacture and 
              supply Quality <span className="font-bold">Lifting Equipment</span> to our customers which confirms to 
              International Standards. We have a team of highly qualified & experienced engineers to enable our clients 
              to implement the most suitable solution as per their requirements.
            </p>
            <p className="text-gray-700 text-justify text-lg">
              For maximum functionality and value, all our products are engineered as modular base units, available 
              with add-on components that can be added to expand their role. Each product has been designed 
              with features that meet the requirements of differing regions, including international applications.
            </p>
          </div>

          {/* Quality Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <QualityFeature
              icon={<CheckCircle className="w-12 h-12" />}
              title="In-House Testing"
              description="In-house testing arrangements for Electric Winches by calibrated meters ensuring accuracy and reliability"
            />
            <QualityFeature
              icon={<Shield className="w-12 h-12" />}
              title="Quality Control"
              description="Quality control with in-house finishing equipment & supervision of our trained workers & engineers"
            />
            <QualityFeature
              icon={<Award className="w-12 h-12" />}
              title="International Standards"
              description="Products engineered to meet international standards and regional requirements"
            />
            <QualityFeature
              icon={<Users className="w-12 h-12" />}
              title="Expert Team"
              description="Highly qualified & experienced engineers dedicated to customer satisfaction"
            />
            <QualityFeature
              icon={<Target className="w-12 h-12" />}
              title="Precision Engineering"
              description="Modular design approach ensures maximum functionality and value"
            />
            <QualityFeature
              icon={<Settings className="w-12 h-12" />}
              title="Custom Solutions"
              description="Tailored specifications executed as per specific requirements"
            />
          </div>

          {/* Quality Statement */}
          <div className="bg-gradient-to-br from-red-700 to-orange-600 text-white p-10 rounded-lg mb-12">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-4">Our Quality Benchmark</h3>
              <p className="text-xl mb-6">
                Quality Products and Service that meet your application needs, are the "Cheapest" Components available. 
                <span className="block mt-2 font-bold text-yellow-300">Value is our benchmark.</span>
              </p>
            </div>
          </div>

          {/* Process Overview */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quality Assurance Process</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">Rigorous testing of all components before assembly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">In-house quality control at every production stage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">Calibrated meter testing for electric equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">Final inspection by experienced engineers</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Commitment</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">Maintain high quality standards consistently</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">Deliver as per customer requirements and timelines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">Continuous improvement and innovation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">After-sales support and service excellence</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function QualityFeature({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
      <div className="text-orange-600 flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-800 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}