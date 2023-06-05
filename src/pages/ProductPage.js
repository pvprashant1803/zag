import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductPage() {

    const data = [
        { "size": "S", "price": 3 },
        { "size": "M", "price": 4 },
        { "size": "L", "price": 5 },
        { "size": "XL", "price": 6 },
        { "size": "XXL", "price": 7 }
    ]
    const [qnty, setQnty] = useState(1)
    const [Size, setSize] = useState("S")
    const [Total, setTotal] = useState(0)

    useEffect(() => {
        let obj = data.find(o => o.size === Size)

        const t = obj.price * qnty
        setTotal(t)

    }, [Size, qnty])



    return (
        <>
            <div className='max-w-[375px'>

                <div className="relative">
                    <img className="w-full" src='./image.jpg' />
                    <div className="mx-[25px] absolute top-11 left-0 flex justify-between w-[50%]">

                    </div>

                    <div>
                        <img className="absolute top-11 left-6" src='./arrow.svg' />

                        <img className="absolute top-11 right-6" src='./cart2.svg' />

                        <img className="absolute bottom-14 mx-auto left-0 right-0" src='./dots.svg' />

                        <img className="absolute bottom-14 right-6" src='./love1.svg' />
                    </div>

                    <div className="mx-[25px] relative -top-8 z-10 flex justify-between">

                    </div>

                </div>

                <div className="rounded-t-3xl -my-10 relative bg-white mb-[20px]">
                    <div className="mx-[25px] pt-[20px]">
                        <div className="flex justify-between">
                            <div className="flex flex-col space-y-2">
                                <div className="font-poppins">
                                    <h2 className="font-bold">Roller Rabbit</h2>
                                    <p className="text-[10px] text-[#666666]">Vado Odelle Dress</p>
                                </div>

                                <div className="flex space-x-2">
                                    <img src='./star.svg' />
                                    <span className="font-poppins text-[8px] font-semibold">(300 Reviews)</span>
                                </div>

                            </div>


                            <div className="flex flex-col space-y-2 items-end">

                                <div className="bg-[#EEEEEE] font-semibold rounded-2xl space-x-2 w-[75%]  px-2 py-1 text-center">
                                    <button onClick={() => { (qnty > 1) && setQnty(qnty - 1) }} className="">-</button>
                                    <span>{qnty}</span>
                                    <button onClick={() => { setQnty(qnty + 1) }}>+</button>
                                </div>


                                <div>
                                    <span className="font-poppins text-[10px] font-semibold">Available in stock</span>
                                </div>
                            </div>


                        </div>


                        <div className="mt-[23px]">
                            <h2 className="font-poppins  font-bold">Size</h2>

                            <div className="mt-[12px] font-poppins font-semibold text-xs flex space-x-3 text-[#666666]">
                                {data.map((val) => {
                                    const isActive = val.size === Size;
                                    return (
                                        <button onClick={() => setSize(val.size)} className={`rounded-full border-2 p-2 w-9 h-9 flex place-content-center ${isActive ? 'bg-black text-white' : 'border-[#DDDDDD]'}`}>{val.size}</button>
                                    )
                                })}

                            </div>
                        </div>


                        <div className="font-poppins mt-[25px]">
                            <h2 className="font-bold">Description</h2>
                            <p className="text-[#666666] mt-[15px] text-[10px]">Get a little lift from these Sam Edelman sandals featuring ruched straps and leather lace-up ties, while a braided jute sole makes a fresh statement for summer.</p>

                        </div>

                        <div className="font-poppins my-[32px] flex justify-between">

                            <div className="flex flex-col">
                                <span className="text-[#666666] text-[8px]">Total Price</span>
                                <span className="font-bold">${Total}</span>
                            </div>


                            <Link to={'/payment'}>
                            <button className="bg-black rounded-3xl flex space-x-4 items-center px-12 py-3">
                                <img className="w-3" src="./cart3.svg" alt="" />
                                <span className="text-sm font-poppins text-white">Buy Now</span>
                            </button>
                            </Link>


                        </div>
                    </div>
                </div>

            </div>


        </>
    );
}

export default ProductPage;
