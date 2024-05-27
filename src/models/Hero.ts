export type Hero = {
  id: number;
  name: string;
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
  images: {
    lg: string;
    md: string;
    sm: string;
    xs: string;
  };
};
