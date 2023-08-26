import GoogleMapEmbed from "./GoogleMapEmbed";


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
  
export default Footer;