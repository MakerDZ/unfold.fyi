import Image from 'next/image';
import Logo from '../logo';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Locked() {
    return (
        <div className="w-full h-screen bg-locked-primary">
            {/* Mobile Layout */}
            <div className="md:hidden h-screen bg-[#FDF7EE] flex flex-col px-4 ">
                <div className="w-full flex justify-center">
                    <Logo />
                </div>
                <div className="flex-1 flex flex-col justify-start items-center">
                    <div className="w-full flex justify-center mb-16">
                        <Image
                            src="/images/bird-thumbnail.png"
                            alt="Locked"
                            width={300}
                            height={300}
                            className="w-[95%] max-h-[350px] object-cover rounded-2xl md:rounded-3xl lg:rounded-[2rem]"
                        />
                    </div>
                    <p className="text-center font-itim font-bold text-xl text-[#4C3418] mb-16">
                        You&apos;ve got an envelope!
                        <br />
                        Unlock it to read it.
                    </p>
                    <div className="w-full space-y-3 flex flex-col items-center">
                        <Input
                            type="text"
                            placeholder="Enter Password"
                            className="w-11/12 mx-auto  h-11 border-[#C29E7C] border-2 focus:ring-0 focus-visible:ring-0 focus-visible:border-[#C29E7C] focus-visible:outline-none [&>*]:text-lg placeholder:text-lg"
                        />
                        <Button
                            variant="outline"
                            className="w-11/12 mx-auto h-11 bg-[#C27C5E] text-white text-lg font-bold hover:bg-[#C27C5E]/90 hover:text-white hover:cursor-pointer border-0 transition-transform active:scale-95"
                        >
                            Unlock
                        </Button>
                    </div>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden w-full h-full md:flex flex-row">
                <div className="w-1/2 flex items-center justify-center">
                    <Image
                        src="/images/bird-thumbnail.png"
                        alt="Locked"
                        width={300}
                        height={300}
                        className="w-full h-full rounded-r-3xl object-cover object-center shadow-lg"
                    />
                </div>
                <div className="w-1/2 flex flex-col py-3 justify-center">
                    <div className="max-w-[500px] mx-auto space-y-2.5">
                        <div className="w-full flex justify-center">
                            <Logo />
                        </div>
                        <div className="w-full flex flex-col space-y-12">
                            <p className="text-center font-black text-xl lg:text-2xl font-itim w-8/12 mx-auto text-[#4C3418]">
                                You&apos;ve got an envelope! Unlock it to read
                                it.
                            </p>
                            <div className="w-full flex flex-col space-y-3">
                                <Input
                                    type="text"
                                    placeholder="Enter Password"
                                    className="w-10/12 h-11 mx-auto border-[#C29E7C] border-2 focus:ring-0 focus-visible:ring-0 focus-visible:border-[#C29E7C] focus-visible:outline-none [&>*]:text-lg placeholder:text-lg"
                                />
                                <Button
                                    variant="outline"
                                    className="w-10/12 mx-auto bg-button-primary text-white text-lg font-bold h-11 hover:bg-button-primary/90 hover:text-white hover:cursor-pointer transition-transform active:scale-95"
                                >
                                    Unlock
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
