import React from 'react';

const NaverLogo = () => (
    <svg className="h-8 w-auto text-green-600" fill="currentColor" viewBox="0 0 48 48">
        <path d="M24 6.342h-8.62L6.342 24v8.62L24 41.658h8.62L41.658 24v-8.62L24 6.342zM24 8.25l13.75 13.75V24h-6.875V15.125h-5L24 24h-1.875v8.875h5L34 24v-1.125L24 8.25z" transform="translate(0 -2) scale(1.1)"/>
        <path d="M19.5 24l-3.375-5.625h6.75L19.5 24zM28.5 24l3.375 5.625h-6.75L28.5 24z"/>
        <path d="M15.375 15.125L24 29.625 32.625 15.125H15.375zM24 35.875L15.375 21.375h17.25L24 35.875z" opacity=".2"/>
        <path fill="#fff" d="M21.164 21.164h5.672v5.672h-5.672z"/>
    </svg>
);


const MetaLogo = () => (
    <svg className="h-8 w-auto text-blue-600" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.996 11.23c0-1.83-1.02-3.51-2.61-4.45.39-1.05.39-2.22 0-3.27-1.11-2.88-4.08-4.51-7.2-4.51-2.94 0-5.76 1.5-7.05 4.14-.39 1.05-.39 2.22 0 3.27-1.59.94-2.61 2.61-2.61 4.45 0 1.83 1.02 3.51 2.61 4.45-.39 1.05-.39 2.22 0 3.27 1.29 2.64 4.11 4.14 7.05 4.14 3.12 0 6.09-1.62 7.2-4.51.39-1.05.39-2.22 0-3.27 1.59-.94 2.61-2.61 2.61-4.45zm-11.996-8.28c1.74 0 3.33 1.02 4.05 2.58.33.72.33 1.53 0 2.25-.72 1.56-2.31 2.58-4.05 2.58-1.74 0-3.33-1.02-4.05-2.58-.33-.72-.33-1.53 0-2.25.72-1.56 2.31-2.58 4.05-2.58zm0 16.56c-1.74 0-3.33-1.02-4.05-2.58-.33-.72-.33-1.53 0-2.25.72-1.56 2.31-2.58 4.05-2.58 1.74 0 3.33 1.02 4.05 2.58.33.72.33 1.53 0 2.25-.72 1.56-2.31-2.58-4.05-2.58z" />
    </svg>
);


const GoogleLogo = () => (
    <svg className="h-8 w-auto" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.19,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.19,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.19,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1Z" />
    </svg>
);


const Hero = () => {
  return (
    <section id="home" className="bg-white pt-20 pb-16 lg:pt-32 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">스타트업 성장,</span>
            <span className="block text-blue-600">네이버 퍼포먼스 + 실행형 SEO로 당겨옵니다.</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            초기 예산에 최적화된 유입과 전환, 그리고 장기 오가닉 성장을 한 번에.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="#contact"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
              >
                무료 상담 요청
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 lg:mt-24">
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider">
            공식 수행 매체
          </p>
          <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-3 justify-items-center">
            <div className="col-span-1 flex justify-center">
              <NaverLogo />
            </div>
            <div className="col-span-1 flex justify-center">
              <MetaLogo />
            </div>
            <div className="col-span-2 md:col-span-1 flex justify-center">
               <GoogleLogo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
