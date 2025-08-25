'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
} from '@/components/ui/dialog';
import { useState } from 'react';

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

    const renderMedia = (item: MediaItem, key: string) => {
        if (item.type === 'video') {
            return (
                <video
                    key={key}
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
            <motion.img
                key={key}
                src={item.url}
                alt={item.alt || 'Media content'}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            />
        );
    };

    const renderOverlay = (item: MediaItem, key: string) => {
        if (!item.overlay?.clock) return null;

        return (
            <motion.div
                key={`overlay-${key}`}
                className="absolute inset-0 flex flex-col items-center justify-center text-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
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
            </motion.div>
        );
    };

    const cardPositions = [
        {
            className:
                'absolute top-0 sm:top-0 left-1/2 -translate-x-[95%] sm:-translate-x-[85%] z-10',
            rotation: -8,
            hoverRotation: [-8, -5, -10, -7, -8],
            dotColor: 'bg-purple-500',
            initial: { x: -100, opacity: 0 },
            animate: { x: 0, opacity: 1 },
            exit: { x: -100, opacity: 0 },
        },
        {
            className:
                'absolute top-0 sm:top-2 left-1/2 translate-x-[5%] sm:translate-x-[35%] z-20',
            rotation: 8,
            hoverRotation: [8, 11, 5, 9, 8],
            dotColor: 'bg-red-500',
            initial: { x: 100, opacity: 0 },
            animate: { x: 0, opacity: 1 },
            exit: { x: 100, opacity: 0 },
        },
        {
            className:
                'absolute top-8 sm:top-20 left-1/2 -translate-x-[45%] sm:-translate-x-1/2 z-30',
            rotation: 0,
            hoverRotation: [0, 2, -2, 1, 0],
            dotColor: 'bg-blue-500',
            initial: { y: 100, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            exit: { y: 100, opacity: 0 },
        },
    ];

    return (
        <div className="relative w-[92%] max-w-[450px] h-[180px] sm:h-[330px] mx-auto">
            <AnimatePresence mode="wait">
                {mediaItems.slice(0, 3).map((item, index) => {
                    const itemKey = `${item.url}-${index}`;
                    return (
                        <Dialog
                            key={itemKey}
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
                                    initial={{
                                        ...cardPositions[index].initial,
                                        rotate: cardPositions[index].rotation,
                                    }}
                                    animate={{
                                        ...cardPositions[index].animate,
                                        rotate: cardPositions[index].rotation,
                                    }}
                                    exit={cardPositions[index].exit}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    whileHover={{
                                        rotate: cardPositions[index]
                                            .hoverRotation,
                                        transition: {
                                            duration: 0.6,
                                            ease: 'easeInOut',
                                            times: [0, 0.25, 0.5, 0.75, 1],
                                        },
                                    }}
                                    onClick={() => onMediaClick?.(index)}
                                >
                                    <div className="w-[min(200px,45vw)] sm:w-[min(260px,65vw)] h-[min(120px,27vw)] sm:h-[min(160px,40vw)] bg-[#F8E3C5] rounded-xl p-1.5 sm:p-2 shadow-md border-[4px] sm:border-[5px] border-[#F3D5A7] relative">
                                        <motion.div
                                            className={`absolute -top-1.5 sm:-top-2 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 sm:w-4 sm:h-4 ${cardPositions[index].dotColor} rounded-full border-[1.5px] sm:border-2 border-white shadow-sm z-10`}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            exit={{ scale: 0 }}
                                            transition={{
                                                duration: 0.3,
                                                delay: index * 0.1 + 0.2,
                                            }}
                                        />
                                        <div className="w-full h-full bg-black rounded-lg overflow-hidden relative">
                                            <AnimatePresence mode="wait">
                                                {renderMedia(
                                                    item,
                                                    `media-${itemKey}`
                                                )}
                                                {renderOverlay(
                                                    item,
                                                    `overlay-${itemKey}`
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </motion.div>
                            </DialogTrigger>
                            <DialogContent className="max-w-screen-lg w-full p-0 bg-transparent border-0">
                                <DialogTitle className="sr-only">
                                    {item.alt || 'Media content'}
                                </DialogTitle>
                                <div className="w-full aspect-video rounded-lg overflow-hidden">
                                    {renderMedia(item, `dialog-${itemKey}`)}
                                </div>
                            </DialogContent>
                        </Dialog>
                    );
                })}
            </AnimatePresence>
        </div>
    );
}
