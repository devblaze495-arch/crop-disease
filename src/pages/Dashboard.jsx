import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Upload, ChevronRight } from 'lucide-react';
import WeatherWidget from '../components/ui/WeatherWidget';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';

export default function Dashboard() {
    const navigate = useNavigate();

    return (
        <div className="p-6 pt-8 pb-24 lg:p-10 lg:pt-12">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <p className="text-stone-500 text-sm lg:text-base">Good Morning,</p>
                    <h1 className="text-2xl lg:text-3xl font-bold text-stone-800">Farmer Vijay</h1>
                </div>
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold border-2 border-white shadow-sm">
                    V
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <WeatherWidget />
            </motion.div>

            <div className="grid grid-cols-1 gap-4 mb-8">
                <Button
                    onClick={() => navigate('/scan')}
                    className="bg-primary-700 hover:bg-primary-800 text-white py-6 lg:py-8 shadow-lg shadow-primary-900/10 flex flex-col gap-2 items-center justify-center h-40 lg:h-48 rounded-2xl relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-1 group-hover:scale-110 transition-transform duration-300">
                        <Camera className="w-8 h-8" />
                    </div>
                    <span className="text-lg font-semibold tracking-wide">Scan Crop</span>
                    <span className="text-xs text-primary-200 bg-primary-800/50 px-2 py-0.5 rounded-full">AI Powered</span>
                </Button>

                <Button
                    variant="secondary"
                    className="py-4 lg:py-5 border-dashed border-2 border-stone-300 bg-stone-50 hover:border-primary-500 hover:bg-stone-100 text-stone-600 gap-3"
                >
                    <Upload className="w-5 h-5 text-stone-400" />
                    <span>Upload Image from Gallery</span>
                </Button>
            </div>

            <div>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold text-stone-800">Recent Scans</h2>
                    <button
                        onClick={() => navigate('/history')}
                        className="text-primary-700 text-sm font-medium flex items-center gap-1 hover:underline"
                    >
                        See All <ChevronRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="space-y-3">
                    {[1, 2].map((i) => (
                        <div key={i} className="flex items-center gap-4 bg-white p-3 rounded-xl border border-stone-100 shadow-sm">
                            <div className="w-16 h-16 bg-stone-200 rounded-lg flex-shrink-0" /> {/* Placeholder Image */}
                            <div className="flex-1">
                                <h3 className="font-semibold text-stone-800">Wheat Analysis</h3>
                                <p className="text-xs text-stone-500">Yesterday • 10:30 AM</p>
                            </div>
                            <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded-full">
                                Healthy
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
