import { authClient } from "@/lib/auth-client";
import { GeneratedAvatar } from "@/components/genrated-avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";

export const DashboardUserButton = () => {
  const { data, isPending } = authClient.useSession();

  if (isPending || !data?.user) {
    return null;
  }

  return (
    <DropdownMenu>
      {/* Container is styled as a clean black/white avatar button, matching your screenshots */}
      <DropdownMenuTrigger
        className="
          rounded-lg border border-border/10 p-3 w-full flex items-center justify-between
          bg-[#18181A]
          hover:bg-white/10
          transition-colors
          overflow-hidden
          cursor-pointer
        "
      >
        <div className="flex items-center min-w-0">
          <GeneratedAvatar 
            seed={data.user.name || data.user.email || "user"}
            variant="initials"
            size={32}
            className="border-gray-600"
          />
          <div className="ml-3 min-w-0">
            <span className="text-base text-white font-medium truncate block">
              {data.user.name || "User"}
            </span>
            {data.user.email && (
              <span className="text-xs text-gray-400 truncate block">
                {data.user.email}
              </span>
            )}
          </div>
        </div>
        <div className="flex-shrink-0">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </DropdownMenuTrigger>
      {/* Dropdown content (future) remains available, but logic unchanged */}
      {/* <DropdownMenuContent>
        <DropdownMenuLabel>Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent> */}
    </DropdownMenu>
  );
};

/*
========================================
  UPDATED FEATURES:
========================================
- Integrated GeneratedAvatar component with initials variant
- Uses username as seed for avatar generation
- Shows user email below name for better UX
- Added dropdown arrow indicator
- Maintained dark theme styling with proper hover effects
- Enhanced layout with better spacing and typography
- Dropdown functionality ready for implementation
*/
