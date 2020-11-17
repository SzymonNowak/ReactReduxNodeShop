export const addItemToFirestore = (
  collectionName,
  itemContent,
  getFirestore
) => {
  const firestore = getFirestore();
  return firestore.collection(`${collectionName}`).add({
    ...itemContent,
  });
};
