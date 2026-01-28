import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

export default function Button({ className, variant = 'primary', size = 'md', children, ...props }) {
    const variants = {
        primary: "bg-primary-700 text-white hover:bg-primary-800 shadow-md shadow-primary-900/10",
        secondary: "bg-white text-stone-800 border border-stone-200 hover:bg-stone-50",
        outline: "bg-transparent border border-primary-700 text-primary-700 hover:bg-primary-50"
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    };

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            className={cn(
                "rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
}
