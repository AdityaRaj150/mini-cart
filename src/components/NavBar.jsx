import List from "./List";
const items = [
  "New",
  "Women",
  "Men",
  "Kids",
  "Fenty x Puma",
  "Motosport",
  "Collaborations",
  "Sports",
  "Outlet",
];
export default function NavBar({ openCart }) {
  return (
    <>
      <nav className="overflow-hidden fixed top-0 bg-stone-900 w-[100%] h-20 mb-20">
        <ul className="  h-full items-center flex justify-center gap-10  text-slate-200 bg-stone-800">
          {items.map((i, ind) => (
            <List key={ind} title={i} />
          ))}
          <li>
            <div className="absolute top-2 left-2">
              <button
                onClick={openCart}
                className="bg-orange-400 flex gap-5 items-center text-stone-900 py-2 px-5 rounded"
              >
                <h1>Cart</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-bag-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
                </svg>
              </button>
              <div className="text-slate-50 my-2">Check Cart</div>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}
