import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const AboutPage = () => {
  const team = [
    {
      id: 1,
      name: "Dr. Arman Rahman",
      title: "Chief Veterinarian & Founder",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgcn6hNpmle_W4SQwR4iYgrsmPovNBk_T3FQ&s",
      description:
        "Dr. Arman has over 10 years of experience in veterinary medicine and animal wellness. He founded WarmPaws to provide trusted care, grooming, and health support for pets during the winter season when they need extra warmth and attention.",
      social: {
        facebook: "https://facebook.com/",
        linkedin: "https://linkedin.com/",
      },
    },
    {
      id: 2,
      name: "Rafi Ahmed",
      title: "Pet Grooming Specialist",
      image: "https://images.pexels.com/photos/6235123/pexels-photo-6235123.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Rafi is a certified groomer who ensures every pet is handled gently and stays cozy during winter grooming sessions. From fur trimming to warm baths, he makes pets look and feel their best.",
      social: {
        facebook: "https://facebook.com/",
        instagram: "https://instagram.com",
      },
    },
    {
      id: 3,
      name: "Anis Chowdhury",
      title: "Pet Nutrition & Behavior Expert",
      image: "https://vetic-img.s3.ap-south-1.amazonaws.com/website/Website-Astro/consultation_page/Experienced%2C+multi-speciality+vets+(2).webp",
      description:
        "Anis helps design healthy meal plans and behavior training sessions for pets. His goal is to ensure furry companions stay energetic and happy, even during the coldest months.",
      social: {
        facebook: "https://facebook.com/",
        instagram: "https://instagram.com/",
      },
    },
  ];


  return (
    <div className="min-h-md bg-[#fffdf7]">
      {/* hero */}
      <section
        className="flex flex-col items-center justify-center text-center py-20 px-6 md:px-20 rounded"
        style={{
          background: "linear-gradient(135deg, #f9d29d 0%, #f8b500 100%)",
        }}
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg"
        >
          About WarmPaws Pet Care
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-lg md:text-xl max-w-3xl"
        >
          WarmPaws Pet Care is a cozy home for your furry friends during the
          chilly winter season. We offer trusted veterinary care, grooming,
          nutrition, and warm boarding services to make sure every paw stays
          happy, healthy, and warm.
        </motion.p>
      </section>

      {/* mission / vision / values */}
      <section className="py-20 px-6 md:px-10 flex flex-col md:flex-row gap-10 bg-white">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/3 bg-gradient-to-tr from-yellow-400 to-orange-400 text-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
          <p>
            To ensure that every pet receives warmth, care, and love throughout
            the winter — keeping tails wagging and hearts happy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:w-1/3 bg-gradient-to-tr from-green-400 to-teal-500 text-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
          <p>
            To become the most trusted pet care center for the winter season,
            providing safety, comfort, and professional attention for every
            animal.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-1/3 bg-gradient-to-tr from-rose-400 to-red-500 text-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-3">Our Values</h2>
          <p>
            Compassion, Safety, Cleanliness, Trust, and Lifelong Love for Pets —
            because they’re family.
          </p>
        </motion.div>
      </section>

      {/* team section */}
      <section className="py-15 px-6 md:px-10 bg-[#fffaf3] border mb-6 border-gray-200 rounded">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Meet Our Expert Vets
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {team.map((member) => (
            <motion.div
              key={member.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center h-full hover:shadow-lg transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-amber-400"
              />
              <h3 className="text-xl font-bold mb-1 text-gray-800">
                {member.name}
              </h3>
              <p className="text-amber-600 text-sm mb-2">{member.title}</p>
              <p className="text-gray-600 text-sm mb-4 text-left">
                {member.description}
              </p>

              <div className="flex gap-3 mb-4">
                {member.social?.facebook && (
                  <a
                    href={member.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-500 hover:text-white rounded-full border p-2 hover:bg-amber-500"
                  >
                    <FaFacebookF className="w-4 h-4" />
                  </a>
                )}
                {member.social?.instagram && (
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-500 hover:text-white rounded-full border p-2 hover:bg-amber-500"
                  >
                    <FaInstagram className="w-4 h-4" />
                  </a>
                )}
                {member.social?.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-500 hover:text-white rounded-full border p-2 hover:bg-amber-500"
                  >
                    <FaLinkedinIn className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* winter tips */}
      <section className="py-20 px-8 bg-gradient-to-r from-[#fff3e0] to-[#ffe0b2] text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-10">
          Winter Care Tips for Your Pets ❄️
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left max-w-6xl mx-auto">
          <div className="bg-white p-5 rounded shadow-sm hover:shadow-md transition">
            <h3 className="font-bold text-lg mb-2 text-amber-700">
              1. Keep Them Warm
            </h3>
            <p>
              Give your pets a warm bed and limit their outdoor time during cold
              evenings. Use cozy blankets and insulated kennels.
            </p>
          </div>
          <div className="bg-white p-5 rounded shadow-sm hover:shadow-md transition">
            <h3 className="font-bold text-lg mb-2 text-amber-700">
              2. Moisturize Paws
            </h3>
            <p>
              Winter air can dry out paws. Use pet-safe moisturizers to protect
              their pads from cracking or freezing.
            </p>
          </div>
          <div className="bg-white p-5 rounded shadow-sm hover:shadow-md transition">
            <h3 className="font-bold text-lg mb-2 text-amber-700">
              3. Balanced Diet
            </h3>
            <p>
              Provide warm meals rich in protein and vitamins to help them
              maintain energy and body temperature.
            </p>
          </div>
          <div className="bg-white p-5 rounded shadow-sm hover:shadow-md transition">
            <h3 className="font-bold text-lg mb-2 text-amber-700">
              4. Regular Vet Check-ups
            </h3>
            <p>
              Cold weather can worsen joint pain or allergies. Regular vet visits
              keep your pets safe and comfortable.
            </p>
          </div>
        </div>
      </section>

      {/* join us */}
      <section className="rounded py-16 text-center bg-gradient-to-r from-amber-400 to-orange-300 text-white">
        <h2 className="text-3xl font-bold mb-4">Join the WarmPaws Family</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Book your pet’s grooming, boarding, or wellness session this winter
          and let us take care of your furry friend — warmly and lovingly.
        </p>
        <button className="bg-white text-amber-600 font-semibold px-6 py-2 rounded shadow hover:bg-gray-100 transition">
          Book Now
        </button>
      </section>
    </div>
  );
};

export default AboutPage;
