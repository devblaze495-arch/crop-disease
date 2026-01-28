import React, { useState } from 'react';
import { Users, Heart, MessageCircle, Share2, MoreHorizontal, Image as ImageIcon, Send, X, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

const initialPosts = [
    {
        id: 1,
        user: 'Ramesh Kumar',
        location: 'Punjab, India',
        time: '2 hours ago',
        crop: 'Wheat',
        disease: 'Rust',
        severity: 'Medium',
        content:
            'My wheat crop is showing these yellow spots. I used the scan feature and it detected rust. Has anyone effectively treated this with organic methods?',
        image:
            'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2889&auto=format&fit=crop',
        likes: 24,
        comments: 12,
        liked: false,
        avatar: 'R',
    },
    {
        id: 2,
        user: 'Sita Verma',
        location: 'Maharashtra, India',
        time: '5 hours ago',
        crop: 'Rice',
        disease: 'Healthy',
        severity: 'None',
        content: 'Great harvest this season! Thanks to AgriVision for the timely weather alerts.',
        image: null,
        likes: 156,
        comments: 45,
        liked: true,
        avatar: 'S',
    },
    {
        id: 3,
        user: 'Dr. A. Singh',
        location: 'Expert Agronomist',
        time: '1 day ago',
        crop: 'Cotton',
        disease: 'Root Rot Prevention',
        severity: 'High',
        content:
            'Tip of the day: Ensure proper drainage during these heavy rains to prevent root rot in cotton crops.',
        image:
            'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2942&auto=format&fit=crop',
        likes: 89,
        comments: 8,
        liked: false,
        avatar: 'A',
    },
];

export default function Community() {
    const [posts, setPosts] = useState(initialPosts);
    const [showUploadModal, setShowUploadModal] = useState(false);
    const [formData, setFormData] = useState({ crop: '', disease: '', content: '', image: null, imagePreview: null });

    const handleImageSelect = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => setFormData((s) => ({ ...s, image: file, imagePreview: ev.target.result }));
        reader.readAsDataURL(file);
    };

    const handleLike = (id) => {
        setPosts((ps) => ps.map((p) => (p.id === id ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 } : p)));
    };

    const handlePost = (e) => {
        e.preventDefault();
        if (!formData.content.trim() || !formData.crop) return;
        const severity = formData.disease === 'Healthy' ? 'None' : 'Medium';
        const post = {
            id: Date.now(),
            user: 'Farmer Vijay',
            location: 'Karnataka, India',
            time: 'Just now',
            crop: formData.crop,
            disease: formData.disease || 'Unknown',
            severity,
            content: formData.content,
            image: formData.imagePreview || null,
            likes: 0,
            comments: 0,
            liked: false,
            avatar: 'V',
        };
        setPosts((ps) => [post, ...ps]);
        setFormData({ crop: '', disease: '', content: '', image: null, imagePreview: null });
        setShowUploadModal(false);
    };

    return (
    <div className="p-0 pb-24 h-full flex flex-col bg-stone-50 lg:p-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="bg-white p-6 lg:bg-transparent lg:p-0 lg:mb-6 sticky top-0 lg:static z-10 lg:z-0 shadow-sm lg:shadow-none border-b lg:border-0 border-stone-100">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-stone-800 flex items-center gap-2">
              <Users className="w-6 h-6 text-primary-600" /> Community
            </h1>
            <p className="text-xs text-stone-500 mt-1">Share insights, learn from farmers</p>
          </div>
          <button className="hidden lg:flex p-2 bg-stone-100 rounded-full text-stone-600">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>

        <motion.button
          onClick={() => setShowUploadModal(true)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-primary-900/20 transition-all lg:py-3 lg:text-base"
        >
          <Plus className="w-5 h-5" /> Share Your Crop Status
        </motion.button>
      </div>

            {/* Feed */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
                {posts.map((post, index) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.08 }}
                        className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-md transition-shadow"
                    >
                        <div className="p-4 border-b border-stone-100">
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex gap-3">
                                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-lg border-2 border-primary-200">{post.avatar}</div>
                                    <div>
                                        <h3 className="font-bold text-stone-800">{post.user}</h3>
                                        <p className="text-xs text-stone-500">{post.location} • {post.time}</p>
                                    </div>
                                </div>
                                <button className="text-stone-400 hover:text-stone-600 transition-colors"><MoreHorizontal className="w-5 h-5" /></button>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-2">
                                <span className="text-xs font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{post.crop}</span>
                                <span className={`text-xs font-medium px-3 py-1 rounded-full ${post.disease === 'Healthy' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>{post.disease}</span>
                                {post.severity !== 'None' && (
                                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${post.severity === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>{post.severity}</span>
                                )}
                            </div>
                        </div>

                        <p className="px-4 pt-3 text-stone-700 text-sm lg:text-base leading-relaxed whitespace-pre-wrap">{post.content}</p>

                        {post.image && (
                            <div className="my-3 mx-4 rounded-xl overflow-hidden shadow-sm">
                                <img src={post.image} alt="Post content" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" />
                            </div>
                        )}

                        <div className="flex items-center justify-between px-4 py-3 border-t border-stone-100 text-stone-500">
                            <motion.button onClick={() => handleLike(post.id)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className={`flex items-center gap-1.5 text-sm transition-colors ${post.liked ? 'text-red-500' : 'hover:text-stone-800'}`}>
                                <Heart className={`w-5 h-5 ${post.liked ? 'fill-current' : ''}`} />
                                <span>{post.likes}</span>
                            </motion.button>

                            <button className="flex items-center gap-1.5 text-sm hover:text-primary-600 transition-colors"><MessageCircle className="w-5 h-5" /><span>{post.comments}</span></button>

                            <button className="flex items-center gap-1.5 text-sm hover:text-blue-500 transition-colors"><Share2 className="w-5 h-5" /><span>Share</span></button>
                        </div>
                    </motion.div>
                ))}

                <div className="h-6" />
            </div>

            {/* Upload Modal */}
            {showUploadModal && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 z-50 flex items-end" onClick={() => setShowUploadModal(false)}>
                    <motion.div initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }} onClick={(e) => e.stopPropagation()} className="w-full bg-white rounded-t-3xl p-6 max-h-[90vh] overflow-y-auto lg:max-w-2xl lg:mx-auto lg:rounded-3xl lg:p-8">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-stone-800">Share Your Crop Status</h2>
                            <button onClick={() => setShowUploadModal(false)} className="p-2 hover:bg-stone-100 rounded-full transition-colors"><X className="w-6 h-6 text-stone-600" /></button>
                        </div>

                        <form onSubmit={handlePost} className="space-y-4">
                            {/* Image Upload */}
                            <div>
                                <label className="block text-sm font-semibold text-stone-700 mb-2">Crop Image</label>
                                <div onClick={() => document.getElementById('imageInput').click()} className="border-2 border-dashed border-stone-300 rounded-2xl p-8 text-center cursor-pointer hover:border-primary-500 hover:bg-primary-50 transition-all">
                                    {formData.imagePreview ? (
                                        <div className="relative">
                                            <img src={formData.imagePreview} alt="Preview" className="w-full h-40 object-cover rounded-xl" />
                                            <button type="button" onClick={(e) => { e.stopPropagation(); setFormData({ ...formData, image: null, imagePreview: null }); }} className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"><X className="w-4 h-4" /></button>
                                        </div>
                                    ) : (
                                        <div>
                                            <ImageIcon className="w-12 h-12 text-stone-400 mx-auto mb-2" />
                                            <p className="text-stone-600 font-medium">Tap to select image</p>
                                            <p className="text-xs text-stone-400 mt-1">PNG, JPG up to 5MB</p>
                                        </div>
                                    )}
                                </div>
                                <input id="imageInput" type="file" accept="image/*" onChange={handleImageSelect} className="hidden" />
                            </div>

                            {/* Crop Type */}
                            <div>
                                <label className="block text-sm font-semibold text-stone-700 mb-2">Crop Type *</label>
                                <select value={formData.crop} onChange={(e) => setFormData({ ...formData, crop: e.target.value })} className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-stone-700 outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all" required>
                                    <option value="">Select crop type</option>
                                    <option value="Rice">Rice</option>
                                    <option value="Wheat">Wheat</option>
                                    <option value="Cotton">Cotton</option>
                                    <option value="Sugarcane">Sugarcane</option>
                                    <option value="Tomato">Tomato</option>
                                    <option value="Potato">Potato</option>
                                    <option value="Maize">Maize</option>
                                    <option value="Groundnut">Groundnut</option>
                                </select>
                            </div>

                            {/* Disease/Status */}
                            <div>
                                <label className="block text-sm font-semibold text-stone-700 mb-2">Disease or Status</label>
                                <input type="text" value={formData.disease} onChange={(e) => setFormData({ ...formData, disease: e.target.value })} placeholder="e.g., Leaf Blight, Healthy, Brown Spot" className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-stone-700 outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all" />
                            </div>

                            {/* Description */}
                            <div>
                                <label className="block text-sm font-semibold text-stone-700 mb-2">Description *</label>
                                <textarea value={formData.content} onChange={(e) => setFormData({ ...formData, content: e.target.value })} placeholder="Share details, symptoms, treatments, or tips..." rows="4" className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-stone-700 outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all resize-none" required />
                            </div>

                            {/* Submit Button */}
                            <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-primary-900/20 transition-all">
                                <Send className="w-5 h-5" /> Post to Community
                            </motion.button>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}
