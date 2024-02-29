import Banner from '@/components/Home/Banner/Banner';
import Description from '@/components/Home/Description/Description';
import Footer from '@/components/Home/Footer/Footer';

const Page = async () => {
  return (
    <section className="relative flex flex-col w-screen min-h-screen items-center mx-auto">
      <div className="absolute w-full flex flex-col gap-24 items-center pt-48 bg-backgroud">
        <Banner />
        <Description />
        <Footer />
      </div>
    </section>
  );
};

export default Page;
