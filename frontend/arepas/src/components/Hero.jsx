

function Hero() {
    return (
      <div className="bg-white">
        <div className="bg-[#F0C808] min-h-[400px] p-5 flex flex-col">
          <div className=" text-[#A40E4C] font-[slackey] text-5xl">
            Colombian Arepas in Rexburg
          </div>
  
          <button className="p-5 mt-5 bg-white text-black rounded-full">
            Order Now
          </button>
  
          <button
            id="review-order-button"
            className="p-5 mt-5 bg-slate-500 text-white rounded-full"
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
  
          <div className="mt-5 flex flex-row gap-5 max-h-[600px] max-w-[600px]">
            <div className="flex flex-col gap-5 w-1/2">
              <img src="src/assets/arepa-with-salsa.jpeg" alt="Arepas" className="aspect-square object-cover rounded-tr-full h-1/2" />
              <div className="bg-white h-1/2 aspect-square object-cover rounded-full rounded-br-[0px]"></div>
            </div>
            
            <div className="w-1/2">
              <img src="src/assets/arepa.jpeg" alt="Arepas" className="h-full object-cover"/>
            </div>
  
  
          </div>
  
  
  
        </div>
      </div>
    );
}
  
export default Hero;