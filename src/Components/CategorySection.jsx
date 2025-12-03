import React from 'react';
import { FaGamepad } from 'react-icons/fa';

const CategorySection = () => {
    const categories = [
        { name: "FPS", icon: "🔫" },
        { name: "Open World", icon: "🗺️" },
        { name: "RPG", icon: "🛡️" },
        { name: "Battle Royale", icon: "💥" },
    ];

    return (
        <div className="w-11/12 mx-auto py-12">
            <h3 className="text-3xl font-bold text-center mb-10 text-[#7C3AED] flex items-center justify-center">
                <FaGamepad className="md:mr-3 mr-1"/> Explore Game Categories
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {categories.map((cat, index) => (
                    <div 
                        key={index} 
                        className="bg-[#1E293B] p-6 rounded-xl text-center text-white hover:scale-[1.03] transition duration-300 cursor-pointer shadow-lg border-b-4 border-[#7C3AED]"
                    >
                        <span className="text-4xl block mb-3">{cat.icon}</span>
                        <p className="font-semibold text-lg">{cat.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategorySection;