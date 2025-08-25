'use client';

import LayoutWrapper from '../layout-wrapper';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Logo from '../logo';

export default function AboutEnvelope() {
    return (
        <div className="w-full h-screen bg-locked-primary">
            {/* Mobile Layout */}
            <div className="md:hidden min-h-screen w-full flex flex-col px-2 min-[320px]:px-4">
                <div className="w-full flex justify-center pt-4 min-[320px]:pt-6">
                    <Logo />
                </div>
                <motion.div
                    className="w-[200px] min-[320px]:w-[250px] mx-auto my-6 min-[320px]:my-9"
                    animate={{
                        y: [0, -10, 0],
                        scale: [1, 1.02, 1],
                        filter: [
                            'brightness(1)',
                            'brightness(1.1)',
                            'brightness(1)',
                        ],
                    }}
                    transition={{
                        duration: 4,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                    whileHover={{
                        scale: 1.05,
                        filter: 'brightness(1.15)',
                        transition: { duration: 0.3 },
                    }}
                    style={{ cursor: 'pointer' }}
                >
                    <Image
                        src="/images/envelope-image.png"
                        alt="Envelope"
                        width={300}
                        height={100}
                        className="w-full h-full object-cover object-center"
                    />
                </motion.div>
                <div className="w-full flex-1">
                    <div className="w-full px-2 min-[320px]:px-4 sm:px-8 py-4 min-[320px]:py-6 sm:py-12">
                        <div className="mb-5 relative">
                            <Image
                                src="https://avatars.githubusercontent.com/u/87943692?v=4"
                                alt="Profile Picture"
                                width={110}
                                height={110}
                                className="rounded-full w-[60px] h-[60px] min-[320px]:w-[70px] min-[320px]:h-[70px] sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px]"
                            />
                            {/* Letter Section */}
                            <div className="max-w-[150px] min-[320px]:max-w-[180px] sm:max-w-[300px] md:max-w-[280px] min-w-[140px] min-[320px]:min-w-[160px] sm:min-w-[240px] md:min-w-[208px] -rotate-6 bg-[#F9DEB2] rounded-xl absolute top-0 left-16 min-[320px]:left-20 sm:left-32 md:left-36 flex flex-row items-center justify-center p-1.5 min-[320px]:p-2">
                                <div className="text-xs sm:text-sm md:text-md relative w-full text-[#5A4B34] border-2 border-dashed border-[#E4B87B] rounded-lg py-1.5 px-2.5 break-words whitespace-pre-wrap">
                                    <span>
                                        <Image
                                            src="/images/letter-icon.png"
                                            alt="Letter"
                                            width={20}
                                            height={20}
                                            className="absolute top-1 left-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                                        />
                                    </span>
                                    <p className="pl-6 sm:pl-7">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Quisquam, quos.
                                    </p>
                                </div>
                                <Image
                                    src="/images/letter-badge.png"
                                    alt="Letter"
                                    width={25}
                                    height={25}
                                    className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
                                />
                            </div>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-[#5A4B34] pb-6 sm:pb-9">
                            Zed
                        </h3>
                        <p className="text-base sm:text-lg text-[#54462D] w-full md:w-3/4 overflow-y-scroll max-h-[300px] sm:h-[calc(100%-200px)] scrollbar scrollbar-thin scrollbar-thumb-[#E4B87B] scrollbar-track-[#F9DEB2] pr-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, quos. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Quisquam, quos. Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                            Quisquam, quos. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Quisquam, quos.
                            <br />
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, quos. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Quisquam, quos. Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                            Quisquam, quos. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Quisquam, quos.
                            <br />
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, quos. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Quisquam, quos. Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                            Quisquam, quos. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Quisquam, quos.
                        </p>
                    </div>
                </div>
            </div>

            {/* Desktop Layout */}
            <LayoutWrapper className="hidden w-full h-full md:flex flex-row">
                <div className="w-1/2 px-14 py-20">
                    <div className="mb-5 relative">
                        <Image
                            src="https://avatars.githubusercontent.com/u/87943692?v=4"
                            alt="Profile Picture"
                            width={110}
                            height={110}
                            className="rounded-full"
                        />
                        <div className="max-w-[280px] min-w-[208px] -rotate-6 bg-[#F9DEB2] rounded-xl absolute top-0 left-36 flex flex-row items-center justify-center p-2">
                            <div className="text-md relative w-full text-[#5A4B34] border-2 border-dashed border-[#E4B87B] rounded-lg py-1.5 px-2.5 break-words whitespace-pre-wrap">
                                <span>
                                    <Image
                                        src="/images/letter-icon.png"
                                        alt="Letter"
                                        width={23}
                                        height={23}
                                        className="absolute top-1 left-2"
                                    />
                                </span>
                                <p>
                                    ㅤㅤLorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam, quos.
                                </p>
                            </div>
                            <Image
                                src="/images/letter-badge.png"
                                alt="Letter"
                                width={30}
                                height={30}
                                className="absolute bottom-5 right-5"
                            />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#5A4B34] pb-9">
                        Zed
                    </h3>
                    <p className="text-lg text-[#54462D] w-3/4 overflow-y-scroll h-[calc(100%-200px)] scrollbar scrollbar-thin scrollbar-thumb-[#E4B87B] scrollbar-track-[#F9DEB2]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quos. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Quisquam, quos. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quos.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quos. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Quisquam, quos. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quos.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quos. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Quisquam, quos. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quos.
                    </p>
                </div>
                <div className="w-1/2 h-screen flex items-center justify-center">
                    <motion.div
                        className="w-9/12 mx-auto"
                        animate={{
                            y: [0, -10, 0],
                            scale: [1, 1.02, 1],
                            filter: [
                                'brightness(1)',
                                'brightness(1.1)',
                                'brightness(1)',
                            ],
                        }}
                        transition={{
                            duration: 4,
                            ease: 'easeInOut',
                            repeat: Infinity,
                            repeatType: 'reverse',
                        }}
                        whileHover={{
                            scale: 1.05,
                            filter: 'brightness(1.15)',
                            transition: { duration: 0.3 },
                        }}
                        style={{ cursor: 'pointer' }}
                    >
                        <Image
                            src="/images/envelope-image.png"
                            alt="Envelope"
                            width={300}
                            height={100}
                            className="w-full h-full object-cover object-center"
                        />
                    </motion.div>
                </div>
            </LayoutWrapper>
        </div>
    );
}
