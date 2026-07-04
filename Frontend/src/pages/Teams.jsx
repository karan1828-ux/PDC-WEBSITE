export default function Teams() {
  const members = [
    {
      name: "John Doe",
      role: "President",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Jane Smith",
      role: "Vice President",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Alex Johnson",
      role: "Secretary",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      name: "Emily Davis",
      role: "Treasurer",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">Our Team</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {members.map((member) => (
          <div
            key={member.name}
            className="bg-white rounded-xl shadow-lg p-6 text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-36 h-36 rounded-full object-cover mx-auto"
            />

            <h2 className="mt-4 text-xl font-semibold">{member.name}</h2>

            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}