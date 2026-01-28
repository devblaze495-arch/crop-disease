import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ScanLine, Sprout, ShieldCheck, ChevronRight } from 'lucide-react';
import Button from '../components/ui/Button';

const steps = [
    {
        id: 1,
        title: "Scan Your Crops",
        description: "Take a photo of your crop to instantly detect diseases and health issues.",
        icon: ScanLine,
        color: "bg-blue-100 text-blue-600"
    },
    {
        id: 2,
        title: "Get Instant Diagnosis",
        description: "Our AI analyzes the image and provides accurate disease identification within seconds.",
        icon: Sprout,
        color: "bg-green-100 text-green-600"
    },
    {
        id: 3,
        title: "Expert Treatments",
        description: "Receive proven treatment recommendations to save your harvest and improve yield.",
        icon: ShieldCheck,
        color: "bg-orange-100 text-orange-600"
    }
];

export default function Onboarding() {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(curr => curr + 1);
        } else {
            navigate('/dashboard');
        }
    };

    const handleSkip = () => {
        navigate('/dashboard');
    };

    return (
        <div className="h-full flex flex-col bg-white p-6 justify-between pt-12 pb-8">
            <div className="flex justify-between items-center w-full">
                <div className="flex gap-1">
                    {steps.map((_, idx) => (
                        <div
                            key={idx}
                            className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentStep ? 'w-8 bg-primary-600' : 'w-2 bg-stone-200'
                                }`}
                        />
                    ))}
                </div>
                <button
                    onClick={handleSkip}
                    className="text-sm font-medium text-stone-400 hover:text-stone-600"
                >
                    Skip
                </button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center text-center mt-8">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center"
                    >
                        <div className={`w-40 h-40 rounded-full ${steps[currentStep].color} flex items-center justify-center mb-8 shadow-inner`}>
                            {React.createElement(steps[currentStep].icon, { size: 60 })}
                        </div>

                        <h2 className="text-2xl font-bold text-stone-800 mb-3 px-4">
                            {steps[currentStep].title}
                        </h2>
                        <p className="text-stone-500 max-w-xs leading-relaxed">
                            {steps[currentStep].description}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="w-full mt-auto">
                <Button
                    onClick={handleNext}
                    className="w-full flex justify-between items-center group"
                    size="lg"
                >
                    <span>{currentStep === steps.length - 1 ? "Get Started" : "Next"}</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>
        </div>
    );
}
