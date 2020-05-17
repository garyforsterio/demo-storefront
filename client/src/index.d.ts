/**
 * Product interface
 */
export interface Product {
  id: string;
  name: string;
  description: string;
  like_count: number;
  comment_count: number;
  price: number;
  is_sold_out: boolean;
  shipping_fee: string;
  image: string;
  category_id: number;
}

/**
 * Menu item interface for rendering links
 */
export interface MenuItem {
  label: string;
  path: string;
}

/**
 * Product category interface
 */
export interface Category {
  id: string;
  name: string;
}
