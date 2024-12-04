import React, { useRef, useEffect } from 'react';

const Testimonials = () => {
  const testimonialsRef = useRef(null);

  useEffect(() => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollTop = 0; // Reset scroll position
    }
  }, []);

  return (
    <section id="testimonials" className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">Testimonios</h2>
        <div ref={testimonialsRef} className="overflow-y-auto h-64">
          {/* Los testimonios se listan aquí */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
