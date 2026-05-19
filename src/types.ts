export type CardItem = {
  title: string;
  body?: string;
  icon: string;
};

export type PricePlan = {
  title: string;
  price: string;
  suffix?: string;
  body: string;
  icon: string;
  featured?: boolean;
  badges?: string[];
};

export type Voice = {
  title: string;
  body: string;
  meta: string;
  avatar: string;
};
