import cartLogo from "../assets/images/cart.logo.svg";
import cart from "../assets/images/mainImg.png";

const About = () => {
  return (
    <div>
      <div className=" wh-[1440px] border m-auto">
        <img className="relativ m-auto w-full" src={cart} alt="" />
        <div className="absolute mt-[-250px]  ml-[650px] ">
          <img className="ml-[10px]" src={cartLogo} alt="" />
          <p className="text-[48px] text-center">Checkout</p>
          <p className="text-center">Home / Checkout</p>
        </div>
        <div className="flex justify-center gap-[200px] p-10">
          <div className="flex flex-col gap-4">
            <h3 className="text-[32px] font-bold mb-3">Billing details</h3>
            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-2">
                <label>First name</label>
                <input
                  type="text"
                  className="border rounded-md p-4 outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>First name</label>
                <input
                  type="text"
                  className="border rounded-md p-4 outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label>Company Name (Optional)</label>
              <input
                type="text"
                className="border rounded-md p-4 outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Country / Region</label>
              <input
                type="text"
                className="border rounded-md p-4 outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Street address</label>
              <input
                type="text"
                className="border rounded-md p-4 outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Town / City</label>
              <input
                type="text"
                className="border rounded-md p-4 outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Province</label>
              <input
                type="text"
                placeholder="Western Province"
                className="border rounded-md p-4 outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Zip Code</label>
              <input
                type="text"
                className="border rounded-md p-4 outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Phone</label>
              <input
                type="text"
                className="border rounded-md p-4 outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Email address</label>
              <input
                type="text"
                className="border rounded-md p-4 outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Additional inforamation </label>
              <input
                type="text"
                placeholder="Additional inforamation"
                className="border rounded-md p-4 outline-none"
              />
            </div>
          </div>
          <div className="mt-10">
            <div className="w-[450px]">
              <ul className="flex items-center justify-between mb-5">
                <li className="text-[20px] font-semibold">Product</li>
                <li className="text-[20px] font-semibold">Subtotal</li>
              </ul>
              <ul className="flex items-center justify-between mb-5">
                <li className="text-gray-500">Asgaard sofa x 1</li>
                <li>Rs. 250,000.00</li>
              </ul>
              <ul className="flex items-center justify-between mb-5">
                <li>Subtotal</li>
                <li>Rs. 250,000.00</li>
              </ul>
              <ul className="flex items-center justify-between mb-5">
                <li>Total</li>
                <li className="text-[24px] text-yellow-600 font-[700]">
                  Rs. 250,000.00
                </li>
              </ul>
              <hr className="mb-5" />

              <ul className="ml-5">
                <li className="list-disc">Direct Bank Transfer</li>
              </ul>

              <p className="text-gray-500">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
              <div className="flex gap-2 mt-3">
                <input type="checkbox" />
                <label className="text-gray-500">Direct Bank Transfer</label>
              </div>
              <div className="flex gap-2 mt-3">
                <input type="checkbox" />
                <label className="text-gray-500">Cash On Delivery</label>
              </div>

              <p className="mt-5">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our privacy policy.
              </p>

              <div className="flex items-center justify-center">
                <button className="py-3 px-16 border-2 rounded-2xl mt-5">
                  Place order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
