import { fetchAllData } from '@/api/fetchAllData';
import HappyAnimation from '@/components/Common/LottieAnimation/HappyAnimation';
import HeaderTemplate from '@/components/Common/Template/HeaderTemplate';
import Banner from '@/components/Home/Banner/Banner';

type Categories = {
  partition: string;
  name: string;
  url: string;
  npm?: string;
};

const Page = async () => {
  const data = await fetchAllData();

  return (
    <HeaderTemplate>
      <Banner />
      {data.map((item: Categories) => (
        <div key={item.name}>{item.name}입니다.</div>
      ))}
      <HappyAnimation />
    </HeaderTemplate>
  );
};

export default Page;
