import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const fabricData = [
  { id: 1, name: "Cotton", imageUrl: "https://picsum.photos/seed/fabric_cotton_texture/400/200" },
  { id: 2, name: "Georgette", imageUrl: "https://picsum.photos/seed/fabric_georgette_texture/400/200" },
  { id: 3, name: "Silk", imageUrl: "https://picsum.photos/seed/fabric_silk_texture/400/200" },
  { id: 4, name: "Muslin", imageUrl: "https://picsum.photos/seed/fabric_muslin_texture/400/200" },
  { id: 5, name: "Voile", imageUrl: "https://picsum.photos/seed/fabric_voile_texture/400/200" },
  { id: 6, name: "Rayon", imageUrl: "https://picsum.photos/seed/fabric_rayon_texture/400/200" },
  { id: 7, name: "Organza", imageUrl: "https://picsum.photos/seed/fabric_organza_texture/400/200" },
];

export default function FabricMarquee() {
  return (
    <>
      <div className="py-12">

        <div className="mx-auto">
            <h2 className="text-2xl font-bold text-center text-stone-700 mb-8">
                Crafted on the Finest Fabrics
            </h2>
        </div>

        <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={2}
            loop={true}
            allowTouchMove={false}
            speed={6000}
            autoplay={{
                delay: 1,
                disableOnInteraction: false,
            }}

            breakpoints={{
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
                1280: {
                    slidesPerView: 5,
                },
                1536: {
                    slidesPerView: 6,
                }
            }}
        >
            {fabricData.map((fabric) => (
                <SwiperSlide key={fabric.id}>
                    <div
                        className="relative flex items-center justify-center h-32 overflow-hidden rounded-full group"
                    >
                        <img
                            src={fabric.imageUrl}
                            alt={`${fabric.name} fabric texture`}
                            className="absolute  object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/50"></div>

                        {/* Fabric Name */}
                        <h3 className="relative text-2xl font-semibold text-white">
                            {fabric.name}
                        </h3>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
}
