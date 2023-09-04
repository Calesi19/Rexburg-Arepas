


function Contact() {
  return (
    <div className="bg-black min-h-[300px] p-5 flex flex-col gap-5 justify-center md:flex-row md:items-center lg:flex-row lg:items-center lg:gap-[10%]">
        <h2 className="font-[slackey] text-white text-3xl max-w-[500px]">
          Have a question? Contact me!
        </h2>
  
        <p className="text-[#36bd3b] max-w-[500px]">
          Get ready, because our Colombian arepas will revolutionize your taste
          buds. Authentically prepared and loaded with irresistible fillings,
          you’ll be begging for more.
          </p>
          
          <div className="flex flex-row items-center">
              <img
                  className="w-10 h-10"
                  src="/src/assets/phone.svg" alt="Phone" />

              <div className="text-[#36bd3b] font-bold font-3xl mx-8">787-988-9447</div>
            
          </div>
      </div>
  );
}

export default Contact;