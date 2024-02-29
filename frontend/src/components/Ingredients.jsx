export default function Ingredients() {
  return (
    <section className="w-full py-16">
      <div className="container flex flex-col md:flex-row-reverse">
        <div className="flex flex-col justify-center md:w-[40%] md:px-10 ">
          <h2 className="text-3xl">We make them with love.</h2>
          <p className="py-6">
            Our arepas are made with the best ingredients. We make them fresh
            every day with the best cornmeal, mozzarella cheese, and butter.
          </p>
        </div>
        <div className="grid grid-cols-3 justify-between gap-2 md:flex md:h-[200px] md:w-[60%]">
          <img
            src="/cornmeal1.png"
            className="aspect-square transform rounded-lg shadow-2xl transition duration-500 ease-in-out hover:scale-105"
          />
          <img
            src="/mozarella.webp"
            className="aspect-square transform rounded-lg shadow-2xl transition duration-500 ease-in-out hover:scale-105"
          />
          <img
            src="/butter.jpg"
            className="aspect-square transform rounded-lg object-cover shadow-2xl transition duration-500 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
