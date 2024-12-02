import { getRequestConfig } from 'next-intl/server';
// import { cookies } from 'next/headers'; 

export default getRequestConfig(async () => {
  // const cookieStore = cookies();

  // const localeCookie = cookieStore.get('locale');
  // const locale = localeCookie?.value || 'en'; 

  // if (!localeCookie) {
  //   cookieStore.set('locale', 'en');
  // }
  const locale = 'en';

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
