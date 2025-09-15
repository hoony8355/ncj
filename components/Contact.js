import React, { useState } from 'react';
import { Send, CheckCircle, AlertTriangle } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({ status: 'idle', message: null });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormState({ status: 'loading', message: null });
    
    const form = event.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormState({ status: 'success', message: '문의가 성공적으로 제출되었습니다. 곧 연락드리겠습니다!' });
        form.reset();
      } else {
        const responseData = await response.json();
        if (Object.prototype.hasOwnProperty.call(responseData, 'errors')) {
          throw new Error(responseData["errors"].map((error) => error.message).join(", "));
        } else {
          throw new Error('양식 제출 중 오류가 발생했습니다.');
        }
      }
    } catch (error) {
      setFormState({ status: 'error', message: error.message || '알 수 없는 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">프로젝트 문의하기</h2>
          <p className="mt-4 text-lg text-gray-500">
            성장의 첫 걸음, 노클전과 함께하세요. 아래 양식을 작성해주시면 빠르게 회신드리겠습니다.
          </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          {/* 
            !!! IMPORTANT !!!
            This is a public test endpoint. 
            Replace 'mknllbve' with your actual Formspree form ID from your Formspree dashboard.
          */}
          <form 
            action="https://formspree.io/f/mknllbve" 
            method="POST" 
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">이름</label>
              <div className="mt-1">
                <input type="text" name="name" id="name" required className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md" />
              </div>
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">회사명</label>
              <div className="mt-1">
                <input type="text" name="company" id="company" className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md" />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">연락처</label>
              <div className="mt-1">
                <input type="tel" name="phone" id="phone" className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">이메일</label>
              <div className="mt-1">
                <input type="email" name="email" id="email" required className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700">월 예산</label>
              <div className="mt-1">
                <select name="budget" id="budget" className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md">
                  <option value="under3m">월 300만원 미만</option>
                  <option value="3to10m">월 300만~1,000만원</option>
                  <option value="10mplus">월 1,000만원 이상</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <fieldset>
                <legend className="block text-sm font-medium text-gray-700">관심 서비스 (복수 선택 가능)</legend>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="flex items-center"><input id="service_naver" name="service" type="checkbox" value="naver" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" /><label htmlFor="service_naver" className="ml-3 block text-sm text-gray-700">네이버 SA/GFA</label></div>
                  <div className="flex items-center"><input id="service_seo" name="service" type="checkbox" value="seo" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" /><label htmlFor="service_seo" className="ml-3 block text-sm text-gray-700">SEO 대행/실행</label></div>
                  <div className="flex items-center"><input id="service_viral" name="service" type="checkbox" value="viral" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" /><label htmlFor="service_viral" className="ml-3 block text-sm text-gray-700">레뷰/SNS 바이럴</label></div>
                  <div className="flex items-center"><input id="service_edu" name="service" type="checkbox" value="edu" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" /><label htmlFor="service_edu" className="ml-3 block text-sm text-gray-700">온·오프 교육</label></div>
                </div>
              </fieldset>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">프로젝트/문의 내용</label>
              <div className="mt-1">
                <textarea name="message" id="message" rows={6} className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"></textarea>
              </div>
            </div>
            <div className="sm:col-span-2">
                <div className="flex items-start">
                    <div className="flex-shrink-0">
                        <input id="privacy" name="privacy" type="checkbox" required className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    </div>
                    <div className="ml-3">
                        <p className="text-sm text-gray-600">
                            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">개인정보 수집·이용</a>에 동의합니다.
                        </p>
                    </div>
                </div>
            </div>
            <div className="sm:col-span-2">
              <button type="submit" disabled={formState.status === 'loading'} className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400">
                {formState.status === 'loading' ? '전송 중...' : '문의하기'}
                {formState.status !== 'loading' && <Send className="ml-3 -mr-1 h-5 w-5" />}
              </button>
            </div>
          </form>

          {formState.status === 'success' && (
            <div className="mt-6 p-4 rounded-md bg-green-50 border border-green-300">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <p className="ml-3 text-sm font-medium text-green-800">{formState.message}</p>
              </div>
            </div>
          )}
          {formState.status === 'error' && (
            <div className="mt-6 p-4 rounded-md bg-red-50 border border-red-300">
              <div className="flex items-center">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                <p className="ml-3 text-sm font-medium text-red-800">{formState.message}</p>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Contact;