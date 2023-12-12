import HappyAnimation from '@/components/Common/LottieAnimation/HappyAnimation';
import HeaderTemplate from '@/components/Common/Template/HeaderTemplate';
import Banner from '@/components/Home/Banner/Banner';
import { getCurrentUrl } from '@/utils/getCurrentUrl';

type Categories = {
  partition: string;
  name: string;
  url: string;
  npm?: string;
};

const Page = async () => {
  const url = getCurrentUrl();
  const fetchHello = async () => {
    const response = await fetch(`${url}/api/v1/category`, {
      method: 'GET',
    });

    const data = await response.json();

    return data;
  };

  const data = await fetchHello();

  console.log(data);

  return (
    <HeaderTemplate>
      <Banner />
      {data.categories.map((item: Categories) => (
        <div key={item.name}>{item.name}</div>
      ))}
      <HappyAnimation />
    </HeaderTemplate>
  );
};

export default Page;
