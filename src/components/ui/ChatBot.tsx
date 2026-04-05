"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";


type Message = {
  id: number;
  text: string;
  sender: "bot" | "user";
};

type Option = {
  label: string;
  key: string;
  answer: string;
  path?: string;
};

// --- Human-Friendly Global Options ---
const CHAT_OPTIONS: Option[] = [
  { label: "See your Resume", key: "resume", answer: "Right away! Opening the resume page for you...", path: "/resume" },
  { label: "What's your story?", key: "story", answer: "I love building fast, smart systems. Let's head to my about page to see more.", path: "/about" },
  { label: "Latest Project", key: "project", answer: "I'll take you to my latest featured project.", path: "/projects/cloud-sync-v2" },
  { label: "How do we start?", key: "start", answer: "I'm ready when you are! Let's start a conversation on the contact page.", path: "/contact" },
  { label: "View all projects", key: "all-projects", answer: "Sure thing! Loading my full project list for you...", path: "/projects" },
  { label: "Check your Lab", key: "lab", answer: "Let's see what I'm experimenting with in the playground.", path: "/lab" },
  { label: "How to hire you?", key: "hire", answer: "I'd love to talk. Let's go to the contact page.", path: "/contact" },
  { label: "Read the blog", key: "blog", answer: "Happy to share my thoughts. Loading the blog...", path: "/blog" }
];


export default function ChatBot({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! I'm your AI guide. I can help you find my resume, latest projects, or even my secret lab experiments. What would you like to see?", sender: "bot" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [showOptions, setShowOptions] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping, showOptions]);

  const handleOptionClick = (option: Option) => {
    if (isTyping) return;
    
    setShowOptions(false);
    
    const userMsg: Message = { id: Date.now(), text: option.label, sender: "user" };
    setMessages(prev => [...prev, userMsg]);
    
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      const botMsg: Message = { id: Date.now() + 1, text: option.answer, sender: "bot" };
      setMessages(prev => [...prev, botMsg]);
      
      // If the option has a path, navigate after a short delay
      if (option.path) {
        setTimeout(() => {
          router.push(option.path!);
          onClose(); // Close the bot after navigation
        }, 800);
      } else {
        setTimeout(() => setShowOptions(true), 400); 
      }
    }, 1000);
  };


  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className="fixed bottom-6 right-6 w-[320px] h-[480px] z-[999] glass rounded-[2.5rem] border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="px-6 py-5 border-b border-white/5 flex justify-between items-center bg-white/[0.03]">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-[8px] font-black text-white">AI</div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-white">Assistant</span>
            </div>
            <button 
              onClick={onClose} 
              className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white transition-all bg-white/5 hover:bg-white/10 rounded-full"
            >
              <i className="bi bi-x-lg text-[14px]"></i>
            </button>
          </div>

          {/* Conversation Area with Integrated Options */}
          <div ref={scrollRef} className="flex-1 p-6 space-y-4 overflow-y-auto thin-scroll scroll-smooth flex flex-col">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className={`max-w-[90%] p-4 rounded-2xl text-[12px] font-medium leading-relaxed ${msg.sender === "bot" ? "bg-white/[0.05] text-slate-300 self-start border border-white/5 rounded-tl-none" : "bg-purple-600 text-white self-end border border-white/10 ml-auto rounded-tr-none px-5"}`}
              >
                {msg.text}
              </motion.div>
            ))}
            
            {isTyping && (
              <div className="p-4 bg-white/[0.05] rounded-2xl rounded-tl-none border border-white/5 w-fit flex gap-1.5 opacity-50">
                <span className="w-1 h-1 bg-slate-500 rounded-full animate-bounce"></span>
                <span className="w-1 h-1 bg-slate-500 rounded-full animate-bounce delay-100"></span>
                <span className="w-1 h-1 bg-slate-500 rounded-full animate-bounce delay-200"></span>
              </div>
            )}

            {/* Integrated Options List - Clean Chips within the conversation */}
            {showOptions && !isTyping && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="pt-4 flex flex-col gap-3"
              >
                 <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest pl-1">Ask me anything:</span>
                 <div className="flex flex-wrap gap-2">
                   {CHAT_OPTIONS.map((opt) => (
                     <button
                       key={opt.key}
                       onClick={() => handleOptionClick(opt)}
                       className="px-3 py-1.5 bg-white/[0.03] border border-white/10 rounded-full text-[9px] font-bold text-slate-400 hover:text-white hover:border-purple-600 transition-all uppercase"
                     >
                       {opt.label}
                     </button>
                   ))}
                 </div>
              </motion.div>
            )}
          </div>
          
          {/* Opaque Spacer to keep the conversation feeling grounded */}
          <div className="h-6 w-full bg-gradient-to-t from-black/20 to-transparent flex-shrink-0"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
