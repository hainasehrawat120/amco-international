

export function Gallery() {
  const images = [
    '/media/WhatsApp Image 2026-03-18 at 22.04.02.jpeg',
    '/media/WhatsApp Image 2026-03-18 at 22.04.03 (1).jpeg',
    '/media/WhatsApp Image 2026-03-18 at 22.04.03.jpeg',
    '/media/WhatsApp Image 2026-03-18 at 22.04.21 (1).jpeg',
    '/media/WhatsApp Image 2026-03-18 at 22.04.21 (2).jpeg',
    '/media/WhatsApp Image 2026-03-18 at 22.04.21.jpeg',
    '/media/WhatsApp Image 2026-03-18 at 22.04.22 (1).jpeg',
    '/media/WhatsApp Image 2026-03-18 at 22.04.22 (2).jpeg',
    '/media/WhatsApp Image 2026-03-18 at 22.04.22.jpeg',
    '/media/WhatsApp Image 2026-03-18 at 22.04.23 (1).jpeg',
    '/media/WhatsApp Image 2026-03-18 at 22.04.23.jpeg',
    '/media/WhatsApp Image 2026-03-18 at 22.04.24.jpeg',
    '/media/WhatsApp Image 2026-03-18 at 22.44.11.jpeg',
    '/media/WhatsApp Image 2026-03-18 at 22.47.41.jpeg',
  ];

  const videos = [
    '/media/WhatsApp Video 2026-03-18 at 22.49.11.mp4',
    '/media/WhatsApp Video 2026-03-18 at 22.55.17.mp4',
    '/media/WhatsApp Video 2026-03-18 at 22.56.03.mp4',
    '/media/WhatsApp Video 2026-03-18 at 22.56.17.mp4',
    '/media/WhatsApp Video 2026-03-18 at 22.57.14.mp4',
    '/media/WhatsApp Video 2026-03-18 at 23.01.29.mp4',
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our <span className="text-orange-600">Gallery</span></h1>
          <p className="text-xl text-gray-600">Photos and Videos of ASIAN Equipment in action</p>
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-4">Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {videos.map((src, idx) => (
            <div key={idx} className="bg-black rounded-lg overflow-hidden shadow-lg h-64">
              <video src={src} controls className="w-full h-full object-contain" />
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-4">Images</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, idx) => (
            <div key={idx} className="bg-gray-100 rounded-lg overflow-hidden shadow-md h-64">
              <img src={src} alt={`Gallery Image ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
