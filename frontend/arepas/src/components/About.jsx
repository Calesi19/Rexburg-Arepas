
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

  
export default About;