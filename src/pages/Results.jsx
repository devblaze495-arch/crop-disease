import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, AlertTriangle, ChevronRight, Droplet, Sun } from 'lucide-react';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';

export default function Results() {
    const navigate = useNavigate();

    return (
        <div className="p-6 pt-4 pb-24">
            <div className="flex items-center gap-2 mb-4 text-stone-500 cursor-pointer" onClick={() => navigate('/dashboard')}>
                <ChevronRight className="rotate-180 w-5 h-5" />
                <span>Back to Home</span>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl p-6 shadow-xl border border-stone-100 mb-6"
            >
                <div className="flex items-start justify-between mb-6">
                    <div>
                        <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                            Disease Detected
                        </span>
                        <h1 className="text-3xl font-bold text-stone-800 mt-3">Leaf Blight</h1>
                        <p className="text-stone-500 font-medium">Wheat Crop</p>
                    </div>
                    <div className="w-16 h-16 rounded-full border-4 border-red-100 flex items-center justify-center bg-white">
                        <span className="text-xl font-bold text-red-600">93%</span>
                    </div>
                </div>

                {/* Severity Meter */}
                <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2 font-medium">
                        <span className="text-stone-400">Low</span>
                        <span className="text-orange-500">Medium</span>
                        <span className="text-red-600">High</span>
                    </div>
                    <div className="h-3 bg-stone-100 rounded-full overflow-hidden flex">
                        <div className="w-8/12 h-full bg-gradient-to-r from-green-400 via-orange-400 to-red-500 rounded-full" />
                    </div>
                    <p className="mt-2 text-sm text-stone-500">
                        Severity is <span className="text-orange-600 font-bold">Medium to High</span>. Immediate action recommended.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-stone-50 p-3 rounded-xl flex flex-col items-center text-center">
                        <Droplet className="w-6 h-6 text-blue-500 mb-2" />
                        <span className="text-xs text-stone-500">Humidity</span>
                        <span className="font-bold text-stone-700">High (85%)</span>
                    </div>
                    <div className="bg-stone-50 p-3 rounded-xl flex flex-col items-center text-center">
                        <Sun className="w-6 h-6 text-orange-500 mb-2" />
                        <span className="text-xs text-stone-500">Temp</span>
                        <span className="font-bold text-stone-700">24°C</span>
                    </div>
                </div>
            </motion.div>

            <div className="mb-8">
                <h2 className="text-xl font-bold text-stone-800 mb-4">Recommended Treatment</h2>

                <div className="space-y-4">
                    {[
                        { id: 1, title: "Apply Fungicide", desc: "Spray Mancozeb 75 WP @ 2.5g/liter of water.", type: 'chemical' },
                        { id: 2, title: "Reduce Watering", desc: "Avoid overhead irrigation to reduce moisture.", type: 'organic' },
                    ].map((treatment, idx) => (
                        <motion.div
                            key={treatment.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + idx * 0.1 }}
                            className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm flex gap-4"
                        >
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${treatment.type === 'chemical' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'
                                }`}>
                                <CheckCircle className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-stone-800">{treatment.title}</h3>
                                <p className="text-sm text-stone-500 mt-1 leading-relaxed">{treatment.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="flex gap-4">
                <Button variant="secondary" className="flex-1" onClick={() => navigate('/dashboard')}>
                    Close
                </Button>
                <Button className="flex-1 shadow-lg shadow-primary-900/20">
                    Save Report
                </Button>
            </div>
        </div>
    );
}
