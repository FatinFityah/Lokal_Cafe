export type Category = 'Local' | 'Western' | 'Drinks' | 'Dessert';

export interface MenuItem {
  id: string;
  name: string;
  category: Category;
  price: string;
  description: string;
}

export const menuItems: MenuItem[] = [
  // Local Food
  { id: '1', name: 'Nasi Lemak Kukus Biasa', category: 'Local', price: 'RM 6.00', description: 'Traditional steamed coconut rice with sambal and condiments.' },
  { id: '2', name: 'Nasi Ayam Crunchy', category: 'Local', price: 'RM 12.00', description: 'Crispy fried chicken served with fragrant rice and soup.' },
  { id: '3', name: 'Nasi Lemak Kukus Buttermilk', category: 'Local', price: 'RM 15.00', description: 'Our signature nasi lemak paired with creamy buttermilk chicken.' },

  // Western Food
  { id: '4', name: 'Chicken Chop', category: 'Western', price: 'RM 16.00', description: 'Deep-fried marinated chicken thigh served with fries and coleslaw.' },
  { id: '5', name: 'Fettucine Buttermilk', category: 'Western', price: 'RM 18.00', description: 'Creamy buttermilk sauce tossed with fettucine pasta.' },
  { id: '6', name: 'Spaghetti Carbonara', category: 'Western', price: 'RM 18.00', description: 'Classic creamy white sauce pasta with mushrooms.' },

  // Drinks
  { id: '7', name: 'Mineral Water', category: 'Drinks', price: 'RM 2.00', description: 'Chilled mineral water.' },
  { id: '8', name: 'Butterscotch Frappe', category: 'Drinks', price: 'RM 13.00', description: 'Ice blended butterscotch drink topped with whipped cream.' },
  { id: '9', name: 'Banana Frappe', category: 'Drinks', price: 'RM 13.00', description: 'Sweet and creamy banana ice blend.' },
  { id: '10', name: 'Vietnam Frappe', category: 'Drinks', price: 'RM 14.00', description: 'Strong Vietnamese coffee blend frappe.' },
  { id: '11', name: 'Blue Monster Frappe', category: 'Drinks', price: 'RM 14.00', description: 'A vibrant blue vanilla citrus blend.' },
  { id: '12', name: 'Strawberry Frappe', category: 'Drinks', price: 'RM 13.00', description: 'Fresh strawberry ice blended drink.' },

  // Desserts & Snacks
  { id: '13', name: 'Spring Roll', category: 'Dessert', price: 'RM 6.00', description: 'Crispy vegetable spring rolls.' },
  { id: '14', name: 'Peanut Waffle', category: 'Dessert', price: 'RM 5.00', description: 'Classic waffle topped with roasted peanut spread.' },
  { id: '15', name: 'Strawberry Waffle', category: 'Dessert', price: 'RM 6.00', description: 'Waffle topped with strawberry jam/syrup.' },
  { id: '16', name: 'Chocolate Waffle', category: 'Dessert', price: 'RM 6.00', description: 'Waffle topped with rich chocolate spread.' },
  { id: '17', name: 'Chocolate Larva', category: 'Dessert', price: 'RM 12.00', description: 'Molten chocolate cake served with vanilla ice cream.' },
  { id: '18', name: 'Popcorn Chicken', category: 'Dessert', price: 'RM 10.00', description: 'Bite-sized fried chicken snacks.' },
  { id: '19', name: 'Meatball Fries', category: 'Dessert', price: 'RM 12.00', description: 'Meatballs served with cheesy fries.' },
];