import React from 'react';
import { IoMdContacts } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { RiPagesLine } from "react-icons/ri";
import { NavLink } from 'react-router';

const Wishlist = ({ wish }) => {
    const { bookId, image, bookName, author, tags, category, rating, publisher, yearOfPublishing, totalPages
    } = wish;
    return (
        <div className='md:flex bg-gray-100 border-gray-200 shadow-2xl p-1.5 md:p-3 items-center gap-6 my-6 rounded-2xl'>
            <div className='p-4 bg-[#1313130d] rounded-2xl flex justify-center'>
                <img className='w-[100px] md:w-[150px]' src={image} alt={bookName} />
            </div>
            <div>
                <div className='space-y-2 mb-3'>
                    <h2 className='playfair font-bold text-xl'>{bookName}</h2>
                    <p className='text-sm font-medium'>By : {author}</p>
                </div>
                <div className='mb-3'>
                    <span className="font-bold text-xs">Tag</span>{" "}
                    {tags.map((tag, index) => (
                        <div
                            key={index}
                            className="badge badge-md text-[#23BE0A] bg-[#23be0a0d]"
                        >
                            #{tag}
                        </div>
                    ))}
                </div>
                <div className='text-sm md:flex items-center gap-4 mb-3 text-[#13131399]'>
                    <p className='flex items-center'><IoMdContacts />Publisher: {publisher}</p>
                    <p className='flex items-center'><CiCalendar /> Year of Publishing: {yearOfPublishing}</p>
                    <p className='flex items-center'><RiPagesLine /> Page: {totalPages}</p>
                </div>
                <div className="divider"></div>
                <div className='flex gap-0.5 md:gap-3'>
                    <div className='btn btn-xs md:btn rounded-4xl text-[#328EFF] bg-[#328eff26]'>
                        Category: {category}
                    </div>
                    <div className='btn btn-xs md:btn rounded-4xl text-[#FFAC33] bg-[#ffac3326]'>
                        Rating: {rating}
                    </div>
                    <NavLink to={`/BookDetails/${bookId}`}>
                        <div className='btn btn-xs md:btn rounded-4xl text-white bg-[#23BE0A]'>
                            View Details
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );

};

export default Wishlist;