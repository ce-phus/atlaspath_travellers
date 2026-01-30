// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { FaSafari, FaUmbrellaBeach, FaMountain, FaUsers, FaHeart } from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-gray-800">

      {/* Hero - assuming you already updated Hero's accents to #1F1C7A too */}
      <Hero />

      {/* ------------------ Why Choose Us ------------------ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1F1C7A] mb-5">
              Why Travel with Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Authentic Kenyan experiences crafted with passion, safety, and respect for local communities.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: FaSafari, title: "Expert Safari Guides", desc: "Local experts with 10+ years in the wild" },
              { icon: FaUmbrellaBeach, title: "Beach Getaways", desc: "Diani, Watamu & Lamu paradise escapes" },
              { icon: FaMountain, title: "Climb & Trek", desc: "Mt. Kenya, Hell's Gate, Aberdare adventures" },
              { icon: FaUsers, title: "Cultural Immersion", desc: "Maasai, Samburu, Swahili authentic encounters" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white border border-[#1F1C7A]/20 hover:border-[#1F1C7A]/40 rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#1F1C7A]/10 flex items-center justify-center text-[#1F1C7A] text-3xl group-hover:bg-[#1F1C7A] group-hover:text-white transition-colors duration-300">
                  <item.icon />
                </div>
                <h3 className="text-xl font-semibold text-[#1F1C7A] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ------------------ Popular Destinations ------------------ */}
      <section className="py-20 bg-gradient-to-b from-[#1F1C7A]/5 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1F1C7A] mb-5">
              Explore Kenya's Finest
            </h2>
            <p className="text-xl text-gray-600">Handpicked destinations loved by our travelers</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 - Maasai Mara */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img
                src="https://thumbs.dreamstime.com/b/dreamlike-masai-mara-sunset-unveiling-surreal-beauty-african-savanna-golden-hour-witness-breathtaking-spectacle-386988731.jpg"
                alt="Maasai Mara at sunset"
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-3xl font-bold drop-shadow-md">Maasai Mara</h3>
                <p className="text-lg opacity-90">The Greatest Wildlife Show on Earth</p>
              </div>
            </div>

            {/* Card 2 - Diani Beach */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200"
                alt="Diani Beach Kenya"
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-3xl font-bold drop-shadow-md">Diani Beach</h3>
                <p className="text-lg opacity-90">White sand & turquoise waters</p>
              </div>
            </div>

            {/* Card 3 - Amboseli */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img
                src="https://pangolinphoto.com/wp-content/uploads/2023/08/Janine-Krayer-Africa_s-highest-peak-elephants-in-Kenya-Amboseli-National-Park-Mount-Kilimanjaro-.webp"
                alt="Amboseli with Kilimanjaro"
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-3xl font-bold drop-shadow-md">Amboseli</h3>
                <p className="text-lg opacity-90">Elephants & Kilimanjaro views</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------ Culture Highlight ------------------ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 text-6xl text-[#1F1C7A]">
              <FaHeart />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1F1C7A] mb-6">
              Feel the heartbeat of Kenya
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-10">
              Meet the Maasai, dance with warriors, taste Swahili cuisine, stay in authentic villages.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[0,1,2].map(i => (
                <div key={i} className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition">
                  <img
                    src={i === 0 
                      ? "https://live.staticflickr.com/2496/3754449867_698cb3a140_b.jpg"
                      : i === 1 
                      ? "https://static.wixstatic.com/media/412cf2_f361f59e685346a783cd078ab5a73bcb~mv2.jpg/v1/fill/w_980,h_560,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/412cf2_f361f59e685346a783cd078ab5a73bcb~mv2.jpg"
                      : "https://media.gadventures.com/media-server/cache/56/73/56731d067d574988f6715b1ceae9899b.jpg"}
                    alt="Maasai culture"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ------------------ Final CTA ------------------ */}
      <section className="py-20 bg-[#1F1C7A] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Your Kenyan Adventure?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Let's create memories that last a lifetime.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-[#1F1C7A] hover:bg-gray-100 font-bold text-lg px-10 py-5 rounded-full shadow-2xl hover:shadow-[#1F1C7A]/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            Get in Touch Today
          </a>
        </div>
      </section>

    </div>
  );
}