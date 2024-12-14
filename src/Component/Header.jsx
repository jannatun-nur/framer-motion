import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
    
    
    className="navbar bg-white sticky zindex-10">
    <div className="navbar-start">
     


      <a className="font-bold text-blue-900 hidden lg:block">Modern CPA</a>
    </div>
    <div className="lg:navbar-center navbar-start">
      <ul className="flex just">
        <li className="font-bold text-blue-900 text-xs lg:text-xl"><a href="#about">About Us</a></li>
        <li className="font-bold text-blue-900 text-xs lg:text-xl"><a href="#services">Services</a></li>
        <li className="font-bold text-blue-900 text-xs lg:text-xl"> <a href="#contact">Contact</a></li>
        <li  className="font-bold text-blue-900 text-xs lg:text-xl"><a className="text-blue-900 bg-white shadow-2xl shadow-blue-900 border 
      border-none hover:bg-blue-300 font-bold block lg:hidden mr-10">Sign Up</a></li>
      </ul>
    </div>
    <div className="navbar-end">
    <li  className="font-bold text-blue-900 text-xs lg:text-xl hidden lg:block"><a className="btn text-blue-900 bg-white shadow-2xl shadow-blue-900 border 
      border-none hover:bg-blue-300 text-xl font-bold block lg:hidden">Sign Up</a></li>
    </div>
  </motion.div>
  );
};

export default Header;
