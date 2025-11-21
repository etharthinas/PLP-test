export interface Product {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  purchaseCount?: string; // e.g., "2k+"
  isAd: boolean;
  delivery: {
    isFree: boolean;
    arrivalDate: string; // e.g., "Tomorrow (Wed) arrival"
    isGuaranteed: boolean; // "Arrival Guarantee"
    todayArrival?: boolean;
  };
  benefits: {
    membershipFreeReturn: boolean;
    points?: number;
    gift?: string; // e.g. "Ribbon doll 8pcs..."
  };
  categories: string[];
  rating: {
    score: number;
    count: number; // e.g. 1750
  };
  seller: {
    name: string;
    badges: string[]; // e.g. "Big Power", "Good Service"
  };
  zzimCount: number; // "Like" count
  regDate?: string;
}