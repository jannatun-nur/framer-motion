import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div 
   
    
    className="hero bg-white min-h-screen">
      <div id='contact'
      className="hero-content flex-col lg:flex-row-reverse">
        <div
        
        
       
         className="text-center lg:text-left">


          <motion.h1 
          initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 4, y: 0 }}
        transition={{ duration: 4 }}
          
          className="text-5xl font-bold text-blue-900 text-center">About Us</motion.h1>



          <p className="py-6 text-gray-800 text-xl">
           <span className="text-blue-900 font-bold "> MODERN CPA</span> company provides expert
            financial services to individuals and businesses. We are providing our services since 2007. 
            These firms
            specialize in tax planning, preparation, and compliance, ensuring
            clients meet legal obligations while minimizing liabilities. We
            offer auditing services to verify financial accuracy, enhance
            transparency, and build trust with stakeholders. CPA companies also
            provide financial consulting, helping businesses develop strategies
            for growth, cost management, and long-term success. Additionally,
            they manage bookkeeping and payroll services, keeping records
            organized and compliant. With a focus on accuracy, confidentiality,
            and tailored advice, CPA firms are trusted partners in navigating
            complex financial landscapes and achieving financial stability. <span className="text-xl text-blue-900 font-bold ">Your trust 
            is our strength.</span>
          </p>
        </div>

        <motion.div 
        
        initial={{ opacity: 4, y: 60 }}
        animate={{ opacity: 4, y: 0, scale:1.0 }}
        transition={{ duration: 5 }}
        whileHover={{ scale: 1.2 }}
        whileFocus={{scale: 1.0}}
        
        className="card bg-white  shadow-blue-800 w-full max-w-sm shrink-0 shadow-2xl">
          <motion.div 
          
          initial={{ opacity: 4, y: 60 }}
        animate={{ opacity: 4, y: 0 }}
        transition={{ duration: 4 }}
        

          className="text-center ">

   
            <p className="text-2xl text-blue-900 font-semibold my-4">
              Contact with us
            </p>
            <p className="text-gray-800 ">Email: info@moderncpa.com</p>
            <p className="text-gray-800 ">Phone: (123) 456-7890</p>
          </motion.div>

          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-blue-900 text-xl font-bold">
                  Name
                </span>
              </label>
              <input
                type="name"
                placeholder="Your name"
                className="input input-bordered border
          border-blue-800 bg-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-blue-900 text-xl font-bold">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="@gmail.com"
                className="input input-bordered
          border
          border-blue-800 bg-white"
                required
              />
            </div>
            <div className="form-control mt-6">
              <motion.button
              whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
 
              
              
               className="py-3 text-xl rounded-tr-badge text-white bg-gradient-to-r from-cyan-500 to-blue-800">
                Send message
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
