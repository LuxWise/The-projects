import React from "react";

function useLocalStorage(itemName, initialValue) {

  const [Item, setItem] =  React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);


  React.useEffect(() => {
    try{
      const localStorageItem = localStorage.getItem(itemName);

      let parcedItem;

      if(!localStorageItem){
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parcedItem = initialValue;
      }else {
        parcedItem = JSON.parse(localStorageItem);
        setItem(parcedItem);
      }

      setLoading(false);

    } catch (error) {
      setLoading(error);
      setError(true);
    } 
  },[ ]);


  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }

  return {
    Item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };
