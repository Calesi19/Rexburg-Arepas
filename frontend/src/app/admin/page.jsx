import { FaKey } from "react-icons/fa";

export default function Page() {
  return (
    <section className="py-16">
      <div className="container">
        <h1 className="text-center text-4xl font-bold">Admin Page</h1>

        <div className="flex w-full justify-center">
          <div className="my-16 flex flex-col items-center justify-center">
            <label className="input input-bordered flex items-center gap-2">
              <FaKey />
              <input type="text" placeholder="Password" className="grow" />
            </label>
            <button className="btn btn-primary btn-block mt-4 px-10">
              Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
