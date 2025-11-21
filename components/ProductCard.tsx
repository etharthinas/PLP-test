import React, { useState } from 'react';
import { Heart, Star, AlertCircle } from 'lucide-react';
import { Product } from '../types';
import { NPayIcon, TalkTalkIcon, LightningIcon } from './Icons';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);

  // Format price with commas
  const formattedPrice = new Intl.NumberFormat('en-US').format(product.price);

  return (
    <div className="bg-white p-4 rounded-lg border border-transparent hover:border-gray-200 hover:shadow-lg transition-all duration-200 cursor-pointer group w-full max-w-[400px]">
      {/* Top Section: Image & Thumbnails */}
      <div className="relative mb-3">
        <div className="relative w-full aspect-square rounded-md overflow-hidden bg-gray-100">
            {/* Purchase Count Badge */}
            {product.purchaseCount && (
                <span className="absolute top-0 left-0 z-10 bg-black/40 text-white text-[11px] px-1.5 py-1 font-normal rounded-br-md">
                    Purchase {product.purchaseCount}
                </span>
            )}
            
            <img 
                src={product.imageUrl} 
                alt={product.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />

            {/* Like Button Overlay */}
            <button 
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsLiked(!isLiked);
                }}
                className="absolute bottom-2 right-2 z-10 bg-white/90 hover:bg-white rounded-full p-1.5 shadow-sm transition-colors"
            >
                <Heart 
                    size={18} 
                    className={`transition-colors ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-gray-600'}`} 
                />
                <span className="sr-only">Like</span>
            </button>
        </div>
      </div>

      {/* Info Area */}
      <div className="flex flex-col gap-1">
        {/* Title */}
        <h3 className="text-[14px] leading-[1.3] text-gray-800 font-normal hover:underline line-clamp-2 mb-1">
            {product.title}
        </h3>

        {/* Price & Ad Badge */}
        <div className="flex items-center gap-2 mb-1">
            {product.isAd && (
                <span className="flex items-center justify-center px-1.5 py-[2px] border border-gray-300 rounded-[4px] text-[10px] text-gray-500">
                    Ad
                </span>
            )}
            <div className="flex items-baseline gap-1">
                <span className="text-[18px] font-bold text-gray-900">{formattedPrice}</span>
                <span className="text-[14px] font-normal text-gray-900">won</span>
            </div>
        </div>

        {/* Delivery Info */}
        <div className="flex flex-wrap items-center gap-2 text-[12px] text-gray-600 mb-1">
            {product.delivery.isFree && (
                <span className="bg-gray-100 px-1 py-0.5 rounded text-gray-600">Free Delivery</span>
            )}
            {product.benefits.membershipFreeReturn && (
                 <span className="text-[#00C05A] bg-[#00C05A]/10 px-1 py-0.5 rounded text-[11px] font-medium">
                    Membership Free Return
                 </span>
            )}
        </div>

        {/* Guaranteed Arrival */}
        {(product.delivery.isGuaranteed || product.delivery.todayArrival) && (
            <div className="flex items-center gap-1 mb-1">
                {product.delivery.todayArrival ? (
                     <div className="flex items-center text-[12px]">
                         <LightningIcon className="h-3 w-auto mr-1" />
                         <span className="text-green-600 font-bold">Arrives Today</span>
                     </div>
                ) : (
                    <div className="flex items-center text-[12px] text-gray-700">
                        <span className="text-green-600 font-medium mr-1">Guaranteed</span>
                        <span>{product.delivery.arrivalDate}</span>
                    </div>
                )}
            </div>
        )}

        {/* Categories */}
        <div className="flex flex-wrap gap-1 text-[11px] text-gray-400 mb-1">
            {product.categories.map((cat, idx) => (
                <React.Fragment key={idx}>
                    <span className="hover:underline cursor-pointer">{cat}</span>
                    {idx < product.categories.length - 1 && <span>/</span>}
                </React.Fragment>
            ))}
        </div>

        {/* Promotional Gift Text */}
        {product.benefits.gift && (
             <div className="text-[12px] text-gray-500 bg-gray-50 px-2 py-1 rounded truncate">
                <span className="bg-red-50 text-red-600 text-[10px] border border-red-100 px-1 rounded mr-1">Event</span>
                {product.benefits.gift}
             </div>
        )}

        {/* Bottom Meta Data (Review, Date, etc) */}
        <div className="flex items-center gap-2 mt-2 text-[12px] text-gray-500 border-t border-gray-100 pt-2">
            <div className="flex items-center gap-0.5 hover:underline cursor-pointer">
                <span className="text-gray-400">Reviews</span>
                <Star size={10} className="fill-red-500 text-red-500" />
                <span className="font-bold text-gray-800">{product.rating.score}</span>
                <span className="text-gray-400">({new Intl.NumberFormat('en-US').format(product.rating.count)})</span>
            </div>
            <span className="text-gray-300">|</span>
            <div className="flex items-center gap-1 text-gray-400">
                <span>Like</span>
                <span>{new Intl.NumberFormat('en-US').format(product.zzimCount)}</span>
            </div>
            {product.regDate && (
                <>
                 <span className="text-gray-300">|</span>
                 <span className="text-gray-400">Reg {product.regDate}</span>
                </>
            )}
        </div>
        
        {/* Utility Links (Report, Talk) */}
        <div className="flex items-center justify-end gap-3 mt-1 text-[11px] text-gray-400">
             <button className="flex items-center gap-0.5 hover:text-gray-600">
                <AlertCircle size={10} />
                Report
             </button>
             <button className="flex items-center gap-0.5 hover:text-gray-600">
                <TalkTalkIcon className="w-3 h-3" />
                TalkTalk
             </button>
        </div>
      </div>

      {/* Mall Info Area */}
      <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <span className="font-bold text-[13px] text-gray-800 hover:underline cursor-pointer">
                    {product.seller.name}
                </span>
                {/* Badges */}
                <div className="flex gap-1">
                    {product.seller.badges.map((badge, idx) => (
                        <span key={idx} className={`text-[10px] px-1 py-[1px] rounded border ${
                            badge === 'Big Power' 
                            ? 'border-gray-200 text-gray-600' // Simplified for aesthetic
                            : 'border-green-100 text-green-600'
                        }`}>
                             {/* Using an image for Big Power if strictly needed, but text is cleaner for this demo */}
                            {badge === 'Big Power' && <span className="inline-block w-3 h-3 bg-yellow-400 rounded-full mr-0.5 align-middle"></span>}
                            {badge}
                        </span>
                    ))}
                </div>
            </div>
            <button className="text-[11px] text-gray-500 border border-gray-200 px-2 py-0.5 rounded hover:bg-gray-50">
                Info
            </button>
        </div>
        
        {/* NPay Section */}
        <div className="flex items-center justify-between bg-gray-50 p-2 rounded-md">
            <div className="flex items-center gap-2">
                 <NPayIcon className="h-3.5 w-auto" />
                 <span className="text-[11px] text-gray-600">
                    Points <span className="font-bold text-[#00C05A]">Max {new Intl.NumberFormat('en-US').format(Math.floor(product.price * 0.01))} won</span>
                 </span>
            </div>
            <button className="text-[11px] text-gray-500 hover:text-gray-800 underline decoration-gray-300">
                Details
            </button>
        </div>
      </div>
    </div>
  );
};