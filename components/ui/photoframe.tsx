'use client';

import { motion } from 'framer-motion';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
} from '@/components/ui/dialog';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface MediaItem {
    url: string;
    type: 'image' | 'video';
    alt?: string;
    overlay?: {
        clock?: {
            time: string;
            date: string;
            day: string;
            label: string;
        };
    };
}

interface OverlappingCardsSectionProps {
    mediaItems: MediaItem[];
    onMediaClick?: (index: number) => void;
}

export function OverlappingCardsSection({
    mediaItems,
    onMediaClick,
}: OverlappingCardsSectionProps) {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handlePrevious = () => {
        setSelectedIndex((prev) =>
            prev === 0 ? mediaItems.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setSelectedIndex((prev) =>
            prev === mediaItems.length - 1 ? 0 : prev + 1
        );
    };

    const renderMedia = (item: MediaItem) => {
        if (item.type === 'video') {
            return (
                <video
                    src={item.url}
                    className="w-full h-full object-cover"
                    controls={false}
                    muted
                    loop
                    autoPlay
                />
            );
        }
        return (
            <img
                src={item.url}
                alt={item.alt || 'Media content'}
                className="w-full h-full object-cover"
            />
        );
    };

    const renderOverlay = (item: MediaItem) => {
        if (!item.overlay?.clock) return null;

        return (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="text-2xl sm:text-4xl font-bold mb-0.5 sm:mb-2">
                    <span className="text-purple-400">
                        {item.overlay.clock.time.split(':')[0]}:
                    </span>
                    <span className="text-yellow-400">
                        {item.overlay.clock.time.split(':')[1]}
                    </span>
                </div>
                <div className="bg-green-500 text-black px-1.5 py-0.5 rounded text-[10px] sm:text-xs font-semibold mb-0.5 sm:mb-1">
                    {item.overlay.clock.day}
                </div>
                <div className="text-[10px] sm:text-sm text-gray-300">
                    {item.overlay.clock.date}
                </div>
                <div className="absolute bottom-2 sm:bottom-4 bg-yellow-500 text-black px-2 sm:px-3 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold">
                    {item.overlay.clock.label}
                </div>
            </div>
        );
    };

    const cardPositions = [
        {
            className:
                'absolute top-0 sm:top-0 left-1/2 -translate-x-[95%] sm:-translate-x-[85%] z-10',
            rotation: -8,
            hoverRotation: [-8, -5, -10, -7, -8],
            dotColor: 'bg-purple-500',
        },
        {
            className:
                'absolute top-0 sm:top-2 left-1/2 translate-x-[5%] sm:translate-x-[35%] z-20',
            rotation: 8,
            hoverRotation: [8, 11, 5, 9, 8],
            dotColor: 'bg-red-500',
        },
        {
            className:
                'absolute top-8 sm:top-20 left-1/2 -translate-x-[45%] sm:-translate-x-1/2 z-30',
            rotation: 0,
            hoverRotation: [0, 2, -2, 1, 0],
            dotColor: 'bg-blue-500',
        },
    ];

    return (
        <div className="relative w-[92%] max-w-[450px] h-[180px] sm:h-[310px] mx-auto">
            {mediaItems.slice(0, 3).map((item, index) => (
                <Dialog
                    key={index}
                    open={isDialogOpen && selectedIndex === index}
                    onOpenChange={(open) => {
                        setIsDialogOpen(open);
                        if (open) {
                            setSelectedIndex(index);
                        }
                    }}
                >
                    <DialogTrigger asChild>
                        <motion.div
                            className={cardPositions[index].className}
                            style={{ transformOrigin: '50% 0%' }}
                            initial={{ rotate: cardPositions[index].rotation }}
                            whileHover={{
                                rotate: cardPositions[index].hoverRotation,
                                transition: {
                                    duration: 0.6,
                                    ease: 'easeInOut',
                                    times: [0, 0.25, 0.5, 0.75, 1],
                                },
                            }}
                            onClick={() => onMediaClick?.(index)}
                        >
                            <div className="w-[min(200px,45vw)] sm:w-[min(260px,65vw)] h-[min(120px,27vw)] sm:h-[min(160px,40vw)] bg-[#F8E3C5] rounded-xl p-1.5 sm:p-2 shadow-md border-[4px] sm:border-[5px] border-[#F3D5A7] relative">
                                <div
                                    className={`absolute -top-1.5 sm:-top-2 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 sm:w-4 sm:h-4 ${cardPositions[index].dotColor} rounded-full border-[1.5px] sm:border-2 border-white shadow-sm z-10`}
                                ></div>
                                <div className="w-full h-full bg-black rounded-lg overflow-hidden relative">
                                    {renderMedia(item)}
                                    {renderOverlay(item)}
                                </div>
                            </div>
                        </motion.div>
                    </DialogTrigger>
                    <DialogContent className="max-w-screen-lg w-full p-0 bg-transparent border-0">
                        <DialogTitle className="sr-only">
                            {item.alt || 'Media content'}
                        </DialogTitle>
                        <div className="relative w-full aspect-video">
                            <div className="absolute inset-0 rounded-lg overflow-hidden">
                                {renderMedia(mediaItems[selectedIndex])}
                            </div>
                            {/* Navigation Buttons */}
                            <button
                                onClick={handlePrevious}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                                aria-label="Next image"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                            {/* Indicators */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {mediaItems.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedIndex(idx)}
                                        className={`w-2 h-2 rounded-full transition-colors ${
                                            selectedIndex === idx
                                                ? 'bg-white'
                                                : 'bg-white/50'
                                        }`}
                                        aria-label={`Go to image ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            ))}
        </div>
    );
}
