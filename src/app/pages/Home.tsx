import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Globe, Award, CheckCircle, TrendingUp, ArrowRight, Play } from "lucide-react";
import { Link } from "react-router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const loadTestingVideos = [
  { type: 'video', src: '/media/WhatsApp Video 2026-03-18 at 22.49.11.mp4' },
  { type: 'video', src: '/media/WhatsApp Video 2026-03-18 at 22.55.17.mp4' },
  { type: 'video', src: '/media/WhatsApp Video 2026-03-18 at 22.56.03.mp4' },
];

const winchPhotos = [
  '/media/WhatsApp Image 2026-03-18 at 22.04.02.jpeg',
  '/media/WhatsApp Image 2026-03-18 at 22.04.03 (1).jpeg',
  '/media/WhatsApp Image 2026-03-18 at 22.04.03.jpeg',
  '/media/WhatsApp Image 2026-03-18 at 22.04.21 (1).jpeg',
  '/media/WhatsApp Image 2026-03-18 at 22.04.21 (2).jpeg',
  '/media/WhatsApp Image 2026-03-18 at 22.04.21.jpeg',
  '/media/WhatsApp Image 2026-03-18 at 22.04.22 (1).jpeg',
];

const inUseMedia = [
  { type: 'image', src: '/media/WhatsApp Image 2026-03-18 at 22.04.22 (2).jpeg' },
  { type: 'image', src: '/media/WhatsApp Image 2026-03-18 at 22.04.22.jpeg' },
  { type: 'image', src: '/media/WhatsApp Image 2026-03-18 at 22.04.23 (1).jpeg' },
  { type: 'image', src: '/media/WhatsApp Image 2026-03-18 at 22.04.23.jpeg' },
  { type: 'image', src: '/media/WhatsApp Image 2026-03-18 at 22.04.24.jpeg' },
  { type: 'image', src: '/media/WhatsApp Image 2026-03-18 at 22.44.11.jpeg' },
  { type: 'image', src: '/media/WhatsApp Image 2026-03-18 at 22.47.41.jpeg' },
  { type: 'video', src: '/media/WhatsApp Video 2026-03-18 at 22.56.17.mp4' },
  { type: 'video', src: '/media/WhatsApp Video 2026-03-18 at 22.57.14.mp4' },
  { type: 'video', src: '/media/WhatsApp Video 2026-03-18 at 23.01.29.mp4' },
];

export function Home() {

  const gallerySettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div className="relative h-[500px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1759390304567-c322de52f8bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY3JhbmUlMjBmYWN0b3J5JTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3NzM1NTc0OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Industrial Equipment" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Quality Lifting Solutions
            </h2>
            <p className="text-xl md:text-2xl mb-6">
              Trusted since 2004 | Brand "ASIAN"
            </p>
            <Link 
              to="/products" 
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Products <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Welcome to <span className="text-orange-600">AMCO INTERNATIONAL</span>
              </h2>
              <div className="space-y-4 text-gray-700 text-justify">
                <p>
                  <span className="font-bold text-orange-600">AMCO International</span> is one of the pioneers in eastern 
                  India in manufacturing Electric Winches. Our Brand <span className="font-bold text-orange-600">"ASIAN"</span> is the trusted 
                  name in quality & workmanship since 1951.
                </p>
                <p>
                  We are an industry-leading group of lifting businesses that offers a complete range of advanced lifting 
                  solutions to many different industries worldwide.
                </p>
                <p className="font-semibold text-gray-800">
                  When you choose AMCO, you acquire a unique resource of global experience and knowledge combined with 
                  local know-how to empower your lifting solutions.
                </p>
              </div>
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 mt-6 text-orange-600 hover:text-orange-700 font-semibold"
              >
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FeatureCard
                icon={<Award className="w-8 h-8" />}
                title="20+ Years"
                description="Of Excellence"
              />
              <FeatureCard
                icon={<CheckCircle className="w-8 h-8" />}
                title="Quality"
                description="Certified Products"
              />
              <FeatureCard
                icon={<Globe className="w-8 h-8" />}
                title="Global"
                description="Export Markets"
              />
              <FeatureCard
                icon={<TrendingUp className="w-8 h-8" />}
                title="Industry"
                description="Leaders"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Product Range */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Product Range
            </h2>
            <p className="text-gray-600 text-lg">
              Complete range of advanced lifting solutions for various industries
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <ProductCard
              title="Electric Winches"
              image="/media/WhatsApp Image 2026-03-18 at 22.04.22.jpeg"
            />
            <ProductCard
              title="Double Drum Electric Winch"
              image="/media/WhatsApp Image 2026-03-18 at 22.04.21 (1).jpeg"
            />
            <ProductCard
              title="EOT Cranes"
              image="/media/WhatsApp Image 2026-03-18 at 22.04.23 (1).jpeg"
            />
            <ProductCard
              title="Wire Rope Hoists"
              image="/media/WhatsApp Image 2026-03-18 at 22.04.22 (2).jpeg"
            />
            <ProductCard
              title="Builder's Hoist"
              image="/media/WhatsApp Image 2026-03-18 at 22.44.11.jpeg"
            />
          </div>

          <div className="text-center mt-8">
            <Link 
              to="/products" 
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Products <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Export Section */}
      <div className="py-16 bg-gradient-to-br from-red-700 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Global Export Services
              </h2>
              <div className="space-y-4">
                <p className="text-lg">
                  Since the inception of the company, we have addressed the global market most effectively and efficiently. 
                  We are building up our reputation in the international market.
                </p>
                <p className="text-lg">
                  <span className="font-bold">Export Marketing</span> has been given special privilege for economic growth.
                </p>
                <Link 
                  to="/export" 
                  className="inline-flex items-center gap-2 bg-white text-red-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors mt-4"
                >
                  Learn More <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Export Destinations</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 p-4 rounded-lg">
                  <p className="font-bold">Dubai, UAE</p>
                  <p className="text-sm">Middle East</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <p className="font-bold">Bangladesh</p>
                  <p className="text-sm">South Asia</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <p className="font-bold">Sri Lanka</p>
                  <p className="text-sm">South Asia</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <p className="font-bold">Nepal</p>
                  <p className="text-sm">South Asia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Load Testing Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Load Testing of <span className="text-orange-600">Winches</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Every winch undergoes rigorous load testing to ensure maximum safety and reliability
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {loadTestingVideos.map((video, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg bg-black flex flex-col">
                <video src={video.src} controls className="w-full h-64 object-contain" />
                <div className="bg-gray-50 p-4">
                  <p className="text-center font-semibold text-gray-800">Load Testing & Quality Checks</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
              <p className="text-gray-700 font-semibold">Load Tested</p>
              <p className="text-sm text-gray-600 mt-2">Every unit tested before delivery</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">ISO</div>
              <p className="text-gray-700 font-semibold">Certified Process</p>
              <p className="text-sm text-gray-600 mt-2">International quality standards</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">20+</div>
              <p className="text-gray-700 font-semibold">Years Experience</p>
              <p className="text-sm text-gray-600 mt-2">Trusted by industries nationwide</p>
            </div>
          </div>
        </div>
      </div>

      {/* ASIAN Winches Photo Gallery */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              ASIAN <span className="text-orange-600">Electric Winches</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Browse our range of high-quality electric winches
            </p>
          </div>

          <div className="mb-8">
            <Slider {...gallerySettings} className="load-testing-gallery">
              {winchPhotos.map((src, index) => (
                <div key={index} className="px-2">
                  <div className="rounded-lg overflow-hidden shadow-lg h-80">
                    <img src={src} alt={`ASIAN Electric Winch ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* ASIAN Winches in Use Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              ASIAN Electric Winches <span className="text-orange-600">In Action</span>
            </h2>
            <p className="text-gray-600 text-lg">
              See our equipment being used across various industries and construction sites
            </p>
          </div>

          <div className="mb-8">
            <Slider {...gallerySettings} className="load-testing-gallery">
              {inUseMedia.map((media, index) => (
                <div key={index} className="px-2">
                  <div className="rounded-lg overflow-hidden shadow-lg bg-black flex flex-col justify-between h-full group">
                    <div className="relative h-64 overflow-hidden">
                      {media.type === 'image' ? (
                        <img 
                          src={media.src} 
                          alt={`Equipment in action ${index + 1}`} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <video 
                          src={media.src} 
                          controls 
                          className="w-full h-full object-cover block" 
                        />
                      )}
                    </div>
                    <div className="p-5 bg-white flex-1">
                      <p className="text-gray-600 text-sm">Real-world applications of ASIAN equipment</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="mt-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center bg-white p-6 rounded-lg shadow border border-gray-200">
              See Our Equipment in Action
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-black rounded-lg overflow-hidden shadow-lg h-80 relative flex flex-col">
                <video src="/media/WhatsApp Video 2026-03-18 at 22.49.11.mp4" controls className="w-full h-4/5 object-contain" />
                <div className="bg-white p-4 flex-1 flex flex-col justify-center">
                  <p className="text-sm font-semibold text-gray-800 text-center">Builder's Hoist used for material lifting during construction of Buildings</p>
                </div>
              </div>
              <div className="bg-black rounded-lg overflow-hidden shadow-lg h-80 relative flex flex-col">
                <video src="/media/WhatsApp Video 2026-03-18 at 22.55.17.mp4" controls className="w-full h-4/5 object-contain" />
                <div className="bg-white p-4 flex-1 flex flex-col justify-center">
                  <p className="text-sm font-semibold text-gray-800 text-center">Quality checking</p>
                </div>
              </div>
              <div className="bg-black rounded-lg overflow-hidden shadow-lg h-80 relative flex flex-col">
                <video src="/media/WhatsApp Video 2026-03-18 at 22.56.03.mp4" controls className="w-full h-4/5 object-contain" />
                <div className="bg-white p-4 flex-1 flex flex-col justify-center">
                  <p className="text-sm font-semibold text-gray-800 text-center">7.5 Ton load being lifted by "ASIAN" Electric Winch</p>
                </div>
              </div>
            </div>
            <div className="mt-10 text-center flex justify-center gap-4">
              <Link to="/gallery" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                <Play className="w-5 h-5" />
                View Full Video Gallery
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Lifting Equipment Solutions?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today for custom solutions tailored to your specific requirements
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Get In Touch <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ title, image }: { title: string; image: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
      <div className="h-48 overflow-hidden">
        <ImageWithFallback 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4 bg-gray-50">
        <h4 className="font-bold text-center text-gray-800">{title}</h4>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
      <div className="text-orange-600 flex justify-center mb-3">{icon}</div>
      <h3 className="font-bold text-xl text-gray-800 mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}