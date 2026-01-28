import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Image as ImageIcon, X, Zap, Loader } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Scan() {
    const navigate = useNavigate();
    const [scanning, setScanning] = useState(false);
    const [cameraActive, setCameraActive] = useState(true);
    const [flashOn, setFlashOn] = useState(false);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const fileInputRef = useRef(null);
    const [capturedImage, setCapturedImage] = useState(null);

    // Initialize camera on mount
    useEffect(() => {
        if (cameraActive && videoRef.current) {
            startCamera();
        }
        return () => {
            stopCamera();
        };
    }, [cameraActive]);

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: 'environment', // Back camera
                    width: { ideal: 1280 },
                    height: { ideal: 720 }
                }
            });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        } catch (error) {
            console.error('Error accessing camera:', error);
            alert('Unable to access camera. Please check permissions.');
        }
    };

    const stopCamera = () => {
        if (videoRef.current && videoRef.current.srcObject) {
            const tracks = videoRef.current.srcObject.getTracks();
            tracks.forEach(track => track.stop());
        }
    };

    const captureFromCamera = async () => {
        if (!videoRef.current || !canvasRef.current) return;

        setScanning(true);
        const context = canvasRef.current.getContext('2d');
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0);

        // Simulate AI analysis
        setTimeout(() => {
            const imageData = canvasRef.current.toDataURL('image/jpeg');
            setCapturedImage(imageData);
            setScanning(false);
            // Navigate to results with captured image
            navigate('/results', { state: { capturedImage: imageData } });
        }, 2000);
    };

    const handleGallerySelect = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            setScanning(true);
            // Simulate AI analysis
            setTimeout(() => {
                const imageData = event.target.result;
                setCapturedImage(imageData);
                setScanning(false);
                navigate('/results', { state: { capturedImage: imageData } });
            }, 2000);
        };
        reader.readAsDataURL(file);
    };

    const toggleFlash = () => {
        setFlashOn(!flashOn);
    };

    return (
        <div className="h-full bg-black relative flex flex-col min-h-screen">
            {/* Close Button - Top Left */}
            <div className="absolute top-4 left-4 z-30 flex justify-between items-center w-full px-4">
                <button
                    onClick={() => navigate(-1)}
                    className="text-white p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Flash Button */}
                <button
                    onClick={toggleFlash}
                    className={`text-white p-2 rounded-full transition-colors ${
                        flashOn ? 'bg-yellow-500/30' : 'bg-white/10'
                    } hover:bg-white/20 backdrop-blur-md`}
                >
                    <Zap className={`w-6 h-6 ${flashOn ? 'fill-yellow-400' : 'fill-white'}`} />
                </button>
            </div>

            {/* Camera Feed Area */}
            <div className="flex-1 relative overflow-hidden bg-stone-900 flex items-center justify-center">
                {/* Video Stream */}
                <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ transform: 'scaleX(-1)' }} // Mirror the camera feed
                />

                {/* Scanning Overlay */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="relative w-full max-w-xs">
                        {/* Scanning Frame */}
                        <div className="relative aspect-square border-2 border-white/60 rounded-3xl overflow-hidden bg-transparent">
                            {/* Corner Markers */}
                            <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-primary-400 rounded-tl-lg" />
                            <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-primary-400 rounded-tr-lg" />
                            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-primary-400 rounded-bl-lg" />
                            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-primary-400 rounded-br-lg" />

                            {/* Scan Line Animation */}
                            {scanning && (
                                <motion.div
                                    initial={{ top: 0 }}
                                    animate={{ top: '100%' }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                                    className="absolute left-0 right-0 h-1 bg-primary-400 shadow-[0_0_20px_rgba(74,222,128,0.8)] z-10"
                                />
                            )}

                            {/* Guide Text */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                {scanning ? (
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                        className="flex flex-col items-center gap-3"
                                    >
                                        <Loader className="w-8 h-8 text-primary-400 animate-spin" />
                                        <p className="text-white text-sm font-semibold">Analyzing...</p>
                                    </motion.div>
                                ) : (
                                    <p className="text-white/80 text-sm font-medium bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full text-center">
                                        Place leaf inside frame
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dark Overlay Areas */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-black/30" />
                </div>
            </div>

            {/* Bottom Controls */}
            <div className="bg-gradient-to-t from-black via-black/80 to-transparent p-6 pb-8 z-20 relative">
                <div className="flex justify-between items-end max-w-sm mx-auto gap-6">
                    {/* Gallery Button */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => fileInputRef.current?.click()}
                        disabled={scanning}
                        className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors disabled:opacity-50"
                    >
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-md">
                            <ImageIcon className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-medium">Gallery</span>
                    </motion.button>

                    {/* Capture Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={captureFromCamera}
                        disabled={scanning}
                        className="relative"
                    >
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-primary-600 hover:border-primary-500 transition-colors disabled:opacity-50">
                            <motion.div
                                animate={{ scale: scanning ? 1.1 : 1 }}
                                className="w-16 h-16 bg-primary-600 rounded-full border-4 border-white"
                            />
                        </div>
                        {scanning && (
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 0.6, repeat: Infinity }}
                                className="absolute inset-0 border-4 border-primary-400 rounded-full"
                            />
                        )}
                    </motion.button>

                    {/* Spacer for balance */}
                    <div className="w-12" />
                </div>

                {/* Info Text */}
                <p className="text-center text-white/60 text-xs mt-4">
                    {scanning ? 'Analyzing image...' : 'Tap to capture or select from gallery'}
                </p>
            </div>

            {/* Hidden Canvas for Image Capture */}
            <canvas ref={canvasRef} className="hidden" />

            {/* Hidden File Input for Gallery */}
            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleGallerySelect}
                className="hidden"
            />
        </div>
    );
}
