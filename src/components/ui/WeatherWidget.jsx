import React from 'react';
import { CloudSun, Wind, Droplets } from 'lucide-react';

export default function WeatherWidget() {
    return (
        <div className="bg-gradient-to-br from-blue-500 via-blue-500 to-blue-700 rounded-3xl p-6 text-white shadow-xl mb-6 relative overflow-hidden border border-blue-400/20">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full -mr-16 -mt-16 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-300 opacity-5 rounded-full -ml-12 -mb-12 blur-3xl" />

            <div className="relative z-10">
                {/* Date */}
                <p className="text-blue-100 font-medium text-xs tracking-wide mb-4">Today, 28 Jan</p>

                {/* Main weather display */}
                <div className="mb-6">
                    <div className="flex items-end gap-4 mb-2">
                        <CloudSun className="w-12 h-12 lg:w-14 lg:h-14 text-yellow-300 drop-shadow-lg" />
                        <div>
                            <h2 className="text-5xl lg:text-6xl font-bold leading-tight">24°</h2>
                            <p className="text-blue-100 text-sm lg:text-base font-medium">Sunny</p>
                        </div>
                    </div>
                </div>

                {/* Weather stats */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/10 hover:bg-white/15 backdrop-blur-md rounded-xl p-3 lg:p-4 transition-colors border border-white/10">
                        <div className="flex items-center gap-2 mb-1">
                            <Wind className="w-4 h-4 lg:w-5 lg:h-5 text-blue-200" />
                            <p className="text-blue-100 text-xs lg:text-xs font-medium">Wind</p>
                        </div>
                        <p className="text-lg lg:text-xl font-bold">12</p>
                        <p className="text-blue-200 text-xs">km/h</p>
                    </div>
                    <div className="bg-white/10 hover:bg-white/15 backdrop-blur-md rounded-xl p-3 lg:p-4 transition-colors border border-white/10">
                        <div className="flex items-center gap-2 mb-1">
                            <Droplets className="w-4 h-4 lg:w-5 lg:h-5 text-blue-200" />
                            <p className="text-blue-100 text-xs lg:text-xs font-medium">Humidity</p>
                        </div>
                        <p className="text-lg lg:text-xl font-bold">45</p>
                        <p className="text-blue-200 text-xs">%</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
