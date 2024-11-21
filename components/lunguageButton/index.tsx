"use client";

import { useRouter } from "next/navigation";

const LocaleSwitcher = () => {
  const router = useRouter();

  const changeLocale = async (locale: string) => {
    document.cookie = `locale=${locale}; path=/`;

    router.refresh();
  };

  return (
    <div>
      <button onClick={() => changeLocale("en")}>English</button>
      <button onClick={() => changeLocale("fn")}>Finnish</button>
    </div>
  );
};

export default LocaleSwitcher;
