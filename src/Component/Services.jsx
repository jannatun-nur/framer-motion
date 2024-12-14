import { motion } from "framer-motion";

const services = [
  { 
    title: "Tax Planning", 
    desc: "Optimize your tax savings.", 
    image: "/image/tax.png" 
  },
  { 
    title: "Auditing", 
    desc: "Ensure financial accuracy.", 
    image: "/image/auting.png" 
  },
  { 
    title: "Financial Consulting", 
    desc: "Plan for your future.", 
    image: "/image/plan.png" 
  },
  { 
    title: "Bookkeeping", 
    desc: "Stay organized with your records.", 
    image: "/image/book.png" 
  },
];

const Services = () => {
  return (
    <section id="services" style={{ padding: "40px", textAlign: "center" }}>
      <motion.p
        initial={{ opacity: 0 , y: -60}}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
       className="text-xl lg:text-4xl text-center font-semibold my-4 text-blue-900"> Our services</motion.p>
      <motion.div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}
        initial={{ opacity: 0 , x: -60}}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 3 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            style={{
             
              boxShadow: "0px 4px 30px rgba(30, 58, 138, 0.4)",
              margin: "10px",
              padding: "20px",
              width: "250px",
              height: "300px", // Fixed height for cards
              borderRadius: "5px",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                filter: "brightness(70%)", // Darken the image for opacity effect
                zIndex: 1,
            }}
            whileHover={{ scale: 1.1 }}
          >
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark overlay for better text readability
                padding: "10px",
                borderRadius: "5px",
                height: "300px",
                
              }}
            >
              <h3 className="text-2xl lg:text-3xl mt-20 py-3 ">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
