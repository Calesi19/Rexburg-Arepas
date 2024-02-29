import { FaPlus, FaMinus } from "react-icons/fa";

export default function PickUp() {
  return (
    <section className="w-full py-16 ">
      <div className="container flex flex-col md:flex-row">
        <div className="grid grid-cols-2 gap-1 md:w-1/2 md:gap-8">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="mt-8 flex flex-col md:mt-0 md:w-1/2 md:p-10 ">
          <h2 className="text-3xl">Order</h2>
          <p className="my-6">
            Every order is made fresh and ready to pick up in 20 minutes. Each
            order comes with 3 arepas.
          </p>

          <div className="my-4 flex flex-col justify-between rounded-lg border p-8 ">
            <div className="flex min-h-[100px] flex-col justify-center">
              No Items. Add some to your cart.
            </div>
            <div className="flex justify-between">
              <div>Total:</div>
              <div>$0.00</div>
            </div>
          </div>
          <div className="flex gap-8">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">What is your name?</span>
              </div>
              <input
                type="text"
                placeholder="Juan Doe"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">What is your phone number?</span>
              </div>
              <input
                type="text"
                placeholder="248-434-5508"
                pattern="[0-9]{10}"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <input type="checkbox" defaultChecked className="checkbox" />
            <div>
              I am aware this is a "pick-up" service only and my order will not
              be delivered.
            </div>
          </div>

          <button disabled className="btn btn-primary mt-8 px-10">
            Place Order
          </button>
        </div>
      </div>
    </section>
  );
}

function Card() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-white p-8 shadow-md">
      <img src="/arepa_chicken.png" />
      <div>Arepa with Chicken</div>
      <div className="flex items-center">
        <button class="btn btn-circle btn-sm">
          <FaMinus />
        </button>
        <div className="w-14 text-center">0</div>
        <button className="btn btn-circle btn-sm">
          <FaPlus />
        </button>
      </div>
    </div>
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
            Every order is made fresh and ready to pick up in 20 minutes. Each
            order comes with 3 arepas.
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
