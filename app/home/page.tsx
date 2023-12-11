import HappyAnimation from '@/components/Common/LottieAnimation/HappyAnimation';
import HeaderTemplate from '@/components/Common/Template/HeaderTemplate';
import Banner from '@/components/Home/Banner/Banner';
import { getCurrentUrl } from '@/utils/getCurrentUrl';

const Page = async () => {
  const url = getCurrentUrl();
  console.log(url);
  const fetchHello = async () => {
    const response = await fetch(`${url}/api/items/get`, {
      method: 'GET',
    });

    const data = await response.json();
    console.log(data);

    return data;
  };

  const data = await fetchHello();
  console.log(data);

  return (
    <HeaderTemplate>
      <Banner />
      {data.message}
      <HappyAnimation />
    </HeaderTemplate>
  );
};

export default Page;
