import React, { useState, useEffect } from 'react';
import { Menu, Phone, MessageCircle, Award, Check, ChevronDown, Clock, Shield, ThumbsUp, MapPin, Droplet, Flame, Biohazard, Wind } from 'lucide-react';
import heroImage from './assets/herotest2.jpg';
import backgroundImage from './assets/our-franchise-4.jpg'; // Importa l'immagine di background
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logo = import('./assets/911_restoration_logo_transparent.png');

const TextSlideshow = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [texts]);

  return (
    <div className="h-16 flex items-center justify-center bg-gradient-to-r from-blue-100 to-orange-100 text-blue-800 font-bold text-center px-4">
      {texts[currentIndex]}
    </div>
  );
};

const services = [
  { name: 'Water Damage', icon: <Droplet size={24} className="text-blue-500 mr-2" /> },
  { name: 'Fire & Smoke', icon: <Flame size={24} className="text-red-500 mr-2" /> },
  { name: 'Mold Removal', icon: <Biohazard size={24} className="text-green-500 mr-2" /> },
  { name: 'Disaster Restoration', icon: <Wind size={24} className="text-yellow-500 mr-2" /> }
];

const ServiceSlideshow = () => {
  const settings = {
    dots: false,
    arrows: false, // Rimuove le frecce
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true, // Centra gli elementi
    centerPadding: '0', // Rimuove i padding laterali
  };

  return (
    <Slider {...settings} className="w-full">
      {services.map((service, index) => (
        <div key={index} className="flex items-center justify-center text-white">
          <div className="flex items-center justify-center">
            {service.icon}
            <span className="ml-2 font-bold">{service.name}</span>
          </div>
        </div>
      ))}
    </Slider>
  );
};


const ReviewSlideshow = () => {
  const reviews = [
    {
      text: '911 restoration went above and beyond to make sure our water damage was handled correctly and fixed everything! They really took care of us and the house looks amazing and is problem free. They are professional and did great work!! Ask for Gena and John!!',
      name: 'Allyson Greenstein',
      link: 'https://maps.app.goo.gl/DWvpKpzaWmvqq2ALA'
    },
    {
      text: 'We used 911 Restoration for mold remediation in our kitchen and basement. They were very reasonable with their pricing, which we appreciated because the extent of the problem and expense was a shock to us. They started work quickly and did a thorough job. They were also very easy to contact, which I always appreciate in a contractor. Our mold assessor seemed impressed by the job they did when he came back after the remediation. We are very glad we went with 911 Restoration and highly recommend them!',
      name: 'Alietta Gordon',
      link: 'https://maps.app.goo.gl/CUk14amaStG6oiTN7'
    },
    {
      text: 'Adrian and his crew were wonderful. They fixed the water damaged ceiling, put up new molding and cleaned the room before they left. Even when the old boards in the ceiling shifted making a small crack they returned and repaired it quickly. I would not hesitate to call them in again.',
      name: 'Karen Conniff',
      link: 'https://maps.app.goo.gl/9pPJS7aDipvreKX19'
    },
    {
      text: 'I had a “911” emergency at my home and when I posted about my situation, Rod was the first to answer my call. He walked me through it and explained every step, he was at my doorstep within a couple of hours. I highly appreciate Rod’s services and expertise and will definitely reach out to him in the future when disaster strikes. Highly recommend!',
      name: 'Dasha Luchi',
      link: 'https://maps.app.goo.gl/uvV2eXgNeUBsnSRQ8'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings}>
      {reviews.map((review, index) => (
        <div key={index} className="p-6 text-center">
          <a href={review.link} target="_blank" rel="noopener noreferrer" className="block">
            <p className="text-blue-700 italic">"{review.text}"</p>
            <p className="font-bold mt-2 text-orange-500">{review.name}</p>
          </a>
        </div>
      ))}
    </Slider>
  );
};

const MobileMockup = () => {
  const slideshowTexts = [
    "24/7 Emergency Response",
    "Licensed & Insured Professionals",
    "We Work with All Insurance Companies",
    "100% Customer Satisfaction Guaranteed"
  ];

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen relative">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-2 px-4 fixed w-full top-0 left-0 z-50 flex items-center justify-between">
  <img 
    src={logo} 
    alt="911 Restoration Logo" 
    className="h-16 w-auto object-contain"
  />
  <div className="w-2/3 mx-auto flex justify-center items-center">
    <ServiceSlideshow />
  </div>
  <div className="flex flex-col items-center p-2">
    <Menu size={32} /> {/* Aumenta la dimensione dell'icona */}
    <span className="text-sm mt-1">Menu</span> {/* Aumenta la dimensione del testo */}
  </div>
</header>





      {/* Main Content */}
      <main className="pt-20 pb-20 overflow-y-auto">
        {/* Hero Section */}
        <section 
          className="bg-cover bg-center text-white p-6 text-center relative overflow-hidden h-[60vh] min-h-[450px]"
          style={{
            backgroundImage: `url(${heroImage})`,
            fontFamily: '"Roboto", sans-serif', 
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 flex flex-col justify-center items-center h-full">
            <h1 className="text-4xl font-extrabold mb-4 leading-tight text-shadow">
              Emergency Restoration Services
            </h1>
            <p className="text-2xl mb-6 font-semibold text-shadow">
              Water, Fire, Mold Damage?<br />We're Here to Help!
            </p>
            <a 
              href="tel:866-349-1707" 
              className="bg-orange-500 text-white py-3 px-8 rounded-full text-xl font-bold inline-block shadow-lg hover:bg-orange-600 transition duration-300 transform hover:scale-105"
            >
              Call Now: 866-349-1707
            </a>
          </div>
        </section>

        {/* Text Slideshow */}
        <TextSlideshow texts={slideshowTexts} />

        {/* Services Section */}
        <section className="p-6 bg-gradient-to-r from-orange-200 via-orange-300 to-orange-400">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Our Services</h2>
          <ul className="space-y-4">
            {[
              { name: 'Water Damage', icon: <Droplet size={24} className="text-blue-500 mr-2" /> },
              { name: 'Fire & Smoke', icon: <Flame size={24} className="text-red-500 mr-2" /> },
              { name: 'Mold Removal', icon: <Biohazard size={24} className="text-green-500 mr-2" /> },
              { name: 'Disaster Restoration', icon: <Wind size={24} className="text-yellow-500 mr-2" /> }
            ].map((service) => (
              <li key={service.name} className="flex items-center bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg shadow-md transition duration-300 hover:shadow-lg hover:from-orange-50 hover:to-orange-100">
                {service.icon}
                <span className="text-blue-700 font-bold">{service.name}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Why Choose Us */}
        <section className="p-6 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Why Choose Us?</h2>
          <ul className="space-y-4">
            <li className="flex items-center bg-white p-3 rounded-lg shadow-md">
              <Clock className="text-orange-500 mr-2" size={20} />
              <span className="text-blue-700">24/7 Emergency Response</span>
            </li>
            <li className="flex items-center bg-white p-3 rounded-lg shadow-md">
              <Shield className="text-orange-500 mr-2" size={20} />
              <span className="text-blue-700">Licensed & Insured Professionals</span>
            </li>
            <li className="flex items-center bg-white p-3 rounded-lg shadow-md">
              <ThumbsUp className="text-orange-500 mr-2" size={20} />
              <span className="text-blue-700">We Work with All Insurance Companies</span>
            </li>
          </ul>
        </section>

        {/* Process Section */}
        <section className="p-6 bg-white">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Our Process</h2>
          <ol className="space-y-4">
            {['Emergency Contact', 'Inspection and Assessment', 'Water Removal/Extraction', 'Drying and Dehumidification', 'Cleaning and Sanitizing', 'Restoration'].map((step, index) => (
              <li key={step} className="flex items-center bg-gradient-to-r from-orange-50 to-orange-100 p-3 rounded-lg shadow-md">
                <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">{index + 1}</span>
                <span className="text-blue-700">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Testimonial */}
        <section className="p-6 italic text-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 shadow-inner">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Testimonials</h2>
          <ReviewSlideshow />
        </section>

        {/* FAQ Section */}
        <section className="p-6 bg-white">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Frequently Asked Questions</h2>
          <ul className="space-y-4">
            {[
              "How quickly can you respond to an emergency?",
              "Do you work with insurance companies?",
              "What areas do you serve?",
              "Are your technicians certified?"
            ].map((question, index) => (
              <li key={index} className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg shadow-md">
                <h3 className="font-bold mb-2 text-blue-700">{question}</h3>
                <p className="text-blue-600">Click to see the answer.</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact Section */}
        <section className="p-6 bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Contact Us</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="flex items-center mb-2 text-blue-700"><Phone className="text-orange-500 mr-2" size={20} /> 866-349-1707</p>
            <p className="flex items-center text-blue-700"><MapPin className="text-orange-500 mr-2" size={20} /> Serving locations nationwide</p>
          </div>
        </section>
      </main>

      {/* Footer CTA */}
      <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 fixed bottom-0 left-0 w-full z-50 flex justify-between items-center">
        {/* Lato sinistro - Call Us 24/7 */}
        <a href="tel:866-349-1707" className="flex items-center">
          <div className="bg-orange-500 rounded-full p-2 mr-2 animate-pulse">
            <Phone className="text-white" size={24} />
          </div>
          <div>
            <div className="font-bold text-s">Call Us 24/7</div>
            <div className="text-sm">Instant Reply</div>
          </div>
        </a>

        {/* Lato destro - Chatbot */}
        <button className="flex items-center bg-green-500 hover:bg-green-600 transition-colors duration-500 ease-in-out rounded-full py-2 px-4">
          <div className="animate-pulse">
            <MessageCircle className="text-white mr-2" size={20} />
          </div>
          <span className="text-m font-bold">Chat Now</span>
        </button>
      </footer>
    </div>
  );
};

export default MobileMockup;
