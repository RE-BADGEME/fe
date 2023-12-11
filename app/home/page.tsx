import HappyAnimation from '@/components/Common/LottieAnimation/HappyAnimation';
import HeaderTemplate from '@/components/Common/Template/HeaderTemplate';
import Banner from '@/components/Home/Banner/Banner';

const Page = () => {
  return (
    <HeaderTemplate>
      <Banner />
      <HappyAnimation />
    </HeaderTemplate>
  );
};

export default Page;
