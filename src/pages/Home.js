import MenuBar from "../components/menubar";
import SearchBar from "../components/searchbar";
import ProductCatelog from "../components/productcatelog";

function Home() {
  return (
    <>
      <div className='max-w-[375px]'>

        <MenuBar />

        <h1 className='mt-[22px] mx-[25px] font-poppins font-bold text-[25px] leading-[40px]'>Welcome,<br /><span className='text-[#666666] font-semibold text-[20px]'>Our Fashions App</span></h1>

        <SearchBar />

        <div className='mx-[25px] mt-[30px] flex space-x-4 overflow-hidden'>
          <img src='./features-1.jpg' />
          <img src='./features-2.jpg' />
        </div>

        <ProductCatelog />

        <div className='flex mt-[64px] p-5 justify-around  shadow-lg shadow-black border rounded-t-3xl'>
          <img src='./home.svg' />
          <img src='./cart.svg' />
          <img src='./notification.svg' />
          <img src='./profile.svg' />

        </div>
      </div>


    </>
  );
}

export default Home;
