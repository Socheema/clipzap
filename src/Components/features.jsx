import { Link } from "react-router-dom";
import { FaLink, FaChartLine, FaQrcode } from "react-icons/fa";


function FeaturesComponent() {

  return (
    <section
      className="w-full py-12 bg-[##000080] text-white "

    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Why ClipZap? Discover Our Features
          </h2>
          <p className="mt-4 text-[#D1D5DB] text-sm">
            Simplify your links with powerful tools designed for ease and
            impact.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[#000080]">
          {/* Feature 1: Customizable Short Links */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <FaLink className="text-4xl text-clipzap-teal" />
            </div>
            <h3 className="text-xl font-semibold text-clipzap-navy mb-2">
              Customizable Short Links
            </h3>
            <p className="text-clipzap-gray">
              Create short, memorable URLs tailored to your brand or message,
              making sharing effortless and professional.
            </p>
          </div>

          {/* Feature 2: Basic Analytics */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <FaChartLine className="text-4xl text-clipzap-teal" />
            </div>
            <h3 className="text-xl font-semibold text-clipzap-navy mb-2">
              Basic Analytics
            </h3>
            <p className="text-clipzap-gray">
              Track clicks and understand your audience with simple, insightful
              analytics, empowering smarter campaigns.
            </p>
          </div>

          {/* Feature 3: QR Code Generation */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <FaQrcode className="text-4xl text-clipzap-teal" />
            </div>
            <h3 className="text-xl font-semibold text-clipzap-navy mb-2">
              QR Code Generation
            </h3>
            <p className="text-clipzap-gray">
              Generate scannable QR codes instantly, perfect for offline sharing
              at events or in marketing materials.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-block bg-[#00B7B5] text-white px-6 py-3 rounded-lg hover:scale-105 border-none transition-all duration-300"
          >
            Shorten Your First Link Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturesComponent;
