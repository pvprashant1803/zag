export default function MenuBar() {

    return(
        <div className='mx-[25px] mt-[44px] flex justify-between'>
        <img src='./menu.svg' />
        <div className='relative'>
          <img src='./user.svg' />
          <img className='absolute top-0 left-0 z-10' src='./rectangle.svg' />
        </div>
      </div>
    )
}