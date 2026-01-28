import React from 'react';
import { NavLink } from 'react-router-dom';
import { Share2, Home, ScanLine, History, User } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

export default function BottomNav() {
    const navItems = [
        { path: '/community', label: 'Community', icon: Share2 },
        { path: '/dashboard', label: 'Home', icon: Home },
        { path: '/scan', label: 'Scan', icon: ScanLine, isPrimary: true },
        { path: '/history', label: 'History', icon: History },
        { path: '/profile', label: 'Profile', icon: User },
    ];

    return (
        <div className="absolute bottom-0 w-full bg-white border-t border-stone-200 px-3 py-2 pb-6 z-50 flex justify-between items-center shadow-[0_-4px_20px_rgba(0,0,0,0.05)] lg:hidden">
            {navItems.map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    className="relative"
                >
                    {({ isActive }) => (
                        <div className={cn(
                            "flex flex-col items-center justify-center gap-1 transition-colors duration-300",
                            item.isPrimary ? "w-14" : "w-12",
                            isActive ? "text-primary-700" : "text-stone-400 hover:text-stone-600"
                        )}>
                            {item.isPrimary ? (
                                <div className="relative -mt-8">
                                    <div className="absolute inset-0 bg-primary-200 rounded-full blur-md opacity-50" />
                                    <motion.div
                                        animate={{ scale: isActive ? 1.1 : 1 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                        className={cn(
                                            "relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg bg-primary-600 text-white",
                                            isActive && "bg-primary-700"
                                        )}
                                    >
                                        <item.icon className="w-7 h-7" />
                                    </motion.div>
                                </div>
                            ) : (
                                <div className="relative p-1">
                                    <motion.div
                                        animate={{ scale: isActive ? 1.2 : 1 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    >
                                        <item.icon className={cn("w-5 h-5", isActive && "fill-current")} />
                                    </motion.div>
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-dot"
                                            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary-700 rounded-full"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </div>
                            )}
                            <span className={cn("text-xs font-medium transition-all duration-300 text-center",
                                item.isPrimary && "mt-1",
                                isActive ? "font-bold" : "font-normal"
                            )}>
                                {item.label}
                            </span>
                        </div>
                    )}
                </NavLink>
            ))}
        </div>
    );
}
