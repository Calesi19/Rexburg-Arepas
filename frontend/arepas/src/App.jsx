import "./App.css";

function Banner() {
  return (
    <div className="w-full p-5 bg-red-200" >
      
      <div className="font-bold text-lg text-black text-center">
         This site is currently under construction. Please check back soon!

      </div>
      

     </div> 
      
      

  );
}


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

function SectionBreak() {
  return (
    <div className="bg-black min-h-[300px] p-5 flex flex-col gap-5 justify-center md:flex-row md:items-center lg:flex-row lg:items-center lg:gap-[10%]">
      <h2 className="font-[slackey] text-white text-3xl max-w-[500px]">
        Pick them up on Tuesdays & Thursdays
      </h2>

      <p className="text-[#36bd3b] max-w-[500px]">
        Get ready, because our Colombian arepas will revolutionize your taste
        buds. Authentically prepared and loaded with irresistible fillings,
        you’ll be begging for more.
      </p>
    </div>
  );
}

function About() {
  return (

    <div className="bg-white p-5 flex flex-col gap-5">

      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-center">
        <img
          src="https://github.com/Calesi19/Rexburg-Arepas/blob/main/frontend/arepas/src/assets/arepas3.jpeg?raw=true"
          alt="Arepas"
          className="md:hidden rounded-[50px] md:max-h-[300px] aspect-square object-cover"
        />

        <div className="max-w-[400px]">
          <h3 className="text-black text-2xl font-[slackey]">
            Delivered Fresh, Packed with Flavors
          </h3>

          <p className="text-black">
            From Bogotá to your doorstep, we ensure you get the tastiest,
            freshest arepas every time. Indulge in endless satisfaction with
            meaty, melty goodness!
          </p>
        </div>

        <img
          src="https://github.com/Calesi19/Rexburg-Arepas/blob/main/frontend/arepas/src/assets/arepas3.jpeg?raw=true"
          alt="Arepas"
          className="hidden md:flex rounded-[50px] md:max-h-[300px] aspect-square object-cover"
        />

      </div>






      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-center">
        <img
          src="https://github.com/Calesi19/Rexburg-Arepas/blob/main/frontend/arepas/src/assets/arepas4.jpeg?raw=true"
          alt="Arepas"
          className="rounded-[50px] aspect-square object-cover rounded-tl-[200px] md:max-h-[300px] md:rounded-tl-[150px]"
        />

        <div className="max-w-[400px]">

        <h3 className="text-black text-2xl font-[slackey]">
          Delivered Fresh, Packed with Flavors
        </h3>

        <p className="text-black">
          From Bogotá to your doorstep, we ensure you get the tastiest, freshest
          arepas every time. Indulge in endless satisfaction with meaty, melty
          goodness!
          </p>
          
        </div>

       
        
      </div>
    </div>
  );
}

function GoogleMapEmbed() {
  return (
    <iframe
      className="aspect-square object-cover rounded-3xl"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d407.3674795695385!2d-111.78917535289398!3d43.81314490545258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53540b05a4b7f7ed%3A0x90109c39fc23b7a4!2s649%20S%202nd%20St%20W%2C%20Rexburg%2C%20ID%2083440!5e0!3m2!1sen!2sus!4v1693044010526!5m2!1sen!2sus"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map Embed"
    ></iframe>
  );
}

function Footer() {
  return (
    <div className="bg-black min-h-[300px] p-5 flex flex-col gap-5 justify-center lg:flex-row lg:items-center lg:gap-[10%]">
      <GoogleMapEmbed />

      <h2 className="font-[slackey] text-white text-3xl">
        Pickup on Tuesdays & Thursdays
      </h2>

      <p className="text-[#36bd3b] max-w-[500px]">
        Get ready, because our Colombian arepas will revolutionize your taste
        buds. Authentically prepared and loaded with irresistible fillings,
        you’ll be begging for more.
      </p>
    </div>
  );
}

function App() {
  return (
    <>
      <Banner />
      <Hero />
      <SectionBreak />
      <About />
      <Footer />
    </>
  );
}

export default App;
