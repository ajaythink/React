import { useState } from "react";

import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  // setConvertedAmount(amount * currencyInfo[to]);

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/28995805/pexels-photo-28995805/free-photo-of-misty-autumn-landscape-in-norwegian-forest.jpeg')`,
        }}
      >
        <div className="w-full ">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1 ">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setAmount(currency)}
                  selectCurrency={from}
                />
              </div>
              <div className="relative w-full h-0.6">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/ border- border-white rounded-md text-white bg-blue-600 px-2 py-0.5"
                  onChange={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setAmount(currency)}
                  selectCurrency={to}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
