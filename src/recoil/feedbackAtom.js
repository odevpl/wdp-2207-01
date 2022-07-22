import { atom, selector } from 'recoil';

export const feedbackState = atom({
  key: 'feedback',
  default: [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ex doloribus cum ea culpa, tempora eius ut reprehenderit natus sit obcaecati impedit aliquid explicabo illum odit, itaque nulla voluptatum exercitationem!',
      role: 'Client',
      picture: 'https://randomuser.me/api/portraits/men/33.jpg',
    },
    {
      id: 2,
      firstName: 'Ann',
      lastName: 'Smith',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dignissimos ab molestias eveniet delectus beatae aperiam accusamus, deleniti labore quo quas maxime enim, animi sunt quaerat, est possimus! Repellat, ducimus?',
      role: 'Employee',
      picture: 'https://randomuser.me/api/portraits/women/54.jpg',
    },
    {
      id: 3,
      firstName: 'Mark',
      lastName: 'Kowalski',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem obcaecati voluptas aliquid ipsa libero voluptatibus laborum vitae. Vero accusantium, blanditiis, culpa saepe ratione, mollitia voluptates iure consequatur consectetur minima magni.',
      role: 'CEO',
      picture: 'https://randomuser.me/api/portraits/men/69.jpg',
    },
  ],
});

export const feedbackLength = selector({
  key: 'feedbackLength',
  get: ({ get }) => {
    const feedbacks = get(feedbackState);
    return feedbacks.length;
  },
});
