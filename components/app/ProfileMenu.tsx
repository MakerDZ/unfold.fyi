import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function ProfileMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar className="w-9 h-9 hover:cursor-pointer">
                    <AvatarImage src="https://avatars.githubusercontent.com/u/87943692?v=4" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#F8E3C5] border-[#F3D5A7]">
                <DropdownMenuLabel className="text-[#6B4D2E] font-bold">
                    My Account
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-[#6B4D2E]/20" />
                <DropdownMenuItem className="text-[#6B4D2E] focus:bg-[#6B4D2E]/10 focus:text-[#6B4D2E]">
                    Premium
                </DropdownMenuItem>
                <DropdownMenuItem className="text-[#C27C5E] focus:bg-[#C27C5E]/10 focus:text-[#C27C5E] hover:text-[#C27C5E]">
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
