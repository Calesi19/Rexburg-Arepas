export default function Hero() {
  return (
    <div className="hero py-10 md:py-20">
      <div className="container flex flex-col items-center justify-center gap-8 lg:flex-row-reverse lg:gap-20">
        <img
          src="/arepa.jpeg"
          className="aspect-square rounded-lg object-cover shadow-2xl md:max-w-sm"
        />
        <div className="">
          <h1 className="text-3xl font-bold lg:text-5xl">
            Delicious Colombian Arepas
          </h1>
          <p className="py-6">
            Arepas are a staple of Colombian cuisine. They are a type of food
            made of ground maize dough, originating from the northern region of
            South America in pre-Columbian times, and are notable in the
            cuisines of Colombia and Venezuela.
          </p>
          <button className="btn btn-primary btn-block px-10 md:hidden">
            Place Order
          </button>
          <button className="btn btn-primary hidden px-10 md:block ">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
