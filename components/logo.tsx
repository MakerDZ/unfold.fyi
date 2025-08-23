import Image from 'next/image';

export default function Logo() {
    return (
        <div className="flex items-center gap-2 py-4">
            <Image src="/images/logo.png" alt="Logo" width={38} height={38} />
            <span className="text-xl md:text-2xl font-bold font-itim text-[#6B4D2E]">
                Unfold FYI
            </span>
        </div>
    );
}
