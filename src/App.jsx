import { PRODUCT_LIST } from ".";
import Product from "./components/Product";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import CreateContextProvider from "./shoppingCart/Cart-details";
import { useRef } from "react";

export default function App() {
  const dialog = useRef();
  function openCart() {
    dialog.current.open();
  }

  return (
    <CreateContextProvider>
      <NavBar openCart={openCart} />
      <section className="flex my-40 flex-wrap justify-center items-center gap-10 box-border ">
        {PRODUCT_LIST.map((item, index) => (
          <div
            key={index}
            className="box-border aspect-[0.64] w-[80%] md:w-[40%] lg:w-1/3 2xl:w-1/5 shadow-md shadow-stone-400 "
          >
            <Product
              title={item.productName}
              image={item.productImg}
              price={item.price}
            />
          </div>
        ))}
      </section>
      <Cart ref={dialog} />
    </CreateContextProvider>
  );
}
