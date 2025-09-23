// interfaces/index.ts

// Placeholder for Card component props
export interface CardProps {
  image: string;
  title: string;
  price: number;
  location: string;
}

// Placeholder for Button component props
export interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  icon?: React.ReactNode;
}

export interface InputProps {
  name: string;
  type: string;
  placeholder: string;
}

export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}
