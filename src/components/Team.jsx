import React from 'react';

const Team = () => {
  const team = [
    { name: "Dr. Swagat Dash", role: "HOD & Senior Consultant - Nuclear Medicine" },
    { name: "Vindhya Malasani", role: "Associate Consultant - Nuclear Medicine" },
    { name: "Kamal", role: "" },
    { name: "Neeraj", role: "" },
    { name: "Yawar", role: "" },
    { name: "Dinesh", role: "" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestro Equipo</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow-lg text-center">
              <div className="h-20 w-20 mx-auto rounded-full bg-blue-900 mb-4"></div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 