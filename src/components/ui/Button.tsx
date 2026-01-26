import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    children,
    className = '',
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1';

    const variants = {
        primary: 'bg-premium-gradient text-white shadow-[0_10px_20px_-5px_rgba(249,115,22,0.4)] hover:shadow-[0_20px_25px_-5px_rgba(249,115,22,0.4)]',
        secondary: 'bg-sky-gradient text-white shadow-[0_10px_20px_-5px_rgba(14,165,233,0.4)] hover:shadow-[0_20px_25px_-5px_rgba(14,165,233,0.4)]',
        outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50 shadow-sm',
    };

    const sizes = {
        sm: 'px-5 py-2.5 text-sm',
        md: 'px-8 py-4 text-base',
        lg: 'px-10 py-5 text-lg',
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
