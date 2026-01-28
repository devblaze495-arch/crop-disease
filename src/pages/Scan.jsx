import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Image as ImageIcon, X, Zap } from 'lucide-react';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';

export default function Scan() {
    const navigate = useNavigate();
    const [scanning, setScanning] = useState(false);

    const handleCapture = () => {
        setScanning(true);
        // Simulate scanning delay
        setTimeout(() => {
            navigate('/results');
        }, 2000);
    };

    return (
        <div className="h-full bg-black relative flex flex-col">
            {/* Header Controls */}
            <div className="absolute top-0 left-0 right-0 p-4 z-20 flex justify-between items-center bg-gradient-to-b from-black/60 to-transparent">
                <button onClick={() => navigate(-1)} className="text-white p-2 bg-white/10 backdrop-blur-md rounded-full">
                    <X className="w-6 h-6" />
                </button>
                <div className="flex gap-4">
                    <button className="text-white p-2"><Zap className="w-6 h-6 fill-white" /></button>
                </div>
            </div>

            {/* Camera View Area */}
            <div className="flex-1 relative overflow-hidden bg-stone-900">
                {/* Mock Camera Feed Background */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1594498653385-d5175c532c06?q=80&w=2874&auto=format&fit=crop')] bg-cover bg-center opacity-80" />

                {/* Scanning Frame / Overlay */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="relative w-full aspect-square max-w-sm border-2 border-white/50 rounded-3xl overflow-hidden">
                        {/* Corner Markers */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-white rounded-tl-xl" />
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-white rounded-tr-xl" />
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-white rounded-bl-xl" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-white rounded-br-xl" />

                        {/* Scan Line Animation */}
                        {scanning && (
                            <motion.div
                                initial={{ top: 0 }}
                                animate={{ top: "100%" }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                className="absolute left-0 right-0 h-1 bg-primary-400 shadow-[0_0_15px_rgba(74,222,128,0.8)] z-10"
                            />
                        )}

                        <div className="absolute inset-x-0 bottom-4 text-center">
                            <p className="text-white/80 text-sm font-medium bg-black/30 backdrop-blur-sm inline-block px-3 py-1 rounded-full">
                                {scanning ? "Analyzing..." : "Place leaf inside frame"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Controls */}
            <div className="bg-black/80 backdrop-blur-xl p-6 pt-8 rounded-t-3xl -mt-6 z-20 relative">
                <div className="flex justify-between items-center max-w-sm mx-auto">
                    <button className="text-white/60 flex flex-col items-center gap-1">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                            <ImageIcon className="w-5 h-5" />
                        </div>
                        <span className="text-xs">Gallery</span>
                    </button>

                    <button
                        onClick={handleCapture}
                        className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform border-4 border-stone-300"
                    >
                        <div className="w-16 h-16 bg-primary-600 rounded-full border-4 border-white" />
                    </button>

                    <div className="w-10" /> {/* Spacer for balance */}
                </div>
            </div>
        </div>
    );
}
