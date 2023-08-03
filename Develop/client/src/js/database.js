import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });


  // TODO: Add logic to a method that accepts some content and adds it to the database
// Define an asynchronous function named `putDb` that accepts `content` to add to the database

  export const putDb = async (content) => {
  // Open the 'jate' database with version 1 and store it in the `jateDb` variable
 
  const jateDb = await openDB('jate', 1);
   // Start a read-write transaction on the 'jate' object store
 
  const tx = jateDb.transaction('jate', 'readwrite');
    // Get the object store named 'jate' from the transaction

  const store = tx.objectStore('jate');
    // Create a request to put data with an object containing `id` and `value` into the object store

  const request = store.put({id: 1, value: content});
  
  const result = await request;
   // Wait for the request to complete and store the result in the `result` variable

  console.log('data saved', result.value);


}




// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  // Open the 'jate' database with version 1 and store it in the `jateDb` variable
 
  const jateDb = await openDB('jate', 1);
  // Start a read-only transaction on the 'jate' object store
  
  const tx = jateDb.transaction('jata', 'readonly');
  // Get the object store named 'jate' from the transaction
  
  const store = tx.objectStore('jate');
  // Create a request to get the data with key 1 from the object store
 
  const request = store.get(1);
  // Wait for the request to complete and store the result in the `result` variable
 
  const result = await request;

  // Check if `result` contains data
  result
  // If `result` has a value, log the retrieved data
 ?console.log('Retrived content from the database', result.value )
 : console.log(' data not found');
  // Use optional chaining to return the value from the result, if it exists
  return result?.value;

} 



initdb();
