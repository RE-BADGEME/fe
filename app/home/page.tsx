import Background from '@/components/Home/Background/Background';
import Banner from '@/components/Home/Banner/Banner';
// import Description from '@/components/Home/Description/Description';
// import Footer from '@/components/Home/Footer/Footer';

const Page = async () => {
  return (
    <section className="w-full h-screen relative">
      <div className="absolute z-10 flex flex-col w-full items-center top-52 justify-start">
        <Banner />
      </div>
      <Background />
    </section>
  );
};

export default Page;
