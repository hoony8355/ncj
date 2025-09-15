import React from 'react';
import { Target, TrendingUp, BarChart } from 'lucide-react';

const PortfolioItem = ({ category, client, title, imageUrl, challenge, result, stats }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
    <img src={imageUrl} alt={title} className="w-full h-56 object-cover" />
    <div className="p-6">
      <p className="text-sm font-semibold text-blue-600 uppercase">{category}</p>
      <h3 className="mt-2 text-2xl font-bold text-gray-900">{client}</h3>
      <p className="mt-1 text-lg text-gray-700">{title}</p>
      <div className="mt-6">
        <div className="flex items-start">
            <div className="flex-shrink-0"><Target className="h-6 w-6 text-gray-400" /></div>
            <div className="ml-4">
                <h4 className="text-md font-bold text-gray-800">배경/과제</h4>
                <p className="mt-1 text-gray-600">{challenge}</p>
            </div>
        </div>
         <div className="flex items-start mt-4">
            <div className="flex-shrink-0"><BarChart className="h-6 w-6 text-gray-400" /></div>
            <div className="ml-4">
                <h4 className="text-md font-bold text-gray-800">결과</h4>
                <p className="mt-1 text-gray-600">{result}</p>
            </div>
        </div>
      </div>
       <div className="mt-6 pt-4 border-t border-gray-200">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-4">
                {stats.map(stat => (
                    <div key={stat.label} className="flex flex-col-reverse">
                        <dt className="text-sm font-medium text-gray-500">{stat.label}</dt>
                        <dd className="text-2xl font-extrabold text-blue-600">{stat.value}</dd>
                    </div>
                ))}
            </dl>
       </div>
    </div>
  </div>
);

const portfolioData = [
  {
    category: '네이버 SA & SEO',
    client: 'B2B SaaS 스타트업 A사',
    title: '오가닉 리드 확보 및 전환율 개선',
    imageUrl: 'https://picsum.photos/seed/portfolio1/600/400',
    challenge: '초기 브랜드 인지도 부족으로 인한 유료 트래픽 의존도 심화 및 높은 CAC.',
    result: '네이버 브랜드 검색 및 GFA 논리타겟팅으로 잠재고객 유입을 늘리고, 기술/콘텐츠 SEO로 핵심 키워드 1페이지 상위 노출 달성.',
    stats: [
      { label: '전환율(CVR)', value: '+35%' },
      { label: 'ROAS', value: '1,200%' },
    ],
  },
  {
    category: 'SNS 바이럴 & GFA',
    client: 'D2C 쇼핑몰 B사',
    title: '신제품 런칭 캠페인',
    imageUrl: 'https://picsum.photos/seed/portfolio2/600/400',
    challenge: '경쟁이 치열한 뷰티 시장에서 신제품 인지도 확보 및 초기 매출 견인 필요.',
    result: '인플루언서 협업 콘텐츠를 GFA 소재로 활용하여 타겟 고객층에 확산. 레뷰 체험단으로 초기 리뷰 및 사회적 증거 확보.',
    stats: [
        { label: '참여율(CPE)', value: '₩150' },
        { label: '초기매출', value: '+250%' },
    ],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-white sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Portfolio</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            성공으로 증명된 결과
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            우리의 전략이 어떻게 실제 비즈니스 성장으로 이어졌는지 확인하세요.
          </p>
        </div>
        <div className="mt-16 max-w-lg mx-auto grid gap-10 lg:grid-cols-2 lg:max-w-none">
          {portfolioData.map((item) => (
            <PortfolioItem key={item.client} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
