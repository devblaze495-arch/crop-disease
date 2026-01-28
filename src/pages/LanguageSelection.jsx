import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const languages = [
    { code: 'en', name: 'English', native: 'English', flag: '🇬🇧' },
    { code: 'hi', name: 'Hindi', native: 'हिन्दी', flag: '🇮🇳' },
    { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
    { code: 'mr', name: 'Marathi', native: 'मराठी', flag: '🇮🇳' },
    { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી', flag: '🇮🇳' },
];

export default function LanguageSelection() {
    const navigate = useNavigate();

    const handleSelect = (lang) => {
        // Save language preference here
        navigate('/onboarding');
    };

    return (
        <div className="min-h-full bg-stone-50 p-6 flex flex-col items-center pt-12">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm"
            >
                <Globe className="w-8 h-8 text-primary-700" />
            </motion.div>

            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-2xl font-bold text-stone-800 text-center mb-2"
            >
                Select Language
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-stone-500 text-center mb-8"
            >
                Choose your preferred language to continue
            </motion.p>

            <div className="w-full max-w-sm space-y-4">
                {languages.map((lang, index) => (
                    <motion.button
                        key={lang.code}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                        onClick={() => handleSelect(lang)}
                        className="w-full bg-white border border-stone-200 rounded-2xl p-4 flex items-center justify-between hover:border-primary-500 hover:bg-primary-50 transition-all shadow-sm group"
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-2xl">{lang.flag}</span>
                            <div className="text-left">
                                <p className="font-semibold text-stone-800 group-hover:text-primary-800">{lang.native}</p>
                                <p className="text-xs text-stone-400">{lang.name}</p>
                            </div>
                        </div>
                        <div className="w-5 h-5 rounded-full border-2 border-stone-300 group-hover:border-primary-600 group-hover:bg-primary-600 transition-colors" />
                    </motion.button>
                ))}
            </div>
        </div>
    );
}
