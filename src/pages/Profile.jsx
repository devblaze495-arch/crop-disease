import React from 'react';
import { User, Settings, Globe, Bell, ChevronRight, LogOut, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Profile() {
    const menuItems = [
        { icon: Globe, label: 'Language', value: 'English' },
        { icon: Settings, label: 'Edit Crops', value: '' },
        { icon: Bell, label: 'Notifications', value: 'On' },
        { icon: Shield, label: 'Privacy Policy', value: '' },
    ];

    return (
        <div className="p-6 pt-8 pb-24 lg:p-8 lg:pt-10 max-w-3xl mx-auto">
            <div className="flex flex-col items-center mb-8 lg:mb-12">
                <div className="w-24 h-24 lg:w-28 lg:h-28 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 text-3xl lg:text-4xl font-bold border-4 border-white shadow-lg mb-4">
                    V
                </div>
                <h1 className="text-2xl lg:text-3xl font-bold text-stone-800">Vijay Patil</h1>
                <p className="text-stone-500 text-sm lg:text-base">Karnataka, India</p>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden mb-6">
                {menuItems.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.1 }}
                        className="flex items-center justify-between p-4 border-b border-stone-50 last:border-0 hover:bg-stone-50 transition-colors cursor-pointer"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600">
                                <item.icon className="w-5 h-5" />
                            </div>
                            <span className="font-medium text-stone-700">{item.label}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            {item.value && <span className="text-sm text-stone-400">{item.value}</span>}
                            <ChevronRight className="w-4 h-4 text-stone-300" />
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="bg-primary-50 rounded-2xl p-6 mb-6 lg:p-8">
                <h3 className="font-bold text-primary-900 mb-2 lg:text-lg">About AgriVision</h3>
                <p className="text-sm lg:text-base text-primary-700 leading-relaxed">
                    AgriVision is an AI-powered crop disease detection application helping farmers protect their harvest.
                    <br />Version 1.0.0
                </p>
            </div>

            <button className="w-full flex items-center justify-center gap-2 text-red-500 font-medium py-3 hover:bg-red-50 rounded-xl transition-colors">
                <LogOut className="w-5 h-5" />
                Sign Out
            </button>
        </div>
    );
}
