import { Section } from 'lucide-react';
import React, { Suspense } from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../Books/Books';


const Home = () => {
  const booksData = fetch("booksData.json").then((res) => res.json());
  return (
    <div>
      <Banner></Banner>
      <Suspense
        fallback={
          <div className="flex justify-center items-center p-1">
            <span className="loading loading-spinner text-warning"></span>
          </div>
        }
      >
        <Books booksData={booksData}></Books>
      </Suspense>
    </div>
  );
};

export default Home;