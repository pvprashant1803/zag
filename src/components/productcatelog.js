import { Link } from "react-router-dom";


export default function ProductCatelog() {
    return(
        <div className='mx-[25px] mt-[25px]'>
        <div className='flex justify-between font-poppins'>
          <h2 className='font-bold text-[18px]'>New Arrivals</h2>
          <span className='underline text-xs'>View All</span>
        </div>

        <div className='grid grid-cols-2 gap-x-4'>

          <div>
            <div className='relative'>
              <img className="rounded-xl" src='./product-1.jpg' />
              <img className='absolute top-4 right-5' src='./love.svg' />
            </div>
            <div className='mt-[11px] text-center font-poppins'>
              <p className='font-bold'>The Marc Jacobs</p>
              <p className='text-xs font-medium text-[#666666]'>Traveler Tote</p>
              <p className='font-bold text-sm'>$195.00</p>
            </div>
          </div>

        <Link to={'/productpage'}>
        <div>
            <div className='relative'>
              <img className="rounded-xl" src='./product-3.jpg' />
              <img className='absolute top-4 right-5' src='./love.svg' />
            </div>
            <div className='mt-[11px] text-center font-poppins'>
              <p className='font-bold'>Roller Rabbit</p>
              <p className='text-xs font-medium text-[#666666]'>Vado Odelle Dress</p>
              <p className='font-bold text-sm'>$2.00</p>
            </div>
          </div>
        </Link>

        </div>

      </div>
    )
}