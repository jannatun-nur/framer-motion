
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
    
    
    
    
    
    
    
    
    
    
    className="bg-white">
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">


        <div className="md:flex md:items-center md:gap-12">
         <p className="text-blue-900 font-bold lg:text-2xl hidden lg:block">ModernCPA</p>
        </div>
  
        <motion.div 
                      
        
        className=" md:block">
          <nav aria-label="Global">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a 
                
                
                
                className="text-blue-900 font-semibold lg:text-xl
                hover:bg-blue-900 hover:text-white hover:px-3 hover:py-2" href="#contact"> About </a>
              </li>
  
              <li>
                <a className="text-blue-900 font-semibold lg:text-xl
                hover:bg-blue-900 hover:text-white hover:px-3 hover:py-2" href="#service"> Services </a>
              </li>
  
              <li>
                <a className="text-blue-900 font-semibold lg:text-xl
                hover:bg-blue-900 hover:text-white hover:px-3 hover:py-2" href="#contact"> Contact </a>
              </li>
  
           
            </ul>
          </nav>
        </motion.div>
  
        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            
            <div 
            
            
            
            className=" sm:flex">
              <motion.button
              whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}

                className="rounded-md  px-5 py-2.5 text-sm  text-blue-900 font-semibold
                hover:text-white hover:bg-blue-900 shadow-2xl shadow-blue-900"
                href="#"
              >
                Register
              </motion.button>
            </div>
          </div>
  
         
        </div>
      </div>
    </div>
  </motion.header>
  );
};

export default Header;
