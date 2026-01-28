import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import BottomNav from '../ui/BottomNav';

export default function MainLayout() {
    const location = useLocation();
    const hideNavPaths = ['/', '/language', '/onboarding'];
    const showNav = !hideNavPaths.includes(location.pathname);

    return (
        <div className="min-h-screen bg-stone-50 flex flex-col max-w-md mx-auto relative shadow-2xl overflow-hidden min-h-[100dvh]">
            {/* Mobile Frame Container: constrained width for desktop view, full for mobile */}

            <main className="flex-1 overflow-y-auto pb-24 scrollbar-hide">
                <Outlet />
            </main>

            {showNav && <BottomNav />}
        </div>
    );
}
