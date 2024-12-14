import banner from '../../public/image/banner.png'
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="hero w-full">
 
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
      
        <div className="hero w-full min-h-screen ">


  <div  className="hero-content flex-col lg:flex-row-reverse">
    <motion.img
    initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      src={banner}
      className=" rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-3xl text-center lg:text-start lg:text-5xl font-bold text-blue-900">Modern CPA <br></br>- Your Trusted Financial Advisors</h1>
      <p className="py-6 text-gray-800 lg:text-2xl text-xl text-center lg:text-start">
      Empowering businesses and individuals to achieve financial success.
      </p>
      <button
      onClick={() => alert("Free Consultation Form Coming Soon!")}
       className="bg-gradient-to-r from-cyan-500 to-blue-800 px-3 py-2 text-xl ml-6 md:ml-44 lg:ml-0
      lg:px-5 lg:py-2 rounded-tl-lg text-white lg:text-2xl">Get a Free Consultation</button>
    </div>
  </div>
</div>
      </motion.div>
    </section>
  );
};

export default Banner;
