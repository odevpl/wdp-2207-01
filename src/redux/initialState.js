const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  cart: {
    products: [],
  },
  comparedProducts: {
    products: [],
  },
  feedback: [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      role: 'Client',
      picture: 'https://randomuser.me/api/portraits/men/33.jpg',
    },
    {
      id: 2,
      firstName: 'Ann',
      lastName: 'Smith',
      role: 'Employee',
      picture: 'https://randomuser.me/api/portraits/women/54.jpg',
    },
    {
      id: 3,
      firstName: 'Mark',
      lastName: 'Kowalski',
      role: 'CEO',
      picture: 'https://randomuser.me/api/portraits/men/69.jpg',
    },
  ],
};

export default initialState;
