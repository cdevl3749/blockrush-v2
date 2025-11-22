// src/components/About.jsx
import React from 'react';

const About = ({ t }) => {
  return (
    <section id="about" className="py-8 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
          {t.about.title}
        </h2>
        <p className="text-base md:text-lg text-gray-300 text-center mb-4 leading-relaxed">
          {t.about.description}
        </p>
        <div className="text-center text-lg md:text-xl text-orange-400 font-semibold">
          ⚡ {t.about.highlight}
        </div>
      </div>
    </section>
  );
};

export default About;