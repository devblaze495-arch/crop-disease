import React from 'react';
import { Outlet, useLocation, NavLink } from 'react-router-dom';
import { Home, Share2, ScanLine, History, User } from 'lucide-react';
import BottomNav from '../ui/BottomNav';
import WeatherWidget from '../ui/WeatherWidget';

export default function MainLayout() {
    const location = useLocation();
    const hideNavPaths = ['/', '/language', '/onboarding'];
    const showNav = !hideNavPaths.includes(location.pathname);

    return (
        <div className="min-h-screen bg-stone-50 flex flex-col relative min-h-[100dvh]">
            {/* Container: mobile stays single column centered; desktop shows a card with sidebar */}
            <div className="w-full max-w-md mx-auto lg:max-w-6xl lg:px-8 lg:py-8">
                <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-6 lg:items-start">

                    {/* Desktop Sidebar */}
                    <aside className="hidden lg:flex flex-col gap-6 p-4">
                        <div className="w-60 bg-white rounded-2xl shadow-sm border border-stone-100 p-4 sticky top-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 text-lg font-bold">V</div>
                                <div>
                                    <h3 className="font-bold text-stone-800">Farmer Vijay</h3>
                                    <p className="text-xs text-stone-400">Karnataka, India</p>
                                </div>
                            </div>

                            <nav className="flex flex-col gap-1">
                                <NavLink to="/community" className={({isActive}) => `flex items-center gap-3 p-2 rounded-lg ${isActive ? 'bg-primary-50 text-primary-700' : 'text-stone-600 hover:bg-stone-50'}`}>
                                    <Share2 className="w-5 h-5" />
                                    Community
                                </NavLink>
                                <NavLink to="/dashboard" className={({isActive}) => `flex items-center gap-3 p-2 rounded-lg ${isActive ? 'bg-primary-50 text-primary-700' : 'text-stone-600 hover:bg-stone-50'}`}>
                                    <Home className="w-5 h-5" />
                                    Dashboard
                                </NavLink>
                                <NavLink to="/scan" className={({isActive}) => `flex items-center gap-3 p-2 rounded-lg ${isActive ? 'bg-primary-50 text-primary-700' : 'text-stone-600 hover:bg-stone-50'}`}>
                                    <ScanLine className="w-5 h-5" />
                                    Scan
                                </NavLink>
                                <NavLink to="/history" className={({isActive}) => `flex items-center gap-3 p-2 rounded-lg ${isActive ? 'bg-primary-50 text-primary-700' : 'text-stone-600 hover:bg-stone-50'}`}>
                                    <History className="w-5 h-5" />
                                    History
                                </NavLink>
                                <NavLink to="/profile" className={({isActive}) => `flex items-center gap-3 p-2 rounded-lg ${isActive ? 'bg-primary-50 text-primary-700' : 'text-stone-600 hover:bg-stone-50'}`}>
                                    <User className="w-5 h-5" />
                                    Profile
                                </NavLink>
                            </nav>

                            <div className="mt-6">
                                <WeatherWidget />
                            </div>
                        </div>
                    </aside>

                    {/* Main Card / Content */}
                    <div className="w-full bg-white lg:rounded-3xl lg:shadow-lg overflow-hidden">
                        <main className="flex-1 overflow-y-auto pb-24 min-h-[100dvh]">
                            <Outlet />
                        </main>

                        {/* Mobile bottom nav only */}
                        {showNav && (
                            <div className="lg:hidden">
                                <BottomNav />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
