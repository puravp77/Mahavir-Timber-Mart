import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Heart, Share2, Music, Send, ExternalLink } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa6';
import { COMPANY_INFO } from '../data/timberData';

function ReelCard({ videoUrl, posterUrl, caption, initialLikes = 1248 }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikes);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleLike = (e) => {
    e.stopPropagation();
    if (liked) {
      setLikeCount(likeCount - 1);
      setLiked(false);
    } else {
      setLikeCount(likeCount + 1);
      setLiked(true);
    }
  };

  const handleShare = (e) => {
    e.stopPropagation();
    const msg = `Check out Shree Mahavir Timber Mart Instagram Reel! ${COMPANY_INFO.instagramUrl}`;
    window.open(`https://wa.me/91${COMPANY_INFO.phones[0]}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative w-full max-w-sm mx-auto rounded-[36px] overflow-hidden border-4 border-[#2D2D2D] shadow-2xl shadow-[#9A6B34]/25 bg-black aspect-[9/16] group cursor-pointer"
      onClick={togglePlay}
    >
      {/* 9:16 Video Player */}
      <video
        ref={videoRef}
        src={videoUrl}
        poster={posterUrl}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />

      {/* Top Reel Overlay Bar */}
      <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/85 via-black/40 to-transparent flex items-center justify-between z-20">
        <a
          href={COMPANY_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center space-x-2 group/user"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-pink-500 bg-white p-0.5 group-hover/user:scale-105 transition-transform shrink-0">
            <img
              src={COMPANY_INFO.logo}
              alt="Avatar"
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          <div>
            <div className="flex items-center space-x-1">
              <span className="text-[11px] font-semibold text-white tracking-wide group-hover/user:text-[#C89D5B]">
                {COMPANY_INFO.instagramHandle}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <span className="text-[9px] text-gray-300 font-mono block">Surat, Gujarat</span>
          </div>
        </a>

        {/* Mute/Unmute Toggle Pill */}
        <button
          onClick={toggleMute}
          className="p-2 rounded-full bg-black/60 text-white hover:bg-gold-gradient hover:text-black transition-all border border-white/10"
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
        </button>
      </div>

      {/* Center Play/Pause Touch Indicator */}
      {!isPlaying && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-30">
          <div className="w-14 h-14 rounded-full bg-gold-gradient text-black flex items-center justify-center shadow-2xl">
            <Play className="w-7 h-7 ml-1" />
          </div>
        </div>
      )}

      {/* Right Action Icons Bar */}
      <div className="absolute right-3.5 bottom-20 flex flex-col items-center space-y-5 z-20">
        {/* Instagram Profile */}
        <a
          href={COMPANY_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col items-center group/btn"
          title="Open Instagram"
        >
          <div className="p-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white transition-transform group-hover/btn:scale-110 shadow-lg">
            <FaInstagram className="w-5 h-5" />
          </div>
          <span className="text-[9px] font-mono text-white mt-0.5">Profile</span>
        </a>

        {/* Like */}
        <button
          onClick={toggleLike}
          className="flex flex-col items-center group/btn"
        >
          <div className={`p-2.5 rounded-full glass-panel transition-transform group-hover/btn:scale-110 ${liked ? 'text-red-500 bg-red-500/20' : 'text-white'}`}>
            <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
          </div>
          <span className="text-[10px] font-mono text-white mt-0.5">{likeCount}</span>
        </button>

        {/* Share */}
        <button
          onClick={handleShare}
          className="flex flex-col items-center group/btn"
        >
          <div className="p-2.5 rounded-full glass-panel text-emerald-400 transition-transform group-hover/btn:scale-110">
            <Share2 className="w-5 h-5" />
          </div>
          <span className="text-[9px] font-mono text-white mt-0.5">Share</span>
        </button>
      </div>

      {/* Bottom Caption & Audio Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/95 via-black/60 to-transparent z-20 text-left pr-14">
        <p className="text-xs text-white font-medium leading-relaxed">
          {caption}
        </p>

        <div className="mt-2 flex items-center space-x-1.5 text-[10px] text-[#C89D5B] font-mono">
          <Music className="w-3 h-3 animate-spin" style={{ animationDuration: '4s' }} />
          <span className="truncate">Original Audio • @{COMPANY_INFO.instagramHandle}</span>
        </div>

        {/* Direct Action Buttons */}
        <div className="mt-3 flex items-center gap-1.5">
          <a
            href={COMPANY_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 py-2 px-2.5 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-semibold text-[11px] flex items-center justify-center space-x-1 shadow-lg hover:scale-102 transition-transform truncate"
          >
            <FaInstagram className="w-3 h-3 shrink-0" />
            <span className="truncate">Follow</span>
          </a>

          <a
            href={`https://wa.me/91${COMPANY_INFO.phones[0]}?text=${encodeURIComponent(`Hello SHREE MAHAVIR TIMBER MART, I saw your Instagram reel (${caption}) and want to inquire.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="py-2 px-3 rounded-full bg-gold-gradient text-black font-semibold text-[11px] flex items-center justify-center space-x-1 shadow-lg hover:scale-102 transition-transform shrink-0"
          >
            <Send className="w-3 h-3" />
            <span>Inquire</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function VideoShowcase() {
  return (
    <section className="py-16 sm:py-24 bg-[#0F0F0F] relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#9A6B34]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 text-[#C89D5B] font-mono text-[10px] sm:text-xs tracking-widest uppercase mb-2 sm:mb-3">
            <FaInstagram className="w-4 h-4 text-pink-500" />
            <span>Official Instagram Reels</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white">
            Follow <span className="text-gold-gradient">@{COMPANY_INFO.instagramHandle}</span>
          </h2>
          <p className="mt-2 sm:mt-4 text-gray-400 text-xs sm:text-lg font-light">
            Experience our Surat stock yard, precision log milling, and daily timber arrivals live on Instagram.
          </p>

          <div className="mt-5 flex items-center justify-center">
            <a
              href={COMPANY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-semibold text-xs sm:text-sm hover:scale-105 transition-transform shadow-xl"
            >
              <FaInstagram className="w-4 h-4" />
              <span>Visit @{COMPANY_INFO.instagramHandle}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 2 Reels Side-by-Side Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto items-center">
          
          {/* Reel Card 1: Vid-1.mp4 */}
          <ReelCard
            videoUrl="/assets/Vid-1.mp4"
            posterUrl="/assets/1.png"
            caption="Precision timber log milling & saw cutting at Surat yard. 🪵✨"
            initialLikes={1420}
          />

          {/* Reel Card 2: Vid-2.mp4 */}
          <ReelCard
            videoUrl="/assets/Vid-2.mp4"
            posterUrl="/assets/2.JPG"
            caption="Fresh arrivals of natural hardwood logs & Valsadi teak wood in Surat. 🪵🌲"
            initialLikes={1890}
          />

        </div>

      </div>
    </section>
  );
}
