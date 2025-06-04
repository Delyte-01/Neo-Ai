import Reveal from '@/components/animation/reveal';
import RevealGroup from '@/components/animation/reveal-group';
import { Button } from '@/components/ui/button';
import React from 'react'


const testimonials = [
  {
    name: "Lila Bennett",
    text: "NeoAI has completely changed how I shop and plan my travels! The recommendations are spot-on, and I love the seamless delivery tracking.",
    img: "https://res.cloudinary.com/dk5mfu099/image/upload/v1747926464/This_striking_digital_artwork_captures_the_essence_of_a_mysterious_bearded_figure_tlzxwi.jpg",
  },
  {
    name: "Sophie Harrington",
    text: "NeoAI has revolutionized how I shop and plan my trips! Its AI-powered recommendations are incredibly accurate, helping me score the best deals effortlessly. And the delivery tracking? Always on point—I never have to guess when my packages will arrive.",
    img: "https://res.cloudinary.com/dk5mfu099/image/upload/v1748939948/Kermit_Mug_Shot_Meme_Funny_Sticker_ehynvf.jpg",
  },
  {
    name: "Chloe Winslow",
    text: "The AI is super smart and understands my preferences. Whether it's shopping, booking a trip, or getting something delivered, it makes my life easier!",
    img: "https://res.cloudinary.com/dk5mfu099/image/upload/v1748939948/download_3_gxfldw.jpg",
  },
  {
    name: "Kristin Watson",
    text: "This app saves me so much time! I no longer need to search multiple websites—NeoAI finds the best deals and books everything for me.",
    img: "https://res.cloudinary.com/dk5mfu099/image/upload/v1748939947/Bugs_bunny_xjot0x.jpg",
  },
  {
    name: "Aria Whitmore",
    text: "This app is a huge time-saver! NeoAI finds the best deals on flights, hotels, and products in seconds—no more endless searching. It even handles bookings automatically, making everything hassle-free. A must-have for anyone with a busy lifestyle!",
    img: "https://res.cloudinary.com/dk5mfu099/image/upload/v1748939947/download_2_xhczeu.jpg",
  },
  {
    name: "Isla Kensington",
    text: "I love the trip planning feature! It suggests the best hotels and flights, plus I get real-time updates. Highly recommended!",
    img: "https://res.cloudinary.com/dk5mfu099/image/upload/v1748939947/hneojxymaiuaupg8jgfe.jpg",
  },
];

const TestimonialCard = ({
  name,
  text,
  img,
}: {
  name: string;
  text: string;
  img: string;
}) => (
  <Reveal>
    <div className="bg-white/5  backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/10 text-white w-full" >
      <p className="mb-4">{text}</p>
      <div className="flex gap-2">
        <div className="overflow-hidden rounded-full w-[30px] h-[30px]">
          <img src={img} alt="img profile" />
        </div>
        <div className="font-semibold mb-1 font-sora">{name}</div>
      </div>
      <div className="text-yellow-400 flex gap-1">
        {Array.from({ length: 5 }).map((_, idx) => (
          <span key={idx}>★</span>
        ))}
      </div>
    </div>
  </Reveal>
);


const ReviewSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8c67cc] via-[#463568] to-[#04070d] px-4 md:px-6 py-16 place-content-center clip-custom" id='review'>
      <div>
        <RevealGroup>
          <Button className="rounded-full reveal-child flex gap-2 mx-auto font-sora font-normal ring-2 cursor-pointer bg-[#04070e]">
            <div className="w-[25px]">
              <img
                src="https://res.cloudinary.com/dk5mfu099/image/upload/v1748075419/neo-logo-removebg-preview-crop_o5nmab.png"
                alt=""
              />
            </div>
            <span>Reviews</span>
          </Button>
          <h1 className="text-center reveal-child font-black text-2xl py-3 bg-gradient-to-b from-[#c5bfc8] via-[#ffff] to-[#bbb5c8] bg-clip-text text-transparent md:text-5xl md:max-w-[50%] mx-auto md:leading-12 mb-4">
            What Our Happy Customers Are Saying About NeoAI
          </h1>
        </RevealGroup>
      </div>
      <div>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl w-full mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                text={testimonial.text}
                img={testimonial.img}
              />
            ))}
          </div>
      </div>
    </div>
  );
}

export default ReviewSection