export default function SearchBar() {
    return(
        <div className='mt-[19px] mx-[25px] flex space-x-4'>
        <div className='w-[260px] h-[50px] rounded-[30px] flex space-x-4' style={{ backgroundImage: `url(./bg.jpg)` }}>

          <img className='ml-5 w-4' src='./icon.svg' />

          <input className='text-[#666666] font-poppins bg-transparent text-xs' placeholder='Search...' type="search" name="" id="" />
        </div>
        <img className='' src='./filter.svg' />
      </div>

    )
}