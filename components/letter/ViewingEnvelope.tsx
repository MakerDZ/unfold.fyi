'use client';

import Image from 'next/image';
import { OverlappingCardsSection } from '../ui/photoframe';
import { type MediaItem } from '../ui/photoframe';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

// Example data structure
interface Section {
    name: string;
    reading: string;
    images: MediaItem[];
}

const sectionData: Section[] = [
    {
        name: 'The Beginning',
        reading: `As I write this letter, I find myself reflecting on the journey that brought me here. The late nights coding, the countless debugging sessions, and the moments of pure joy when everything finally clicked into place.

Remember that first project? The one where we stayed up until 4 AM, fueled by coffee and determination, just to get that one feature working perfectly. It wasn't just about the code – it was about proving to ourselves that we could do it.`,
        images: [
            {
                url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                type: 'video' as const,
                alt: 'Big Buck Bunny',
            },
            {
                url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
                type: 'video' as const,
                alt: 'Elephants Dream',
            },
            {
                url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
                type: 'video' as const,
                alt: 'For Bigger Blazes',
            },
        ],
    },
    {
        name: 'The Journey',
        reading: `Looking at these photos now, each one tells a story. The digital clock display reminds me of our obsession with precision and timing. The racing game screenshot captures our love for optimization and performance. And that control room setup? It's a testament to how far we've come in creating intuitive interfaces.

I hope you're still pushing boundaries and challenging yourself. Don't forget the excitement of learning something new, the satisfaction of solving complex problems, and the joy of creating something meaningful.`,
        images: [
            {
                url: 'https://avatars.githubusercontent.com/u/1574028?v=4',
                type: 'image' as const,
                alt: 'Racing game with cars',
            },
            {
                url: 'https://avatars.githubusercontent.com/u/132349795?s=400&u=f082772b4220caf24a1b6e033318558a3f78d8eb&v=4',
                type: 'image' as const,
                alt: 'Futuristic control room',
            },
            {
                url: 'https://avatars.githubusercontent.com/u/720186?v=4',
                type: 'image' as const,
                alt: 'Digital clock display',
            },
        ],
    },
    {
        name: 'The Future',
        reading: `Keep building, keep learning, and most importantly, keep enjoying the process. The best code isn't just functional – it's a form of self-expression, a way to make our mark on the digital world.

And remember, whenever you feel stuck or overwhelmed, take a step back, put on your favorite coding playlist (yes, the one playing right now), and remind yourself why you fell in love with programming in the first place.

Best regards,
Your Past Self`,
        images: [
            {
                url: 'https://avatars.githubusercontent.com/u/132349795?s=400&u=f082772b4220caf24a1b6e033318558a3f78d8eb&v=4',
                type: 'image' as const,
                alt: 'Futuristic control room',
            },
            {
                url: 'https://avatars.githubusercontent.com/u/720186?v=4',
                type: 'image' as const,
                alt: 'Digital clock display',
            },
            {
                url: 'https://avatars.githubusercontent.com/u/1574028?v=4',
                type: 'image' as const,
                alt: 'Racing game with cars',
            },
        ],
    },
];

export default function ViewingEnvelope() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = sectionRefs.current.findIndex(
                            (ref) => ref === entry.target
                        );
                        if (index !== -1) {
                            setCurrentSectionIndex(index);
                        }
                    }
                });
            },
            {
                threshold: 0.5, // Trigger when 50% of the section is visible
                rootMargin: '-100px 0px', // Adjust based on your sticky header height
            }
        );

        sectionRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const setSectionRef = (el: HTMLDivElement | null, index: number) => {
        sectionRefs.current[index] = el;
    };

    return (
        <div className="w-full h-screen bg-locked-primary flex flex-col overflow-hidden">
            {/* Header Section - Mobile Only */}
            <div className="w-full h-16 flex flex-row justify-between items-center px-4 md:hidden">
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={38}
                    height={38}
                />
                <p className="text-lg font-bold font-itim text-[#6B4D2E]">
                    {sectionData[currentSectionIndex].name}
                </p>
                <div className="w-10 h-10 "></div>
            </div>

            {/* Sticky Image Section */}
            <div className="w-full px-4 md:px-8 lg:px-12 md:pt-12 pt-8 bg-locked-primary sticky top-0 z-10">
                <OverlappingCardsSection
                    mediaItems={sectionData[currentSectionIndex].images}
                    onMediaClick={(index) => {
                        console.log(`Clicked media ${index}`);
                    }}
                />
            </div>

            {/* Scrollable Reading Section */}
            <div className="flex-1 overflow-y-auto">
                <div className="px-4 md:px-8 lg:px-12 pb-36">
                    <div className="max-w-3xl mx-auto space-y-32">
                        {sectionData.map((section, index) => (
                            <div
                                key={index}
                                ref={(el) => setSectionRef(el, index)}
                                className="space-y-6 text-[#6B4D2E]"
                            >
                                <h2 className="text-2xl md:text-3xl font-bold mb-6 opacity-50">
                                    {section.name}
                                </h2>
                                {section.reading
                                    .split('\n\n')
                                    .map((paragraph, pIndex) => (
                                        <p
                                            key={pIndex}
                                            className="text-lg leading-relaxed"
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Fixed Music Player */}
            <div className="w-full bg-[#F8E3C5] border-t border-[#F3D5A7] p-4 fixed bottom-0 left-0 right-0">
                <div className="max-w-3xl mx-auto flex items-center gap-4">
                    {/* Thumbnail */}
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#F3D5A7] flex-shrink-0">
                        <Image
                            src="/images/letter-icon.png"
                            alt="Now playing"
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Controls */}
                    <div className="flex-1">
                        <div className="flex items-center justify-center gap-4">
                            <button className="p-2 text-[#6B4D2E] hover:text-[#8B6D4E] transition-colors">
                                <SkipBack className="w-5 h-5" />
                            </button>
                            <button
                                className="p-3 bg-[#F3D5A7] rounded-full text-[#6B4D2E] hover:bg-[#E3C597] transition-colors"
                                onClick={() => setIsPlaying(!isPlaying)}
                            >
                                {isPlaying ? (
                                    <Pause className="w-6 h-6" />
                                ) : (
                                    <Play className="w-6 h-6" />
                                )}
                            </button>
                            <button className="p-2 text-[#6B4D2E] hover:text-[#8B6D4E] transition-colors">
                                <SkipForward className="w-5 h-5" />
                            </button>
                        </div>
                        {/* Progress Bar */}
                        <div className="mt-2 h-1 bg-[#F3D5A7] rounded-full">
                            <div
                                className="h-full w-1/3 bg-[#6B4D2E] rounded-full"
                                style={{
                                    transition: 'width 0.1s linear',
                                }}
                            />
                        </div>
                    </div>

                    {/* Time */}
                    <div className="text-sm text-[#6B4D2E] font-medium">
                        2:45
                    </div>
                </div>
            </div>
        </div>
    );
}