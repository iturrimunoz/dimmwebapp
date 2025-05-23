import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mr Aarav Sharma",
      text: "Dr. Swagat performed my PET CT Scan with utmost professionalism. He explained the procedure thoroughly and showed genuine empathy. The facility was well-equipped, and I felt confident in his expertise. Highly recommended for cancer patients seeking a reliable and caring specialist."
    },
    {
      name: "Mr Rohan Desai",
      text: "Dr. Swagat's cancer therapy was remarkably effective and compassionate. His personalized approach made a significant impact on my well-being. Highly recommend for those in need of thoughtful care."
    },
    {
      name: "John D.",
      text: "I can't thank Dr. Swagat enough for his exceptional care and expertise in treating my prostate cancer with PSMA therapy. From the moment I met him, he exuded confidence and compassion. His innovative approach to nuclear medicine is truly remarkable. The treatment was a game-changer for me."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Hear from our Patients!</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 italic mb-4">{testimonial.text}</p>
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 