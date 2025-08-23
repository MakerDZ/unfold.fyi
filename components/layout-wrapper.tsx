import { cn } from '@/lib/utils';

export default function LayoutWrapper({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={cn('h-full max-w-screen-2xl mx-auto', className)}>
            {children}
        </div>
    );
}
