import { Bounce, toast } from "react-toastify";

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
        toast.warn('This book is already marked', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    } else {
        StoredBookData.push(id);
        const bookSTR = JSON.stringify(StoredBookData);
        localStorage.setItem("readList", bookSTR);
        toast.success(`🦄 added to your Read Books Section.`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
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
        toast.warn('This book is already added to your Wishlist.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    } else {
        StoredBookData.push(id);
        const bookSTR = JSON.stringify(StoredBookData);
        localStorage.setItem("wishList", bookSTR);
        toast.success(`🦄 added to your Wishlist.`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }
}

export { getStoredBook, addToDB, getStoredBookW, addToDBW };