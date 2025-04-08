import React from 'react';

export default function Footer() {
return (
    <footer className="w-full bg-gray-450 py-2 mt-1 border-t border-gray-700">
        <div className="text-center space-y-1">
            <p className="text-blue-400 text-sm font-medium">
                Designed and Developed by <span className="font-semibold text-blue-600">PathoVerse Team</span>
            </p>
            <p className="text-gray-100 text-sm">
                Contact us: <a href="mailto:ranjeetsinghraghav0@gmail.com" className="text-blue-600 hover:underline">@PathoVerseteam</a>
            </p>
        </div>
    </footer>
);
}
