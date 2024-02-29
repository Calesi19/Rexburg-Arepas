function Hero() {
  return (
    <div className="bg-white">

      <div className="bg-[#F0C808] min-h-[400px] p-5 flex flex-col md:flex-row md:justify-center md:items-center ">
        <div className="flex flex-col md:w-1/2">

          <div className="flex items-center">
          
          <div className=" text-[#a40e4c6d] font-[slackey] text-5xl">
            Colombian Arepas in Rexburg
            </div>
           

          </div>
          

          <div className="flex flex-col md:flex-row md:gap-5">

          <button className="p-5 mt-5 bg-white text-black rounded-full md:w-2/3 md:max-w-[300px]">
            Order Now
          </button>

          <button
            id="review-order-button"
            className="p-5 mt-5 bg-slate-500 text-white rounded-full md:w-2/3 md:max-w-[300px]"
            onClick={() => {
              document
                .getElementById("order-search-box")
                .classList.toggle("hidden");
              document
                .getElementById("review-order-button")
                .classList.toggle("hidden");
            }}
          >
            Review Order
          </button>

          </div>
          

          <div
            id="order-search-box"
            className="hidden bg-slate-500 rounded-3xl mt-5 flex flex-col items-center gap-5 p-5"
          >
            <div className="text-white">
              Enter your Phone Number to Find Order
            </div>
            <input
              className="input p-3 rounded-full text-center text-black bg-white"
              type="tel"
              placeholder="248-434-5508"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <button className="py-5 w-1/2 bg-[#F0C808] rounded-full text-black">
              Search
            </button>
          </div>
        </div>

        

        {/* 

        <div className="mt-5 flex flex-row lg:w-1/3 max-h-[600px] aspect-square w-full max-w-[600px]">
          <div className="flex flex-col w-1/2">
            <img
              src="https://github.com/Calesi19/Rexburg-Arepas/blob/main/frontend/arepas/src/assets/arepa-with-salsa.jpeg?raw=true"
              alt="Arepas"
              className="aspect-square object-cover rounded-tr-full h-1/2"
            />
            <div className="bg-white h-1/2 aspect-square object-cover rounded-full rounded-br-[0px]"></div>
          </div>

          <div className="w-1/2">
            <img
              src="https://github.com/Calesi19/Rexburg-Arepas/blob/main/frontend/arepas/src/assets/arepa.jpeg?raw=true"
              alt="Arepas"
              className="h-full object-cover"
            />
          </div>
        </div>

*/  }
        
      </div>
    </div>
  );
}

export default Hero;
