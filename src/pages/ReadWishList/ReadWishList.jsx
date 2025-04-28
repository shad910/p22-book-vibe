import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook, getStoredBookW } from '../../utility/Utility';
import ReadList from './ReadList/ReadList';
import Wishlist from './Wishlist/Wishlist';

const ReadWishList = () => {


    const bookData = useLoaderData();

    const [readList, setReadList] = useState([]);
    const [wishlist, setWishList] = useState([]);
    const [sort, setSort] = useState("");

    useEffect(() => {
        if (bookData && bookData.length > 0) {
            {
                const storedBookData = getStoredBook();
                const convertedStoredBook = storedBookData.map(id => parseInt(id));
                const myReadList = bookData.filter(book => convertedStoredBook.includes(book.bookId));
                setReadList(myReadList);
            }

            {
                const storedBookData = getStoredBookW();
                const convertedStoredBook = storedBookData.map(id => parseInt(id));
                const myWishList = bookData.filter(book => convertedStoredBook.includes(book.bookId));
                setWishList(myWishList);
            }
        }
    }, [bookData]);

    const handleSort = (type) => {
        setSort(type)
        if (type === "pages") {
            const sortedByPageMSR = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedByPageMSR);
            const sortedByPageWL = [...wishlist].sort((a, b) => a.totalPages - b.totalPages);
            setWishList(sortedByPageWL);


        }
        if (type === "ratings") {
            const sortedByRatingMSR = [...readList].sort((a, b) => a.rating - b.rating);
            setReadList(sortedByRatingMSR);
            const sortedByRatingWL = [...wishlist].sort((a, b) => a.rating - b.rating);
            setWishList(sortedByRatingWL);
        }

    }


    return (
        <div className='work-sans'>
            <h1 className='text-center py-7 text-3xl font-bold bg-[#1313130d] rounded-2xl mb-5'>Books</h1>
            <details className="dropdown dropdown-bottom mb-6">
                <summary className="btn m-1 text-white bg-[#23BE0A]">Sort by : {sort ? sort : ""}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={() => handleSort("pages")}>pages</a></li>
                    <li><a onClick={() => handleSort("ratings")}>ratings</a></li>
                </ul>
            </details>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    {
                        readList.map((read, index) => <ReadList key={index} read={read} setReadList={setReadList}></ReadList>)
                    }
                </TabPanel>
                <TabPanel>
                    {
                        wishlist.map((wish, index) => <Wishlist key={index} wish={wish} setWishList={setWishList}></Wishlist>)
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};


export default ReadWishList;