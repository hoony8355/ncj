import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ quote, author, title, logoUrl }) => (
  <div className="bg-white p-8 rounded-lg shadow-md flex flex-col h-full">
    <div className="flex text-yellow-400 mb-4">
        {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" />)}
    </div>
    <blockquote className="flex-grow">
      <p className="text-lg text-gray-700">“{quote}”</p>
    </blockquote>
    <footer className="mt-8">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <img className="h-12 w-12 object-contain" src={logoUrl} alt={`${author}'s company logo`} />
        </div>
        <div className="ml-4">
          <div className="text-base font-bold text-gray-900">{author}</div>
          <div className="text-base text-gray-500">{title}</div>
        </div>
      </div>
    </footer>
  </div>
);

const testimonialsData = [
  {
    quote: "단순 대행을 넘어, 우리 팀의 일원처럼 함께 고민하고 실행해주셨습니다. SEO에 대한 이해도가 완전히 달라졌어요.",
    author: "김민준",
    title: "CEO, 주식회사 딥테크",
    logoUrl: "https://via.placeholder.com/150/EEEEEE/333333?text=D",
  },
  {
    quote: "네이버 광고 예산이 2배 이상 효율적으로 사용되기 시작했습니다. 매주 공유주시는 리포트 퀄리티가 다릅니다.",
    author: "이서연",
    title: "마케팅팀 팀장, 패셔나",
    logoUrl: "https://via.placeholder.com/150/EEEEEE/333333?text=F",
  },
  {
    quote: "실무 교육을 통해 팀원들이 스스로 광고를 세팅하고 분석할 수 있게 되었습니다. 장기적으로 큰 자산이 될 것 같습니다.",
    author: "박지훈",
    title: "대표, 스토어프렌즈",
    logoUrl: "https://via.placeholder.com/150/EEEEEE/333333?text=S",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            고객들이 말하는 노클전
          </p>
        </div>
        <div className="mt-16 max-w-2xl mx-auto grid grid-cols-1 gap-10 lg:max-w-none lg:grid-cols-3">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.author} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
