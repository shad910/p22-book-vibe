import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredBook } from '../../utility/Utility';
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    CartesianGrid,
    Legend,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';

const PageToRead = () => {

    const bookData = useLoaderData();
    const [readList, setReadList] = useState([]);

    useEffect(() => {
        if (bookData && bookData.length > 0) {
            const storedBookData = getStoredBook();
            const convertedStoredBook = storedBookData.map(id => parseInt(id));
            const myReadList = bookData.filter(book => convertedStoredBook.includes(book.bookId));
            setReadList(myReadList);
        }
    }, [bookData]);

    return (
        <div className="w-full mx-auto h-[200px] lg:h-[292px] text-xs my-10">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={readList}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bookName" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="totalPages" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PageToRead;
