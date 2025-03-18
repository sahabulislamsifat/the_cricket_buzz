// FooterContainer.js
const Footer = () => {
  return (
    <footer className="relative">
      <section className="mt-28">
        <div className="bg-[#60691A]">
          <div className="bg-white bg-opacity-25 p-6 w-11/12 xl:container mx-auto mt-5 rounded-xl absolute left-0 right-0 top- border-2">
            <div className="flex flex-col items-center justify-center text-center h-[300px] space-y-2 lg:space-y-4 rounded-xl bg-white bg-custom-image w-full bg-cover bg-center">
              <h1 className="text-2xl font-bold text-gray-800">
                Subscribe to our Newsletter
              </h1>
              <p className="text-xl font-semibold text-gray-500">
                Get the latest updates and news right in your inbox!
              </p>
              <div className="flex flex-col gap-5">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="font-semibold input input-bordered"
                />
                <button className="btn bg-gradient-to-r from-[#fdba74] via-[#fb923c] to-[#f472b6] border-0 font-bold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      ;{/* Real footer  */}
      <div className="bg-[#06091a] pt-56 mt-40">
        <img
          className="mx-auto"
          src="https://i.ibb.co.com/gvRggQN/logo-footer.png"
          alt=""
        />
        <div className="footer justify-between p-10">
          <nav className="mt-10">
            <h6 className="font-semibold mb-2 text-2xl text-white">Services</h6>
            <p className="text-slate-500">
              We are a passionate team <br /> dedicated to providing the best{" "}
              <br /> services to our customers.
            </p>
          </nav>
          <div className="mt-10">
            <h2 className="text-2xl mb-2 text-white font-semibold">
              Quick Links
            </h2>
            <ul className="list-disc ml-5 text-slate-500">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <form className="my-10">
            <h2 className="text-white font-bold text-xl mb-3">Subscribe</h2>
            <p className="text-slate-500">
              Subscribe to our newsletter for the latest <br /> updates.
            </p>
            <fieldset className="form-control w-80">
              <div className="join">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="font-semibold input input-bordered join-item"
                />
                <button className="btn bg-gradient-to-r from-[#fdba74] via-[#fb923c] to-[#f472b6] border-0 font-bold join-item">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </div>
        <div className="border-t border-slate-500 py-5 text-center text-slate-500">
          <p>@2024 Your Company All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
