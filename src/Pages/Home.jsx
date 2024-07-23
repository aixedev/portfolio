import { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import { motion } from 'framer-motion';
import config from '../../config.json';
import useLanyard from '../Hook/useLanyard';
import { Helmet } from "react-helmet";

const Home = () => {
    const data = useLanyard();
    const spotifyStatus = data ? data.spotify : false;

    const [currentTime, setCurrentTime] = useState('');

useEffect(() => {
    const intervalId = setInterval(() => {
        const now = new Date();
        const options = { 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit', 
            hour12: true 
        };
        const formattedTime = now.toLocaleString('en-US', options);
        const formattedDate = `${now.getDate()}${getOrdinalSuffix(now.getDate())} ${now.toLocaleString('en-US', { month: 'short', year: 'numeric' })} • ${formattedTime}`;
        setCurrentTime(formattedDate);
    }, 1000);
    return () => clearInterval(intervalId);
}, []);

function getOrdinalSuffix(date) {
    if (date > 3 && date < 21) return "th";
    switch (date % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
}


    // Lourity
    return (
        <div>
            <Helmet>
                <title>aixe.dev</title>
            </Helmet>

            <Navbar />

            <div className='sm:ml-32'>
                <div className='mx-auto max-w-4xl px-8 sm:px-0'>
                    <motion.div initial={{ opacity: 0, translateY: 30 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.3 }}>
                        <h1 className='font-display text-3xl font-bold tracking-normal text-gray-300 sm:text-6xl'>Hello, welcome to <br />
<span className="relative whitespace-nowrap" style={{ color: "#3730a3" }}><svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[0.58em] w-full fill-current" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg><span className="relative"> Aixe's </span></span>
                            universe.</h1>

                        <div className='flex gap-4 mt-8'>
                            <a onClick={() => window.location.href = config.github} target='_blank'><i class="fa-brands fa-github cursor-pointer duration-300 hover:text-altindigo text-lg"></i></a>
                            <a onClick={() => window.location.href = config.linkedin} target='_blank'><i class="fa-brands fa-linkedin-in cursor-pointer duration-300 hover:text-altindigo text-lg"></i></a>
                            <a onClick={() => window.location.href = config.discord} target='_blank'><i class="fa-brands fa-discord cursor-pointer duration-300 hover:text-altindigo text-lg"></i></a>
                            <a onClick={() => window.location.href = config.spotify} target='_blank'><i class="fa-brands fa-spotify cursor-pointer duration-300 hover:text-altindigo text-lg"></i></a>
                            <a onClick={() => window.location.href = config.instagram} target='_blank'><i class="fa-brands fa-instagram cursor-pointer duration-300 hover:text-altindigo text-lg"></i></a>
                            <a onClick={() => window.location.href = `mailto:${config.mail}`} target='_blank'><i class="fa-solid fa-envelope cursor-pointer duration-300 hover:text-altindigo text-lg"></i></a>
                        </div>

                        <div className='flex mt-6 gap-2 items-center'>
                            <i class="fa-regular fa-clock"></i>
                            <span>{currentTime || "1st Jan 2024 • 12:00:00 PM/AM"}</span>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, translateY: 30 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.6 }}>
                        {spotifyStatus ? (
                            <div className='duration-300 mt-4 ring-1 ring-border hover:ring-border-hv min-h-16 w-auto sm:w-96 rounded-md py-3 px-3 hover:scale-105'>
                                <a href="https://spotify.com/" target='_blank'>
                                    <div className='flex gap-4'>
                                        <img className='w-12 rounded-md' src={spotifyStatus.album_art_url} alt={spotifyStatus.song} />
                                        <div className='flex flex-col'>
                                            <span className='font-semibold text-sm sm:text-regular'>{spotifyStatus.song}</span>
                                            <span className='text-xs'><i class="fa-brands fa-spotify text-spotify"></i> Spotify</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ) : (
                            <div className='duration-300 mt-4 ring-1 ring-border hover:ring-border-hv min-h-16 w-auto sm:w-96 rounded-md py-3 px-3 hover:scale-105'>
                                <a href="https://spotify.com/" target='_blank'>
                                    <div className='flex gap-4'>
                                        <img className='w-12 rounded-md' src="/song.png" alt="song icon" />
                                        <div className='flex flex-col'>
                                            <span className='font-semibold text-sm sm:text-regular'>Not listening to anything</span>
                                            <span className='text-xs'><i class="fa-brands fa-spotify text-spotify"></i> Spotify</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        )
                        }
                    </motion.div >
                </div >
            </div >

            <div className='fixed bottom-0 left-0 ml-4 mb-4'>
                <span className="top-20 left-20 right-20 shadow-[30px_0_1000px_70px_#3730a3]"></span>
            </div>
        </div >
    )
}

export default Home
