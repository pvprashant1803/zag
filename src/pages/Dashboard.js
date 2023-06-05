import { data } from "../components/data"

export default function Dashboard() {
    return (
        <div className="flex mx-10 h-fit my-10 border-0 rounded-3xl shadow-2xl bg-[#F5F5F5]">
            <div className="flex flex-col space-y-10 px-5 py-10 w-[20%] items-center border-2 rounded-3xl bg-white">
                <img className="w-20" src="../dashboard/zag.svg" alt="zag" />
                <div className="flex flex-col space-y-5 items-center">
                    <div className="flex space-x-2 font-bold py-2 px-10 justify-center rounded-xl">
                        <img src="../dashboard/vector.svg" alt="" />
                        <span>Reports</span>
                    </div>
                    <div className="flex space-x-2 font-bold bg-[#1b5af825] text-[#1B59F8] py-2 px-10 justify-center rounded-xl">
                        <img src="../dashboard/grid.svg" alt="" />
                        <span className="">Workspace</span>
                    </div>
                    <div className="flex space-x-2 font-bold py-2 px-10 justify-center rounded-xl">
                        <img src="../dashboard/settings.svg" alt="" />
                        <span>Settings</span>
                    </div>
                </div>
            </div>
            <div className="w-full p-10 bg-[#F5F5F5] font-poppins border-0 rounded-e-3xl">
                <div className="flex justify-between">

                    <h1 className="font-bold text-xl">Orders</h1>
                    <button className="bg-[#1B59F8] text-sm text-white px-4 py-1 rounded-lg"> + Add Order</button>
                </div>
                <hr className="my-5" />

                <div className="bg-white border-0 rounded-xl p-5">
                    <div className="flex justify-between items-center">
                        <h2 className="font-bold">Confirmed <span className="text-gray-300 text-sm ml-2">258</span></h2>
                        <img className="w-8" src="../dashboard/plus.svg" alt="" />
                    </div>
                    <hr className="my-5" />

                    <table className="w-full border-separate border-spacing-x-2 border-spacing-y-4">
                        <thead className="">

                            <tr className="text-xs">
                                <th className="py-1 flex space-x-2 text-gray-400"> <img className='w-4' src='../dashboard/search.svg' /><span>Search</span></th>
                                <th className="py-1 rounded-md border-0">
                                    <span className="relative">Active Orders
                                        <div className="absolute text-sm font-medium right-0 flex flex-col items-start space-y-2 border rounded-md shadow-xl p-3 bg-white w-52">
                                            <span className="flex space-x-2"><input type="radio" checked /> <span>Confirmed</span></span>
                                            <span className="flex space-x-2"><input type="radio" /> <span>Delivered</span></span>
                                            <span className="flex space-x-2"><input type="radio" /> <span>Refund Completed (30d)</span></span>
                                            <span className="flex space-x-2"><input type="radio" /> <span>Pending</span></span>
                                        </div>

                                    </span>
                                </th>
                                <th className="py-1 rounded-md border-0">Amount</th>
                                <th className="py-1 rounded-md border-0">Placed On</th>
                                <th className="py-1 rounded-md border-0">Options</th>
                            </tr>
                        </thead>
                        <tbody className="">


                            {data.map((val) => {
                                return (
                                    <tr className="">
                                        <td className="flex space-x-3 items-center">
                                            <input type="radio" />
                                            <img width={61} height={42} src={`../dashboard/${val.img}.jpg`} />
                                            <div className="flex flex-col">
                                                <span className="font-bold text-sm">{val.title}</span>
                                                <span className="text-xs text-gray-400">{val.tag}</span>
                                            </div>
                                        </td>
                                        <td className="text-center text-gray-500 text-sm">{val.order}</td>
                                        <td className="text-center text-gray-500 text-sm">{val.amount}</td>
                                        <td className="text-center text-gray-500 text-sm">{val.date}</td>
                                        <td className="text-gray-500 text-sm"><img className="mx-auto" src="../dashboard/ellipsis-h.svg" alt="" /></td>
                                    </tr>
                                )

                            })}
                           
                        </tbody>
                    </table>
                </div>

                <div className="bg-white border-0 rounded-xl p-5 mt-5">
                    <div className="flex justify-between items-center">
                        <h2 className="font-bold">Issues <span className="text-gray-300 text-sm ml-2">21</span></h2>
                        <img className="w-8" src="../dashboard/plus2.svg" alt="" />
                    </div>
                 
                </div>

            </div>
        </div>
    )
}