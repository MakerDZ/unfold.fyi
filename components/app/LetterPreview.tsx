import Image from 'next/image';

export default function LetterPreview() {
    return (
        <div className="bg-[#F8E3C5]/90 backdrop-blur-sm border-2 border-[#F3D5A7] rounded-3xl p-4 hover:cursor-pointer relative md:h-56 sm:h-48 h-44 transition-transform duration-100 active:scale-[0.98] hover:scale-[1.01] select-none">
            <div className="flex flex-row items-center mb-1">
                <p className="text-[#b59e84] font-bold text-xs sm:text-sm">
                    2024-09-22
                </p>
                <Image
                    src="/images/letter-icon.png"
                    alt="Letter"
                    width={20}
                    height={20}
                    className=" w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                />
            </div>
            <h1 className="text-base sm:text-lg md:text-lg text-[#6B4D2E] font-bold">
                To Someone
            </h1>
            <p className="text-[#6B4D2E] text-xs sm:text-sm truncate">
                I'm so excited to see you! I've been thinking about you a lot
                lately and I wanted to tell you how much I care about you. I
                hope you're doing well and I'm looking forward to seeing you
                soon.
            </p>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 sm:w-4/12 w-5/12  md:h-24 h-16 overflow-hidden">
                <Image
                    src="/images/envelope-image.png"
                    alt="Envelope"
                    width={300}
                    height={100}
                    className="w-full absolute top-0 object-cover object-center"
                />
            </div>
        </div>
    );
}
