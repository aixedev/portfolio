import React from 'react'
import Navbar from '../../Components/Navbar'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'
// Lourity
const Development = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar />

            <div className='sm:ml-32 mb-12'>
                <div className='mx-auto max-w-4xl px-8 sm:px-0'>
                    <motion.div initial={{ opacity: 0, translateY: 30 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.3 }}>
                        <h1 className='text-5xl font-bold mr-4'>Introducing My Blog;<br />Development and Life</h1>
                        <div className='flex gap-4 mt-5 items-center'>
                            <img className='rounded-full w-6' src="https://i.ibb.co/Z14JPtq/image.png" alt="aixe" />
                            <span><span onClick={() => navigate("/")} className='cursor-pointer hover:text-altindigo duration-300'>Aixe</span> • published on 02-07-2023 • 2 min read</span>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, translateY: 30 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.4 }}>
                        <p className='text-gray-300 mt-6 text-lg'>
                            Hello everyone! I'm excited to announce that I'll be sharing my articles on my website from now on. As a web developer and someone who loves writing, I'm looking forward to sharing my experiences and insights with you all. My blog will focus primarily on two areas: development and life.
                        </p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, translateY: 30 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.5 }}>
                        <h2 className='font-bold text-3xl mt-8'>Development</h2>
                        <p className='text-gray-300 mt-6 text-lg'>
                            On the development side, I'll be writing about my experiences with web development, including front-end and back-end development, as well as my experiences with various programming languages and frameworks. I'll also be sharing tips and tricks that I've learned along the way, as well as my thoughts on industry trends and emerging technologies.
                        </p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, translateY: 30 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.6 }}>
                        <h2 className='font-bold text-3xl mt-8'>Life</h2>
                        <p className='text-gray-300 mt-6 text-lg'>
                            But it's not all about development! I also want to share a bit about my life outside of work. I'll be writing about my hobbies, my travels, and my experiences with personal growth and self-improvement. I believe that balance is key in life, and I want to share both my professional and personal sides with you all.
                        </p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, translateY: 30 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.7 }}>
                        <p className='text-gray-300 mt-4 text-lg'>
                            I'm excited to begin this journey and I hope you'll join me along the way. If there are any topics you'd like me to cover, feel free to reach out and let me know. Thank you for reading and I look forward to sharing my thoughts with you all!
                        </p>
                    </motion.div>
                </div>
            </div>
        </div >
    )
}

export default Development
