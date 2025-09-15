import React from 'react';
import { Linkedin, Facebook, Instagram } from 'lucide-react';

const SocialLink: React.FC<{ href: string; icon: React.ElementType; label: string }> = ({ href, icon: Icon, label }) => (
  <a href={href} className="text-gray-400 hover:text-gray-300">
    <span className="sr-only">{label}</span>
    <Icon className="h-6 w-6" />
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <h2 className="text-3xl font-bold">노클전</h2>
            <p className="text-gray-400 text-base">
              스타트업 전문 온라인 마케팅 대행사.
              <br />
              데이터로 증명하고, 실행으로 성장시킵니다.
            </p>
            <div className="flex space-x-6">
              <SocialLink href="#" icon={Facebook} label="Facebook" />
              <SocialLink href="#" icon={Instagram} label="Instagram" />
              <SocialLink href="#" icon={Linkedin} label="LinkedIn" />
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Services</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#services" className="text-base text-gray-300 hover:text-white">네이버 퍼포먼스</a></li>
                  <li><a href="#services" className="text-base text-gray-300 hover:text-white">SEO 대행/실행</a></li>
                  <li><a href="#services" className="text-base text-gray-300 hover:text-white">바이럴 마케팅</a></li>
                  <li><a href="#services" className="text-base text-gray-300 hover:text-white">온·오프라인 교육</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">이용약관</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">개인정보처리방침</a></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
               <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact</h3>
                  <ul className="mt-4 space-y-4">
                     <li className="text-base text-gray-300">Email: <a href="mailto:hale7292@gmail.com" className="hover:text-white">hale7292@gmail.com</a></li>
                     <li className="text-base text-gray-300">사업자 정보: [추가 예정]</li>
                  </ul>
               </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">&copy; {new Date().getFullYear()} Noklzun. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
