import React from 'react';
import { Search, ChevronRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const historyItems = [
    { id: 1, crop: 'Wheat', disease: 'Leaf Blight', severity: 'High', date: 'Sep 14, 2024', confidence: '93%' },
    { id: 2, crop: 'Rice', disease: 'Brown Spot', severity: 'Medium', date: 'Sep 10, 2024', confidence: '89%' },
    { id: 3, crop: 'Sugarcane', disease: 'Healthy', severity: 'None', date: 'Sep 05, 2024', confidence: '98%' },
    { id: 4, crop: 'Tomato', disease: 'Early Blight', severity: 'Low', date: 'Aug 28, 2024', confidence: '75%' },
];

export default function History() {
    return (
        <div className="p-6 pt-8 pb-24 h-full flex flex-col lg:p-10">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl lg:text-3xl font-bold text-stone-800">History</h1>
            </div>

            {/* Search Bar */}
            <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                <input
                    type="text"
                    placeholder="Search scans..."
                    className="w-full bg-white border border-stone-200 rounded-xl pl-12 pr-4 py-3 text-stone-700 outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all shadow-sm"
                />
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 pb-4">
                {historyItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white p-4 rounded-2xl border border-stone-100 shadow-sm flex gap-4 hover:shadow-md transition-shadow cursor-pointer"
                    >
                        <div className="w-16 h-16 bg-stone-200 rounded-xl bg-cover bg-center flex-shrink-0" style={{ backgroundImage: `url(https://source.unsplash.com/random/100x100?${item.crop})` }} />

                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start">
                                <h3 className="font-bold text-stone-800 truncate">{item.crop}</h3>
                                <span className="text-xs text-stone-400 bg-stone-50 px-2 py-1 rounded-full flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {item.date}
                                </span>
                            </div>
                            <p className={`text-sm font-medium mt-1 ${item.disease === 'Healthy' ? 'text-green-600' : 'text-red-500'}`}>
                                {item.disease}
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                                <div className="flex-1 h-1.5 bg-stone-100 rounded-full overflow-hidden">
                                    <div className={`h-full rounded-full ${item.disease === 'Healthy' ? 'bg-green-500' : 'bg-red-500'}`} style={{ width: item.confidence }} />
                                </div>
                                <span className="text-xs text-stone-400 font-mono">{item.confidence}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
