import { getAllCategories, getAllPosts, getFeaturedMediaById } from "@/lib/wordpress";

export const imageLink = async (id: number) => {
    const imagevalue = await getFeaturedMediaById(id)
    return imagevalue?.source_url
  }
export const PagesData = async (category: string) => {
  const workSection = await getAllCategories();
  const clientCategory = workSection.find((cat) => cat.name === category) || {
    id: "1",
  };
  const posts = await getAllPosts({
    category: clientCategory?.id.toString(),
    limit: 100,
  });
  const data = posts.map((data) => {
    return data.acf;
  });
  const imagessss = await Promise.all(
    data.map(async (item) => {
      const value = await imageLink(item?.post_image);
      return { ...item, post_image: value };
    })
  );
  return imagessss;
};

export const ServicesData = async (category: string) => {
  const servicesSection = await getAllCategories();
  const clientCategory = servicesSection.find(
    (cat) => cat.name === category
  ) || { id: "1" };
  const posts = await getAllPosts({ category: clientCategory?.id.toString() });
  const data = posts.map((data) => {
    return data.acf;
  });
  const imagessss = await Promise.all(
    data.map(async (item) => {
      const value = await imageLink(item?.post_image);
      const postCategory = servicesSection.find(
        (cat) => cat.name === item.cat
      ) || { id: "1" };
      const postValue = await getAllPosts({
        category: postCategory?.id.toString(),
      });
      const innerContent = postValue.map((data) => {
        return data.acf;
      });
      return { ...item, post_image: value, innerContent: innerContent };
    })
  );
  return imagessss;
};

export const ButtonData = async (category: string) => {
  const workSection = await getAllCategories();
  const clientCategory = workSection.find((cat) => cat.name === category) || {
    id: "1",
  };
  const posts = await getAllPosts({ category: clientCategory?.id.toString() });
  const data = posts.map((data) => {
    return data.acf;
  });
  const imagessss = await Promise.all(
    data.map(async (item) => {
      const value = await imageLink(item?.button_image);
      return { ...item, button_image: value };
    })
  );
  return imagessss;
};
