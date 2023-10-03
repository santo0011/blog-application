import React, { useEffect, useState } from 'react';
import Article from './Article';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from './Pagination';
import { home_article_get } from '../../store/Reducers/homeReducer';

const HomeArtical = () => {

    const dispatch = useDispatch();
    // const { currentPage } = useParams();

    const { homeArticle, countArticle } = useSelector(state => state.home);

    const [searchValue, setSearchValue] = useState('');
    const [currentPage, setCurrentPage] = useState(1)
    const [parPage, setParPage] = useState(3)


    useEffect(() => {
        const obj = {
            parPage: parseInt(parPage),
            page: parseInt(currentPage),
            searchValue
        }
        dispatch(home_article_get(obj))
    }, [searchValue, currentPage, parPage])

    return (
        <>
            <div className='home-articals'>
                {
                    homeArticle.length > 0 ? homeArticle.map((art, index) =>
                        <Article key={index} art={art} />
                    ) : <h3>Article not found</h3>
                }

            </div>

            <br />

            {
                countArticle >= parPage ?
                    <Pagination
                        pageNumber={currentPage}
                        setPageNumber={setCurrentPage}
                        totalItem={countArticle}
                        parPage={parPage}
                        showItem={Math.floor(countArticle / parPage)}
                    /> : ''
            }

        </>

    )
}

export default HomeArtical;