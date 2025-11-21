import React from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '../types';
import { Search, Menu, ShoppingCart, Bell } from 'lucide-react';

// Mock Data Generation
const generateMockProducts = (): Product[] => {
    return [
        {
            id: '1',
            title: 'Merry Christmas Doll Tree Premium PE Fir Household 180cm Decoration Set',
            imageUrl: 'https://picsum.photos/400/400?random=1',
            price: 129000,
            isAd: true,
            purchaseCount: '2k+',
            delivery: {
                isFree: true,
                arrivalDate: '11.25 (Tue) Arrival',
                isGuaranteed: true,
                todayArrival: false
            },
            benefits: {
                membershipFreeReturn: true,
                gift: 'Ribbon doll 8pcs + White ribbon 8pcs gift',
                points: 1290
            },
            categories: ['Living/Health', 'Stationery', 'Party Supplies', 'Decor'],
            rating: { score: 4.8, count: 1750 },
            seller: { name: 'maerryo', badges: ['Big Power', 'Good Service'] },
            zzimCount: 5205,
            regDate: '2024.09.'
        },
        {
            id: '2',
            title: 'Cozy Winter Fleece Blanket Extra Soft Warm Throw for Sofa Bed',
            imageUrl: 'https://picsum.photos/400/400?random=2',
            price: 24900,
            isAd: false,
            purchaseCount: '500+',
            delivery: {
                isFree: false,
                arrivalDate: 'Today',
                isGuaranteed: true,
                todayArrival: true
            },
            benefits: {
                membershipFreeReturn: false,
            },
            categories: ['Living', 'Bedding', 'Blankets'],
            rating: { score: 4.6, count: 320 },
            seller: { name: 'DailyHome', badges: ['Good Service'] },
            zzimCount: 840
        },
        {
            id: '3',
            title: 'Professional Gaming Mouse 16000 DPI RGB Lighting Wired Lightweight',
            imageUrl: 'https://picsum.photos/400/400?random=3',
            price: 45000,
            isAd: true,
            delivery: {
                isFree: true,
                arrivalDate: 'Tomorrow',
                isGuaranteed: true,
            },
            benefits: {
                membershipFreeReturn: true,
                gift: 'Extra mouse feet included'
            },
            categories: ['Electronics', 'PC Accessories', 'Mice'],
            rating: { score: 4.9, count: 8900 },
            seller: { name: 'TechGear Korea', badges: ['Big Power'] },
            zzimCount: 12000
        },
        {
            id: '4',
            title: 'Organic Cotton T-Shirt Pack of 3 (Black/White/Grey)',
            imageUrl: 'https://picsum.photos/400/400?random=4',
            price: 32000,
            isAd: false,
            purchaseCount: '10k+',
            delivery: {
                isFree: true,
                arrivalDate: '11.26 (Wed) Arrival',
                isGuaranteed: false
            },
            benefits: {
                membershipFreeReturn: true,
            },
            categories: ['Fashion', 'Men', 'Tops'],
            rating: { score: 4.5, count: 5400 },
            seller: { name: 'BasicHouse', badges: [] },
            zzimCount: 3400
        },
        {
            id: '5',
            title: 'Stainless Steel Tumbler Vacuum Insulated Travel Mug 500ml',
            imageUrl: 'https://picsum.photos/400/400?random=5',
            price: 18500,
            isAd: false,
            delivery: {
                isFree: false,
                arrivalDate: 'Today',
                isGuaranteed: true,
                todayArrival: true
            },
            benefits: {
                membershipFreeReturn: false,
                gift: 'Cleaning brush'
            },
            categories: ['Kitchen', 'Tableware', 'Tumblers'],
            rating: { score: 4.7, count: 120 },
            seller: { name: 'EcoLife', badges: ['Good Service'] },
            zzimCount: 450
        },
        {
            id: '6',
            title: 'Wireless Noise Cancelling Headphones Over Ear Bluetooth 5.0',
            imageUrl: 'https://picsum.photos/400/400?random=6',
            price: 289000,
            isAd: true,
            purchaseCount: '1k+',
            delivery: {
                isFree: true,
                arrivalDate: 'Tomorrow',
                isGuaranteed: true
            },
            benefits: {
                membershipFreeReturn: true,
                points: 2890
            },
            categories: ['Electronics', 'Audio', 'Headphones'],
            rating: { score: 4.9, count: 2100 },
            seller: { name: 'SoundMaster', badges: ['Big Power'] },
            zzimCount: 6700
        }
    ];
};

interface ShoppingPageProps {
    onEndExperiment: () => void;
}

export const ShoppingPage: React.FC<ShoppingPageProps> = ({ onEndExperiment }) => {
    const products = generateMockProducts();

    return (
        <div className="min-h-screen bg-[#f5f7f8] text-[#333] font-sans pb-20">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <Menu className="w-6 h-6 text-gray-600 cursor-pointer lg:hidden" />
                        <h1 className="text-2xl font-bold text-[#03c75a] tracking-tight cursor-pointer">NAVER Shopping</h1>
                    </div>

                    {/* Search Bar */}
                    <div className="hidden md:flex flex-1 max-w-xl mx-4">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search for products, brands..."
                                className="w-full border-2 border-[#03c75a] rounded-full py-2.5 pl-5 pr-12 focus:outline-none"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-[#03c75a]">
                                <Search size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={onEndExperiment}
                            className="px-3 py-1.5 bg-red-500 text-white text-sm font-bold rounded hover:bg-red-600 transition-colors"
                        >
                            End Experiment
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full relative">
                            <Bell size={22} className="text-gray-600" />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                            <ShoppingCart size={22} className="text-gray-600" />
                        </button>
                        <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden border border-gray-300">
                            <img src="https://picsum.photos/id/64/100/100" alt="User" />
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Search (Visible only on small screens) */}
            <div className="md:hidden bg-white p-3 border-b border-gray-200">
                <div className="relative w-full">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full border border-gray-300 bg-gray-50 rounded-md py-2 pl-3 pr-10 focus:outline-none focus:border-[#03c75a]"
                    />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                </div>
            </div>

            {/* Main Content Area */}
            <main className="max-w-7xl mx-auto px-4 pt-6">

                {/* Filters / Sort Bar (Mock) */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                    <div className="flex gap-3">
                        <button className="font-bold text-black">Naver Ranking</button>
                        <button className="hover:text-black">Low Price</button>
                        <button className="hover:text-black">High Price</button>
                        <button className="hover:text-black">Date</button>
                        <button className="hover:text-black">Reviews</button>
                    </div>
                    <div className="hidden sm:block">
                        <span>View: </span>
                        <button className="font-bold ml-1">Grid</button>
                        <span className="mx-1">|</span>
                        <button>List</button>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="flex justify-center">
                            <ProductCard product={product} />
                        </div>
                    ))}
                    {/* Duplicate list to simulate scrolling */}
                    {products.map((product) => (
                        <div key={`${product.id}-dup`} className="flex justify-center">
                            <ProductCard product={{ ...product, id: `${product.id}-dup` }} />
                        </div>
                    ))}
                </div>

                {/* Pagination (Mock) */}
                <div className="flex justify-center mt-12 gap-2">
                    <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 text-gray-500">&lt;</button>
                    <button className="w-8 h-8 flex items-center justify-center bg-black text-white rounded font-bold">1</button>
                    <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 text-gray-600">2</button>
                    <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 text-gray-600">3</button>
                    <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 text-gray-600">4</button>
                    <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 text-gray-600">5</button>
                    <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 text-gray-500">&gt;</button>
                </div>

            </main>
        </div>
    );
}
