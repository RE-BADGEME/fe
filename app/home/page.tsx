import HappyAnimation from '@/components/Common/LottieAnimation/HappyAnimation';
import HeaderTemplate from '@/components/Common/Template/HeaderTemplate';
import Banner from '@/components/Home/Banner/Banner';
import { getCurrentUrl } from '@/utils/getCurrentUrl';

const Page = async () => {
  const url = getCurrentUrl();
  const fetchHello = async () => {
    const response = await fetch(`${url}/api/items/get`, {
      method: 'GET',
    });

    const data = await response.json();

    return data;
  };

  const data = await fetchHello();

  return (
    <HeaderTemplate>
      <Banner />
      {data.message}
      <HappyAnimation />
    </HeaderTemplate>
  );
};

export default Page;
