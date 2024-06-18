import { CreateContext } from "../shoppingCart/Cart-details";
import { useContext, useRef, useImperativeHandle, forwardRef } from "react";
import { motion } from "framer-motion";

export default forwardRef(function Cart(prop, ref) {
  const { items, increaseItem, decreaseItem } = useContext(CreateContext);
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  let priceOfItems = items.reduce(
    (initial, cartItem) => initial + cartItem.quantity * cartItem.price,
    0
  );
  let platformFees = 20;
  let deliveryCharge = 50;
  let convenienceFees = 30;
  let totalPrice =
    priceOfItems + platformFees + deliveryCharge + convenienceFees;

  return (
    <dialog ref={dialog} className="bg-stone-900 overflow-x-hidden ">
      <section className="min-h-64 my-20 text-slate-100 w-[400px] max-[400px]:w-[360px] sm:w-[500px] lg:w-[600px]  bg-stone-900 flex flex-col justify-center items-center gap-5 rounded  ">
        <div className="flex justify-start w-[80%] mb-10 gap-10">
          <h1>CART</h1>
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
        </div>

        {items.length == 0 && (
          <h1 className="text-2xl text-slate-100">Your Cart is Empty</h1>
        )}
        {items.length > 0 &&
          items.map((item, ind) => {
            return (
              <div key={ind} className="flex gap-5 w-[80%] max-[420px]:w-[92%]">
                <div className="flex flex-col gap-5">
                  <img
                    className="w-44 max-[420px]:w-32 h-56 max-[420px]:h-40 rounded shadow-md shadow-slate-100"
                    src={item.image}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h2>{item.title}</h2>
                  <div className="flex flex-col gap-2">
                    <p>quantity</p>
                    <div className="flex gap-2 my-1 items-center">
                      <motion.button
                        whileTap={{
                          scale: [0.8, 1],
                          transition: { duration: 0.2, ease: "easeInOut" },
                          times: [0.2, 0.3],
                        }}
                        onClick={() => decreaseItem(item.title)}
                        className="bg-stone-800 border border-slate-100 px-3 py-1 rounded"
                      >
                        -
                      </motion.button>

                      <p>{item.quantity}</p>
                      <motion.button
                        whileTap={{
                          scale: [0.8, 1],
                          transition: { duration: 0.2, ease: "easeInOut" },
                          times: [0.2, 0.3],
                        }}
                        onClick={() => increaseItem(item.title)}
                        className="bg-stone-800 border border-slate-100 px-3 py-1 rounded"
                      >
                        +
                      </motion.button>
                    </div>
                  </div>
                  <p>price: {item.quantity * item.price + " INR"}</p>
                </div>
              </div>
            );
          })}
        {items.length != 0 && (
          <div className="flex gap-5 w-[80%] max-[420px]:gap-4 max-[420px]:w-[95%] mt-20 justify-center ">
            <div className="flex flex-col gap-2">
              <p>Total MRP : </p>
              <p>Platfrom Fees : </p>
              <p>Delivery Charge :</p>
              <p>Order Total : </p>
            </div>
            <div className="flex flex-col gap-2">
              <p>{priceOfItems}</p>
              <p>{platformFees}</p>
              <p>{deliveryCharge}</p>
              <p>{totalPrice}</p>
            </div>
          </div>
        )}

        <form method="dialog">
          <motion.button
            className="bg-slate-200 mt-10 text-stone-900 py-2 px-5 rounded"
            whileTap={{
              scale: [0.8, 1],
              transition: { duration: 0.2, ease: "easeInOut" },
              times: [0.2, 0.3],
            }}
          >
            close
          </motion.button>
        </form>
      </section>
    </dialog>
  );
});
