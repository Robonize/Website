import { ReactNode, ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    color?: string;
}

export default function Button({ children, className, color, ...props }: ButtonProps) {
    return (
        <button
            className={twMerge(`flex items-center justify-center text-center bg-clip-padding p-4 rounded-full min-w-32 hover:bg-[#2f7d67] ${color ? color : 'bg-[#259776]'} ${className}`)}
            {...props}
        >
            {children}
        </button>
    );
}