import LetterPreview from '@/components/app/LetterPreview';
import LayoutWrapper from '@/components/layout-wrapper';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import ProfileMenu from '@/components/app/ProfileMenu';

export default function App() {
    return (
        <div className="w-full min-h-screen bg-locked-primary">
            <LayoutWrapper className="md:max-w-screen-md sm:max-w-screen-sm max-w-screen-xs mx-auto">
                <nav className="px-6 py-4 flex flex-row justify-between items-center sticky top-0 bg-locked-primary z-10">
                    <div className="flex flex-row items-center gap-3">
                        <Image
                            src="/images/logo.png"
                            alt="Logo"
                            width={38}
                            height={38}
                        />
                        <p className="text-lg font-bold font-itim text-[#6B4D2E] hidden sm:block">
                            UnFold FYI
                        </p>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                        <Button
                            variant="outline"
                            className=" mx-auto h-9 rounded-lg bg-[#C27C5E] text-white text-md font-medium hover:bg-[#C27C5E]/90 hover:text-white hover:cursor-pointer border-0 transition-transform active:scale-95"
                        >
                            Create Letter
                        </Button>
                        <Separator
                            orientation="vertical"
                            className="!bg-[#6B4D2E]/20 h-6"
                        />
                        <ProfileMenu />
                    </div>
                </nav>
                <div className="py-10 px-6 flex flex-col gap-4">
                    <LetterPreview />
                    <LetterPreview />
                    <LetterPreview />
                    <LetterPreview />
                    <LetterPreview />
                </div>
            </LayoutWrapper>
        </div>
    );
}
