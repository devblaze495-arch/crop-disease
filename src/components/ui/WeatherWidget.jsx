import React from 'react';
import { CloudSun, Wind, Droplets } from 'lucide-react';

export default function WeatherWidget() {
    return (
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg mb-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-10 -mt-10 blur-2xl" />

            <div className="flex justify-between items-start relative z-10">
                <div>
                    <p className="text-blue-100 font-medium text-sm">Today, 28 Jan</p>
                    <div className="mt-2 flex items-center gap-3">
                        <CloudSun className="w-10 h-10 text-yellow-300" />
                        <div>
                            <h2 className="text-4xl font-bold">24°C</h2>
                            <p className="text-blue-100 text-sm">Sunny</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 mt-1">
                    <div className="flex items-center gap-2 text-sm text-blue-100 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                        <Wind className="w-4 h-4" />
                        <span>12 km/h</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-blue-100 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                        <Droplets className="w-4 h-4" />
                        <span>45%</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
