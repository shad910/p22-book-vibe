const getStoredBook = () => {
    const getStoredBookSTR = localStorage.getItem("readList");
    if (getStoredBookSTR) {
        const getStoredBookData = JSON.parse(getStoredBookSTR);
        return getStoredBookData;
    } else {
        return [];
    }
}

const addToDB = (id) => {
    const StoredBookData = getStoredBook();
    if (StoredBookData.includes(id)) {
        alert('already marked')
    } else {
        StoredBookData.push(id);
        const bookSTR = JSON.stringify(StoredBookData);
        localStorage.setItem("readList", bookSTR);
    }
}

const getStoredBookW = () => {
    const getStoredBookSTR = localStorage.getItem("wishList");
    if (getStoredBookSTR) {
        const getStoredBookData = JSON.parse(getStoredBookSTR);
        return getStoredBookData;
    } else {
        return [];
    }
}

const addToDBW = (id) => {
    const StoredBookData = getStoredBookW();
    if (StoredBookData.includes(id)) {
        alert('already added to your Wishlist')
    } else {
        StoredBookData.push(id);
        const bookSTR = JSON.stringify(StoredBookData);
        localStorage.setItem("wishList", bookSTR);
    }
}

export { getStoredBook, addToDB, getStoredBookW, addToDBW };