import HappyAnimation from '@/components/Common/LottieAnimation/HappyAnimation';
import HeaderTemplate from '@/components/Common/Template/HeaderTemplate';
import Banner from '@/components/Home/Banner/Banner';

const Page = async () => {
  const fetchHello = async () => {
    const response = await fetch('/api/items', {
      method: 'GET',
    });

    const data = await response.json();
    console.log(data);

    return data;
  };

  const text = await fetchHello();
  console.log(text);

  return (
    <HeaderTemplate>
      <Banner />
      {text.message}
      <HappyAnimation />
    </HeaderTemplate>
  );
};

export default Page;
