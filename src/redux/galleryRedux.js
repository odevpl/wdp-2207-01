export const getById = ({ gallery }, id) => gallery.filter(item => item.id === id);

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
