import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const offices = [
    {
      city: 'New York',
      address: '123 Park Avenue, Suite 4500',
      state: 'New York, NY 10017',
      country: 'United States',
      phone: '+1 (212) 555-0100',
    },
    {
      city: 'London',
      address: '50 Liverpool Street',
      state: 'London EC2M 7PY',
      country: 'United Kingdom',
      phone: '+44 20 7946 0958',
    },
    {
      city: 'Singapore',
      address: '1 Raffles Place',
      state: 'Singapore 048616',
      country: 'Singapore',
      phone: '+65 6591 5000',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We welcome inquiries from potential partners, investors, and talented individuals
            interested in joining our mission. Reach out to learn more about Vritan Group.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Send us a message
              </h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                  >
                    <option>General Inquiry</option>
                    <option>Partnership Opportunity</option>
                    <option>Investment Inquiry</option>
                    <option>Career Question</option>
                    <option>Media Request</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                General Contact
              </h2>
              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:info@vritan.com" className="text-gray-600 hover:text-amber-600 transition-colors">
                      info@vritan.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+12125550100" className="text-gray-600 hover:text-amber-600 transition-colors">
                      +1 (212) 555-0100
                    </a>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Office Locations
              </h3>
              <div className="space-y-6">
                {offices.map((office) => (
                  <div key={office.city} className="p-6 bg-white rounded-xl border border-gray-200">
                    <div className="flex items-start space-x-3 mb-3">
                      <MapPin className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">{office.city}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {office.address}<br />
                          {office.state}<br />
                          {office.country}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 ml-8">
                      {office.phone}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Media Inquiries
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            For press and media questions, please contact our communications team:
          </p>
          <a
            href="mailto:media@vritan.com"
            className="text-lg text-amber-600 hover:text-amber-700 font-medium"
          >
            media@vritan.com
          </a>
        </div>
      </section>
    </div>
  );
}
