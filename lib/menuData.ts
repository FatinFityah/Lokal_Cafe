export type Category = 'Local' | 'Western' | 'Drinks' | 'Dessert';

export interface MenuItem {
  id: string;
  name: string;
  category: Category;
  price: string;
  description: string;
  image: string; // New field for the photo path
}

export const menuItems: MenuItem[] = [
  // Local Food
  { 
    id: '1', 
    name: 'Nasi Lemak Kukus Biasa', 
    category: 'Local', 
    price: 'RM 6.00', 
    description: 'Traditional steamed coconut rice with sambal and condiments.',
    image: '/images/1.jpg'
  },
  { 
    id: '2', 
    name: 'Nasi Ayam Crunchy', 
    category: 'Local', 
    price: 'RM 12.00', 
    description: 'Crispy fried chicken served with fragrant rice and soup.',
    image: '/images/2.png'
  },
  { 
    id: '3', 
    name: 'Nasi Lemak Buttermilk', 
    category: 'Local', 
    price: 'RM 15.00', 
    description: 'Our signature nasi lemak paired with creamy buttermilk chicken.',
    image: '/images/3.png'
  },

  // Western Food
  { 
    id: '4', 
    name: 'Chicken Chop', 
    category: 'Western', 
    price: 'RM 16.00', 
    description: 'Deep-fried marinated chicken thigh served with fries and coleslaw.',
    image: '/images/4.png'
  },
  { 
    id: '5', 
    name: 'Fettucine Buttermilk', 
    category: 'Western', 
    price: 'RM 18.00', 
    description: 'Creamy buttermilk sauce tossed with fettucine pasta.',
    image: '/images/5.png'
  },
  { 
    id: '6', 
    name: 'Spaghetti Carbonara', 
    category: 'Western', 
    price: 'RM 18.00', 
    description: 'Classic creamy white sauce pasta with mushrooms.',
    image: '/images/6.jpg'

  { 
    id: '7', 
    name: 'Spaghetti Bolognese', 
    category: 'Western', 
    price: 'RM 18.00', 
    description: 'Experience nice bolognese in town.',
    image: '/images/20.png'
  },

  // Drinks
  { id: '7', name: 'Mineral Water', category: 'Drinks', price: 'RM 2.00', description: 'Chilled mineral water.', image: '/images/7.jpg' },
  { id: '8', name: 'Butterscotch Frappe', category: 'Drinks', price: 'RM 13.00', description: 'Ice blended butterscotch drink.', image: '/images/8.jpg' },
  { id: '9', name: 'Banana Frappe', category: 'Drinks', price: 'RM 13.00', description: 'Sweet and creamy banana ice blend.', image: '/images/9.jpg' },
  { id: '10', name: 'Vietnam Frappe', category: 'Drinks', price: 'RM 14.00', description: 'Strong Vietnamese coffee blend frappe.', image: '/images/10.jpg' },
  { id: '11', name: 'Blue Monster Frappe', category: 'Drinks', price: 'RM 14.00', description: 'A vibrant blue vanilla citrus blend.', image: '/images/11.jpg' },
  { id: '12', name: 'Strawberry Frappe', category: 'Drinks', price: 'RM 13.00', description: 'Fresh strawberry ice blended drink.', image: '/images/12.jpg' },
  {id:  '13', name: 'Chocolate Larva', category: 'Drinks', price: 'RM 12.00', description: 'Iced chocolate cake with ice cream.', image: '/images/17.jpg' },

  // Desserts
  { id: '14', name: 'Spring Roll', category: 'Dessert', price: 'RM 6.00', description: 'Crispy vegetable spring rolls.', image: '/images/13.png' },
  { id: '15', name: 'Peanut Waffle', category: 'Dessert', price: 'RM 5.00', description: 'Classic waffle with peanut spread.', image: '/images/14.jpg' },
  { id: '16', name: 'Strawberry Waffle', category: 'Dessert', price: 'RM 6.00', description: 'Waffle with strawberry jam.', image: 'images/16.jpg' },
  { id: '17', name: 'Chocolate Waffle', category: 'Dessert', price: 'RM 6.00', description: 'Waffle with rich chocolate.', image: '/images/15.jpg' },
  { id: '18', name: 'Popcorn Chicken', category: 'Dessert', price: 'RM 10.00', description: 'Bite-sized fried chicken snacks.', image: '/images/18.jpg' },
  { id: '19', name: 'Meatball Fries', category: 'Dessert', price: 'RM 12.00', description: 'Meatballs served with cheesy fries.', image: '/images/19.jpg' },
];