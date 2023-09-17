import React from 'react';
import Article from './Article';
import Pagination from './Pagination';

const HomeArtical = () => {

    let currentPage = 1;
    let parPage = 10;
    let countArticle = 10;

    return (
        <>
            <div className='home-articals'>
                <Article />
            </div>
            <Pagination
                pageNumber={currentPage}
                parPage={parPage}
                itemCount={countArticle}
                path='/article'
            />
        </>
    )
}

export default HomeArtical;