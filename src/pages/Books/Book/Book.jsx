import { Key } from "lucide-react";

import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {
  const { bookId, bookName, image, author, category, rating, tags } = book;

  return (
    <Link to={`/BookDetails/${bookId}`}>
      <div className="card shadow-sm border border-gray-200 rounded-2xl">
        <div className="flex justify-center items-center py-3">
          <figure className="w-[210px] h-[250px] object-cover p-10 bg-[#F3F3F3] rounded-2xl">
            <img src={image} className="" alt="Shoes" />
          </figure>
        </div>
        <div className="p-5">
          <div className="my-2.5 space-x-2.5">
            {tags.map((tag, index) => <div key={index} className="work-sans badge badge-md text-[#23BE0A] bg-[#23be0a0d]">{tag}</div>)}
          </div>
          <div className="space-y-2 mb-2">
            <h2 className="card-title">{bookName}</h2>
            <p className="work-sans">By : {author}</p>
          </div>
          <div className="card-actions justify-between border-t border-dashed border-gray-200 pt-2">
            <div className="work-sans">{category}</div>
            <div className="work-sans flex justify-center items-center gap-1.5">
              {rating}
              <FaStarHalfAlt />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
