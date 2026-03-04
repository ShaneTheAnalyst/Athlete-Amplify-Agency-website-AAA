
export interface ServicePackage {
  id: string;
  name: string;
  price: number;
  duration: string;
  features: string[];
  description: string;
  tier: 1 | 2 | 3 | 'elite';
}

export interface CartItem extends ServicePackage {
  quantity: number;
}
