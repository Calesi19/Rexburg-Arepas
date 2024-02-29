export default function PickUp() {
  return (
    <section className="w-full py-16 ">
      <div className="container flex">
        <div className="grid w-1/2 grid-cols-2 gap-8">
          <div className="rounded-2xl bg-white shadow-md">
            <img src="/arepa_chicken_salsa.png" />
          </div>
          <div className="flex flex-col justify-center rounded-2xl bg-white shadow-md">
            <img src="/arepa_chicken.png" />
            <div></div>
          </div>
          <div className="flex flex-col justify-center rounded-2xl bg-white shadow-md">
            <img src="/arepa_plain.png" />
          </div>
          <div className="flex flex-col justify-center rounded-2xl bg-white shadow-md">
            <img src="/arepa_salsa.png" />
          </div>
        </div>
        <div className="flex w-1/2 flex-col p-10 ">
          <h2 className="text-3xl">Order</h2>
          <p className="py-6">
            Arepas are a staple of Colombian cuisine. They are a type of food
            made of ground maize dough, originating from the northern region of
            South America in pre-Columbian times, and are notable in the
            cuisines of Colombia and Venezuela.
          </p>
          <button className="btn btn-primary px-10">Place Order</button>
        </div>
      </div>
    </section>
  );
}

function PiUp() {
  return (
    <section className="w-full bg-[#F8C700] py-16">
      <div className="container flex flex-col items-center">
        <div></div>
        <div>
          <h2 className="text-3xl">Pick Up</h2>
          <p className="py-6">
            Arepas are a staple of Colombian cuisine. They are a type of food
            made of ground maize dough, originating from the northern region of
            South America in pre-Columbian times, and are notable in the
            cuisines of Colombia and Venezuela.
          </p>
          <button className="btn btn-primary px-10">Open Map</button>
        </div>
      </div>
    </section>
  );
}

function PickU() {
  return (
    <section className="w-full bg-[#F8C700] py-16">
      <div className="container flex flex-col items-center">
        <h2 className="text-3xl">Pick Up</h2>
        <p className="py-6">
          Arepas are a staple of Colombian cuisine. They are a type of food made
          of ground maize dough, originating from the northern region of South
          America in pre-Columbian times, and are notable in the cuisines of
          Colombia and Venezuela.
        </p>
        <button className="btn btn-primary px-10">Open Map</button>
      </div>
    </section>
  );
}
