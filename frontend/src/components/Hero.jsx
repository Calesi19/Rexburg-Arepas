export default function Hero() {
  return (
    <div class="hero py-10 md:py-20">
      <div class="container flex flex-col justify-center items-center lg:flex-row-reverse gap-8 lg:gap-20">
        <img
          src="/arepa.jpeg"
          class="md:max-w-sm aspect-square object-cover rounded-lg shadow-2xl"
        />
        <div className="">
          <h1 class="text-3xl lg:text-5xl font-bold">
            Delicious Colombian Arepas
          </h1>
          <p class="py-6">
            Arepas are a staple of Colombian cuisine. They are a type of food
            made of ground maize dough, originating from the northern region of
            South America in pre-Columbian times, and are notable in the
            cuisines of Colombia and Venezuela.
          </p>
          <button class="btn btn-primary px-10 btn-block md:hidden">Place Order</button>
          <button class="btn btn-primary px-10 hidden md:block ">Place Order</button>
        </div>
      </div>
    </div>
  );
}
