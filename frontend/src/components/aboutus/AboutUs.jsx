import React, { useRef, useEffect } from 'react';

const AboutUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section id="about-us" ref={sectionRef} className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-black dark:text-white">Sobre Nosotros</h2>
        {/* Contenido adicional sobre la compañía */}
      </div>
    </section>
  );
};

export default AboutUs;
