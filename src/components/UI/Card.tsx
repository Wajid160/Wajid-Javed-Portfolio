import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, hoverEffect = true, ...props }) => {
    return (
        <div
            className={cn(
                'bg-white dark:bg-[#111827] rounded-lg p-6 shadow-sm border border-[#E5E7EB] dark:border-[#1F2937] transition-all duration-200',
                hoverEffect && 'hover:shadow-lg hover:scale-[1.02] cursor-pointer',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};
