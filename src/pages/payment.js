import { useState, useEffect } from "react";

export default function Payment() {

    const [cardNumber, setCardNumber] = useState('');
    const [nameOnCard, setNameOnCard] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [showOtherContent, setShowOtherContent] = useState(false);

    const [paymentSubmitted, setPaymentSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (cardNumber === '') {
            alert('Please enter a card number');
            return;
        }

        if (cardNumber.length !== 16) {
            alert('Please enter valid 16 digit a card number');
            return;
        }

        if (nameOnCard === '') {
            alert('Please enter the name on the card');
            return;
        }

        if (expiryDate === '') {
            alert('Please enter the expiration date');
            return;
        }

        if (cvv === '') {
            alert('Please enter the CVV');
            return;
        }

        if (cvv.length !== 3) {
            alert('Please enter 3 digit a CVV');
            return;
        }

        setPaymentSubmitted(true);

    };

    useEffect(() => {
        if (paymentSubmitted) {
            setTimeout(() => {
                setShowOtherContent(true);
            }, 3000);
        }
    }, [paymentSubmitted]);



    return (
        <>
        <div className="max-w-[375px]">
        <h1 className="font-bold text-xl text-center mt-16">Payment</h1>

        <div className="mt-10 bg-blue-200 mx-5 max-w-[375px]x`">

            {!paymentSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 p-8">
                    <label className="relative w-full flex flex-col">
                        <span className="mb-2">Card number</span>
                        <input className="rounded-md peer p-2 border-2 border-black placeholder-gray-300" type="number" name="card_no" placeholder="0000 0000 0000 0000" onChange={(e) => setCardNumber(e.target.value)} />

                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-2 right-1 h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                    </label>


                    <label className="relative w-full flex flex-col">
                        <span className="mb-2">Name on card</span>
                        <input className="rounded-md peer p-2 border-2 border-black placeholder-gray-300" type="text" name="name" placeholder="Name" onChange={(e) => setNameOnCard(e.target.value)} />
                    </label>

                    <div className="grid grid-cols-2 gap-4">

                        <label className="relative flex flex-col">
                            <span className="mb-2">Expiration Date</span>
                            <input className="rounded-md peer p-2 border-2 border-black placeholder-gray-300 w-32 h-full" type="month" name="expiry" placeholder="Expiry" onChange={(e) => setExpiryDate(e.target.value)} />
                        </label>


                        <label className="relative flex flex-col">
                            <span className="mb-2">Security code</span>
                            <input className="rounded-md peer p-2 border-2 border-black placeholder-gray-300" type="number" name="cvv" maxLength="3" placeholder="CVV" onChange={(e) => setCvv(e.target.value)} />
                        </label>

                    </div>

                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Pay Now</button>


                </form>

            ) : (
                <>
                    {showOtherContent ? (
                       <div className="h-56 flex justify-center items-center">
                       <h2 className="font-bold">Payment Submitted!</h2>
                     </div>
                    ) : (
                        <div className="h-56 flex flex-col justify-center items-center">
                       <h2 className="font-bold">Payment is Processing!</h2>
                            <p>Please wait, do not close this screen</p>
                        </div>
                    )}
                </>
            )
            }
        </div>
        </div>
        </>
    )
}