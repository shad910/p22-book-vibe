import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToDB, addToDBW } from "../../../../utility/Utility";

const BookDetails = () => {
    const { id } = useParams();
    const ConID = parseInt(id);
    const bookData = useLoaderData();

    const singleBookData = bookData.find((book) => book.bookId === ConID);

    const {
        bookId,
        bookName,
        author,
        image,
        category,
        review,
        tags,
        totalPages,
        publisher,
        yearOfPublishing,
        rating,
    } = singleBookData;

    const handleMarkAsRead = (id) => {
        addToDB(id);
    }

    const handleWishList = (id) => {
        addToDBW(id);
    }

    return (
        <div className="work-sans md:flex gap-7">
            <div className="w-[90%] md:w-[40%] flex justify-center py-10 bg-[#1313130d] rounded-2xl">
                <img className="md:w-80 w-48" src={image} alt={bookName} />
            </div>
            <div className="w-[60%]">
                <div className="space-y-2 mb-5">
                    <h3 className="playfair font-bold text-4xl">{bookName}</h3>
                    <h5 className="font-medium text-xl">By : {author}</h5>
                </div>
                <p className="py-2.5 border-y-2 border-gray-200 font-medium">
                    {category}
                </p>
                <p className="mt-5 text-[#131313b3]">
                    <span className="text-black font-bold">Review:</span> {review}
                </p>
                <div className="my-2.5 space-x-2.5 space-y-2.5 flex">
                    <span className="font-bold ">Tag</span>{" "}
                    <div className="flex gap-2.5">
                        {tags.map((tag, index) => (
                            <div
                                key={index}
                                className="badge badge-md text-[#23BE0A] bg-[#23be0a0d] "
                            >
                                #{tag}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="py-5 border-t-2 border-gray-200 flex gap-10">
                    <div className="space-y-2.5 text-[#131313b3]">
                        <p>Number of Pages:</p>
                        <p>Publisher:</p>
                        <p>Year of Publishing:</p>
                        <p>Rating:</p>
                    </div>
                    <div className="space-y-2.5 text-[#131313] font-semibold">
                        <p>{totalPages}</p>
                        <p>{publisher}</p>
                        <p>{yearOfPublishing}</p>
                        <p>{rating}</p>
                    </div>
                </div>
                <div className="flex gap-x-4">
                    <button onClick={() => handleMarkAsRead(bookId)} className="btn border-gray-300 ">Read</button>
                    <button onClick={() => handleWishList(bookId)} className="btn text-white bg-[#50B1C9] hover:text-[#50B1C9] hover:bg-white hover:border-[#50B1C9]">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
