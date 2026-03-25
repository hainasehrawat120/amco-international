import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    enquiry: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your enquiry. We will get back to you soon!");
    setFormData({ name: "", phone: "", email: "", address: "", enquiry: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="relative h-[300px] overflow-hidden">
        <img 
          src="/media/banners/contact-banner.jpg"
          alt="Contact Us" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Contact Us</h1>
        </div>
      </div>

      {/* Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Get in <span className="text-orange-600">Touch</span>
            </h2>
            <p className="text-xl text-gray-600">
              We're here to help with all your lifting equipment needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              
              {/* Office */}
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="text-xl font-bold text-orange-600 mb-4">Office</h4>
                <div className="space-y-4">
                  <ContactInfo
                    icon={<MapPin className="w-5 h-5" />}
                    title="Address"
                    content={
                      <>
                        Nando Mullick Lane<br />
                        Kolkata - 700 006<br />
                        West Bengal, India
                      </>
                    }
                  />
                  <ContactInfo
                    icon={<Phone className="w-5 h-5" />}
                    title="Phone"
                    content="9830160000"
                  />
                  <ContactInfo
                    icon={<Mail className="w-5 h-5" />}
                    title="E-mail"
                    content="asianwinches@yahoo.com"
                  />
                </div>
              </div>

              {/* Factory */}
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="text-xl font-bold text-orange-600 mb-4">Factory</h4>
                <ContactInfo
                  icon={<MapPin className="w-5 h-5" />}
                  title="Location"
                  content="33 N Road, Belgachia, Howrah - 711108"
                />
              </div>

              {/* Contact Person */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-orange-600 mb-4">Contact Person</h4>
                <ContactInfo
                  icon={<Phone className="w-5 h-5" />}
                  title="S. Sharma"
                  content="9830160000"
                />
              </div>
            </div>

            {/* Enquiry Form */}
            <div>
              <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us an Enquiry</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-2 font-semibold text-gray-700">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">
                      E-mail <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block mb-2 font-semibold text-gray-700">
                      Address <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full"
                      placeholder="Enter your address"
                    />
                  </div>

                  <div>
                    <label htmlFor="enquiry" className="block mb-2 font-semibold text-gray-700">
                      Enquiry <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="enquiry"
                      name="enquiry"
                      value={formData.enquiry}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full"
                      placeholder="Tell us about your requirements"
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      type="submit" 
                      className="flex-1 bg-orange-600 hover:bg-orange-700 text-white"
                    >
                      Submit Enquiry
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => setFormData({ name: "", phone: "", email: "", address: "", enquiry: "" })}
                      className="flex-1"
                    >
                      Reset
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-gradient-to-br from-red-700 to-orange-600 text-white p-10 rounded-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-4">Business Hours</h3>
              <div className="flex justify-center items-center gap-2 text-xl">
                <Clock className="w-6 h-6" />
                <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
              </div>
              <p className="mt-2 text-lg">Closed on Sundays and Public Holidays</p>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Find Us on <span className="text-orange-600">Map</span>
            </h3>
            <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
              <iframe
                src="https://maps.google.com/maps?q=33+N+Road+Belgachia+Howrah+711108&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AMCO International Factory Location"
              ></iframe>
            </div>
            <div className="mt-4 text-center text-gray-600">
              <p className="font-semibold">33 N Road, Belgachia, Howrah - 711108, West Bengal, India</p>
              <a 
                href="https://maps.app.goo.gl/5yNJcEXhUQ2CbTqz5?g_st=aw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-2 text-orange-600 hover:text-orange-700 font-semibold underline"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactInfo({ icon, title, content }: { icon: React.ReactNode; title: string; content: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <div className="text-orange-600 flex-shrink-0 mt-1">{icon}</div>
      <div>
        <h5 className="font-bold text-gray-800 mb-1">{title}</h5>
        <div className="text-gray-700 text-sm">{content}</div>
      </div>
    </div>
  );
}