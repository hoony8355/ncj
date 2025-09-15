import React from 'react';
import { TrendingUp, Search, Megaphone, GraduationCap } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-6">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-base">{description}</p>
  </div>
);

const servicesData = [
  {
    icon: TrendingUp,
    title: '네이버 퍼포먼스 (SA/GFA)',
    description: '네이버 SA/GFA로 ‘지금’ 필요한 고객을 데려옵니다. 키워드·세그먼트·크리에이티브까지 실전형 세팅.',
  },
  {
    icon: Search,
    title: 'SEO 대행/실행',
    description: '기술 + 콘텐츠 + 스키마, 보고서로 끝나지 않는 실행형 SEO로 중장기 오가닉 성장을 확보합니다.',
  },
  {
    icon: Megaphone,
    title: '바이럴 (레뷰/SNS)',
    description: '레뷰·SNS·커뮤니티를 통해 사회적 증거를 극대화하고, 브랜드 신뢰를 설계합니다.',
  },
  {
    icon: GraduationCap,
    title: '온·오프라인 교육',
    description: '실무형 교육으로 마케팅 운영, 분석, 크리에이티브 역량을 강화하고 내부 역량을 내재화합니다.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            스타트업 성장을 위한 맞춤 솔루션
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            노클전은 데이터 기반의 전략으로 가장 효율적인 성장 경로를 제안합니다.
          </p>
        </div>
        <div className="mt-16 grid gap-10 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
          {servicesData.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
