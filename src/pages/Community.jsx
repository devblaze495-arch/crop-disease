import React, { useState } from 'react';
import { Users, Heart, messageCircle, Share2, MoreHorizontal, Image as ImageIcon, Send } from 'lucide-react'; // messageCircle might be MessageCircle
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

const initialPosts = [
    {
        id: 1,
        user: "Ramesh Kumar",
        location: "Punjab, India",
        time: "2 hours ago",
        content: "My wheat crop is showing these yellow spots. I used the scan feature and it detected rust. Has anyone effectively treated this with organic methods?",
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2889&auto=format&fit=crop",
        likes: 24,
        comments: 12,
        liked: false
    },
    {
        id: 2,
        user: "Sita Verma",
        location: "Maharashtra, India",
        time: "5 hours ago",
        content: "Great harvest this season! Thanks to AgriVision for the timely weather alerts.",
        image: null,
        likes: 156,
        comments: 45,
        liked: true
    },
    {
        id: 3,
        user: "Dr. A. Singh",
        location: "Expert Agronomist",
        time: "1 day ago",
        content: "Tip of the day: Ensure proper drainage during these heavy rains to prevent root rot in cotton crops.",
        image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2942&auto=format&fit=crop",
        likes: 89,
        comments: 8,
        liked: false
    }
];

export default function Community() {
    const [posts, setPosts] = useState(initialPosts);
    const [newPost, setNewPost] = useState("");

    const handleLike = (id) => {
        setPosts(posts.map(post =>
            post.id === id
                ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
                : post
        ));
    };

    const handlePost = () => {
        if (!newPost.trim()) return;
        const post = {
            id: Date.now(),
            user: "Farmer Vijay",
            location: "Karnataka, India",
            time: "Just now",
            content: newPost,
            image: null,
            likes: 0,
            comments: 0,
            liked: false
        };
        setPosts([post, ...posts]);
        setNewPost("");
    };

    return (
        <div className="p-0 pb-24 h-full flex flex-col bg-stone-100">
            {/* Header */}
            <div className="bg-white p-4 pb-2 sticky top-0 z-10 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold text-stone-800 flex items-center gap-2">
                        <Users className="w-6 h-6 text-primary-600" />
                        Community
                    </h1>
                    <button className="p-2 bg-stone-100 rounded-full text-stone-600">
                        <MoreHorizontal className="w-5 h-5" />
                    </button>
                </div>

                {/* Create Post Input */}
                <div className="flex gap-3 items-center bg-stone-50 p-3 rounded-2xl border border-stone-200">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center font-bold text-primary-700 flex-shrink-0">
                        V
                    </div>
                    <input
                        type="text"
                        value={newPost}
                        onChange={(e) => setNewPost(e.target.value)}
                        placeholder="Share with the community..."
                        className="flex-1 bg-transparent outline-none text-stone-700 placeholder:text-stone-400"
                    />
                    <button className="text-primary-600 p-2 hover:bg-primary-50 rounded-full transition-colors">
                        <ImageIcon className="w-5 h-5" />
                    </button>
                    <button
                        onClick={handlePost}
                        disabled={!newPost.trim()}
                        className="bg-primary-600 text-white p-2 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-700 transition-colors"
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Feed */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
                {posts.map((post) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-3xl p-4 shadow-sm border border-stone-200"
                    >
                        <div className="flex justify-between items-start mb-3">
                            <div className="flex gap-3">
                                <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-500 font-bold text-lg select-none">
                                    {post.user[0]}
                                </div>
                                <div>
                                    <h3 className="font-bold text-stone-800 text-sm">{post.user}</h3>
                                    <p className="text-xs text-stone-400">{post.location} • {post.time}</p>
                                </div>
                            </div>
                            <button className="text-stone-400">
                                <MoreHorizontal className="w-5 h-5" />
                            </button>
                        </div>

                        <p className="text-stone-700 text-sm mb-3 leading-relaxed whitespace-pre-wrap">
                            {post.content}
                        </p>

                        {post.image && (
                            <div className="mb-4 rounded-2xl overflow-hidden shadow-sm">
                                <img src={post.image} alt="Post content" className="w-full h-auto object-cover" />
                            </div>
                        )}

                        <div className="flex items-center justify-between pt-3 border-t border-stone-100 text-stone-500">
                            <button
                                onClick={() => handleLike(post.id)}
                                className={`flex items-center gap-1.5 text-sm transition-colors ${post.liked ? 'text-red-500' : 'hover:text-stone-800'}`}
                            >
                                <Heart className={`w-5 h-5 ${post.liked ? 'fill-current' : ''}`} />
                                <span>{post.likes}</span>
                            </button>

                            <button className="flex items-center gap-1.5 text-sm hover:text-stone-800 transition-colors">
                                <MessageCircle className="w-5 h-5" />
                                <span>{post.comments}</span>
                            </button>

                            <button className="flex items-center gap-1.5 text-sm hover:text-stone-800 transition-colors">
                                <Share2 className="w-5 h-5" />
                                <span>Share</span>
                            </button>
                        </div>
                    </motion.div>
                ))}

                <div className="h-6" /> {/* Spacer */}
            </div>
        </div>
    );
}
