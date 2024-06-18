import { motion } from "framer-motion";
import { useContext } from "react";
import { CreateContext } from "../shoppingCart/Cart-details";
export default function Product({ title, image, price }) {
  const { addItemstoCart, items } = useContext(CreateContext);

  return (
    <section className=" bg-stone-800 h-full w-full flex flex-col justify-center items-center rounded-md overflow-hidden">
      <div className="h-[70%] w-full max-[580px]:h-[60%] overflow-hidden">
        <img className="w-full min-h-[100%] " src={image} />
      </div>

      <div className="h-[30%] max-[580px]:h-[40%] flex flex-col justify-center gap-6 items-center">
        <div className="text-2xl flex flex-col w-full justify-center items-center">
          <h1 className="flex items-center">{title}</h1>
          <p className="text-yellow-400">{price} INR</p>
        </div>
        <motion.button
          className="h-1/3 aspect-[2] bg-slate-200 text-stone-900 border hover:border-slate-100 hover:bg-stone-800 px-[10%] hover:text-slate-100 transition-all ease-linear text-2xl md:text-3xl rounded-md"
          whileTap={{
            scale: [0.8, 1],
            transition: { duration: 0.2, ease: "easeInOut" },
            times: [0.2, 0.3],
          }}
          onClick={() => addItemstoCart(title, image, 1, price)}
        >
          Add
        </motion.button>
      </div>
    </section>
  );
}
