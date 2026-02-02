import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloating: React.FC = () => {
  const phoneNumber = '966554593722'; // بدون +
  const message = 'Hello, I would like to inquire about your services.';

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppFloating;
