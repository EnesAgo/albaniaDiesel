import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

// Define the testimonial type
interface Testimonial {
    id: number;
    name: string;
    role: string;
    comment: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Name Surname",
        role: "⭐⭐⭐⭐⭐",
        comment:
            "The best service and services. Recommended",
        image: "https://pixabay.com/vectors/blank-profile-picture-mystery-man-973460/",
    },
    {
        id: 2,
        name: "Vlade puco",
        role: "⭐⭐⭐⭐⭐",
        comment:
            "The best diesel service 👌",
        image: "https://lh3.googleusercontent.com/a-/ALV-UjVwiTYe2S5mDN79HC2-s9J17ueAzqC5KMuQmHr6voNN1JaK7hZk=w144-h144-p-rp-mo-ba5-br100",
    },
    {
        id: 3,
        name: "Zlatko Taneski",
        role: "⭐⭐⭐⭐⭐",
        comment:
            "BOSCH DIESEL DOCTOR",
        image: "https://lh3.googleusercontent.com/a/ACg8ocJ4se_iUbVxM_V1MJFDtwy5deJaTNSp2kfu3Ak6jeTmvwRYQQ=w144-h144-p-rp-mo-ba3-br100",
    },
    {
        id: 4,
        name: "Aleksandar Simonoskii",
        role: "⭐⭐⭐⭐⭐",
        comment:
            "Great service 👌",
        image: "https://lh3.googleusercontent.com/a/ACg8ocI2wPm4nYEtozBQCPFOAl1Ln1srfSxL-C3kVzy9J6s2aaztVA=w144-h144-p-rp-mo-ba4-br100",
    },
    {
        id: 1,
        name: "Name Surname",
        role: "⭐⭐⭐⭐⭐",
        comment:
            "The best service and services. Recommended",
        image: "https://pixabay.com/vectors/blank-profile-picture-mystery-man-973460/",
    },
    {
        id: 1,
        name: "Name Surname",
        role: "⭐⭐⭐⭐⭐",
        comment:
            "The best service and services. Recommended",
        image: "https://pixabay.com/vectors/blank-profile-picture-mystery-man-973460/",
    },
    {
        id: 1,
        name: "Name Surname",
        role: "⭐⭐⭐⭐⭐",
        comment:
            "The best service and services. Recommended",
        image: "https://pixabay.com/vectors/blank-profile-picture-mystery-man-973460/",
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-gray-100 scroll-mt-14" id="testimonials">
            <div className="container mx-auto px-6 text-center">
                {/* Header */}
                <h3 className="text-xl font-semibold text-accent uppercase tracking-wide">
                    Testimonials
                </h3>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 font-slab">
                    What Our Clients Say
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                    We take pride in providing top-notch services to our
                    customers. Here's what some of them have to say about their
                    experience with us.
                </p>

                {/* Swiper Testimonials */}
                <div className="mt-12">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true} // Infinite Sliding Effect
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="testimonials-swiper"
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:scale-105 transition duration-300">
                                    {/* Profile Image & Name */}
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-14 h-14 rounded-full overflow-hidden">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg text-gray-900">
                                                {testimonial.name}
                                            </h3>
                                            <p className="text-gray-500 text-sm text-left">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                    {/* Comment */}
                                    <p className="text-gray-700 mt-4 text-md leading-relaxed">
                                        "{testimonial.comment}"
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
