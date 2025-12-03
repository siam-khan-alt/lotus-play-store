import React, { useState } from 'react';
import useTitle from '../Hooks/useTitle';
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router';

const faqData = [
    {
        question: "How do I download a game from Lotus Play Store?",
        answer: "To download a game, simply navigate to the game's details page and click the 'Download' button provided. Make sure you have enough storage space on your device.",
    },
    {
        question: "What should I do if my download fails?",
        answer: "Please check your internet connection first. If the problem persists, try clearing your browser cache or restarting your device. If the issue remains, contact our technical support team via the form below.",
    },
    {
        question: "Can I get a refund for a purchased game?",
        answer: "Our refund policy allows returns within 14 days of purchase, provided the game has not been played for more than 2 hours. Please check our Terms of Service for full details.",
    },
    {
        question: "How do I update my profile information?",
        answer: "Log into your account, go to the 'Profile' section, and click on 'Update Info'. You can change your display name and photo URL there.",
    },
];
const FAQItem = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-[#7C3AED]/20">
            <button
                className="flex justify-between items-center w-full py-4 text-left font-semibold hover:text-[#7C3AED] transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="flex items-center">
                    <FaQuestionCircle className="mr-3 text-lg" />
                    {faq.question}
                </span>
                {isOpen ? <FaChevronUp className="text-[#7C3AED]" /> : <FaChevronDown />}
            </button>
            {isOpen && (
                <div className="pb-4 pr-6 text-gray-400">
                    {faq.answer}
                </div>
            )}
        </div>
    );
};

const Support = () => {
    useTitle("Support & FAQ");
    
    return (
        <div className="bg-[#0F172A] text-white py-12 px-4 min-h-[calc(100vh-200px)]">
            <div className="w-11/12 mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#7C3AED]">
                    Support Center
                </h1>
                <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
                    Find quick answers to common questions or contact us directly for personalized assistance.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    <div className="lg:col-span-2 bg-[#1E293B] p-8 rounded-xl shadow-xl">
                        <h2 className="text-2xl font-semibold mb-6 border-b pb-3 border-[#7C3AED]/40">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-2">
                            {faqData.map((faq, index) => (
                                <FAQItem key={index} faq={faq} />
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#1E293B] p-8 rounded-xl shadow-xl lg:col-span-1 flex flex-col justify-center items-center text-center">
                        <FaQuestionCircle className="text-[#7C3AED] text-5xl mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Need More Help?</h3>
                        <p className="text-gray-400 mb-6">
                            If you can't find your answer here, feel free to contact our support team.
                        </p>
                        <Link to="/contact">
                            <button className="btn bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold rounded-lg transition-colors">
                                Go to Contact Page
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Support;