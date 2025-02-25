import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sun, Droplets, Trees as Tree, Camera, Coffee } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export function Home() {
  const attractions = [
    {
      title: 'Barragem de Sobradinho',
      description: 'Uma das maiores barragens do Brasil, gerando energia e beleza.',
      image: 'https://portalsg.com/wp-content/uploads/2021/05/15.jpg',
      icon: Droplets
    },
    {
      title: 'Balneário',
      description: 'Local perfeito para lazer e diversão com a família.',
      image: 'https://blogramosfilho.com.br/wp-content/uploads/2020/04/chico-periquito.jpg',
      icon: Sun
    },
    {
      title: 'Caatinga',
      description: 'Bioma único com flora e fauna característicos.',
      image: 'https://www.visiteobrasil.com.br/galerias/543_gal_18400958/70-105211-sobradinho-vegetacao-tipica-da-caatinga-no-vale-do-s-francisco-foto-gabriel-carvalhogr.jpg',
      icon: Tree
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh]">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-full"
        >
          <SwiperSlide>
            <div className="relative h-full">
              <img
                src="https://portalsg.com/wp-content/uploads/2021/05/15.jpg"
                alt="Barragem de Sobradinho"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
                <div className="container mx-auto px-4 h-full flex items-center">
                  <div className="max-w-2xl">
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-5xl md:text-6xl font-bold text-white mb-6"
                    >
                      Bem-vindo a Sobradinho
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl text-gray-200 mb-8"
                    >
                      Descubra as belezas naturais, a rica história e a hospitalidade do povo sobradiense.
                    </motion.p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Add more slides here */}
        </Swiper>
      </section>

      {/* Attractions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pontos Turísticos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conheça os lugares mais incríveis de Sobradinho, onde natureza e história se encontram.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <motion.div
                key={attraction.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-[4/3]">
                  <img
                    src={attraction.image}
                    alt={attraction.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <attraction.icon className="w-8 h-8 text-white mb-2" />
                      <h3 className="text-xl font-bold text-white mb-2">{attraction.title}</h3>
                      <p className="text-gray-200">{attraction.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-sky-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.a
              href="/turismo"
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <Camera className="w-10 h-10 text-sky-600 mb-4" />
              <span className="text-gray-900 font-medium text-center">Pontos Turísticos</span>
            </motion.a>

            <motion.a
              href="/gastronomia"
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <Coffee className="w-10 h-10 text-sky-600 mb-4" />
              <span className="text-gray-900 font-medium text-center">Gastronomia</span>
            </motion.a>

            {/* Add more quick links */}
          </div>
        </div>
      </section>
    </div>
  );
}