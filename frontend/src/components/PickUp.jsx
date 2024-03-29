export default function PickUp() {
  return (
    <section className="w-full bg-neutral py-16 text-white">
      <div className="container flex flex-col items-center md:flex-row md:justify-between md:gap-20">
        <div>
          <h2 className="text-3xl">Pick Up</h2>
          <p className="py-6">
            Your order will be ready for pick up in 20 minutes. Come by the
            lobby and we will have your order ready for you.
          </p>
          <a
            className="mb-8 block md:hidden"
            href="https://maps.app.goo.gl/yKquo7RGUNBzkrYn6"
          >
            <button className="btn btn-primary btn-block px-10">
              Open Map
            </button>
          </a>
          <a
            className="hidden md:block"
            href="https://maps.app.goo.gl/yKquo7RGUNBzkrYn6"
          >
            <button className="btn px-10">Open Map</button>
          </a>
        </div>
        <div className="my-8 text-center">
          <a href="https://maps.app.goo.gl/yKquo7RGUNBzkrYn6">
            <div className="mb-2">649 S 2nd St W, Rexburg, ID 83440</div>
          </a>
          <a href="tel:208-356-0066">208-356-0066</a>
        </div>
        <GoogleMapEmbed />
      </div>
    </section>
  );
}

function GoogleMapEmbed() {
  return (
    <iframe
      className="aspect-square w-full rounded-xl object-cover lg:w-auto"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d407.3674795695385!2d-111.78917535289398!3d43.81314490545258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53540b05a4b7f7ed%3A0x90109c39fc23b7a4!2s649%20S%202nd%20St%20W%2C%20Rexburg%2C%20ID%2083440!5e0!3m2!1sen!2sus!4v1693044010526!5m2!1sen!2sus"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map Embed"
    ></iframe>
  );
}
