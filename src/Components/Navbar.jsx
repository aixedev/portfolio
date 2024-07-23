import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <div className='flex justify-end'>
        <span className="top-20 left-20 right-20 shadow-[0_0_1000px_70px_#3730a3]"></span>
      </div>

      <div className='w-full flex justify-start items-center mx-auto max-w-4xl px-8 my-20'>
        <div className='flex gap-10 items-center'>
          <i onClick={() => navigate("/")} className="fa-solid fa-earth-europe cursor-pointer duration-300 hover:text-altindigo"></i>
          <span onClick={() => navigate("/projects")} className='cursor-pointer duration-300 hover:text-altindigo'>projects</span>
          <span onClick={() => navigate("/blog")} className='cursor-pointer duration-300 hover:text-altindigo'>blog</span>
          <span onClick={() => navigate("/contact")} className='cursor-pointer duration-300 hover:text-altindigo'>contact</span>
          <div>
            <i onClick={() => setMenu(!menu)} className="fa-solid fa-caret-down cursor-pointer duration-300 hover:text-altindigo"></i>
            {menu && (
              <motion.div initial={{ opacity: 0, translateY: 30 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.1 }} className="flex flex-col absolute ring-1 ring-white px-4 pr-12 py-2 gap-3 rounded-sm">
                <span onClick={() => navigate("/avatar")} className="cursor-pointer duration-300 text-xs hover:text-altindigo">avatar</span>
                <span onClick={() => navigate("/banner")} className="cursor-pointer duration-300 text-xs hover:text-altindigo">banner</span>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar