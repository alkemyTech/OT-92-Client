import React from 'react';
import '../CardListStyles.css';
import NewsItem from "./NewsItem";

const NewsList = ({ newsData }) => {

    return (
        <>
            {newsData.length > 0 ? (
                <>
                    <div className="row my-3">
                        {newsData.map((article) => (
                            <div className="col-sm-12 col-md-6 col-lg-4 justify-content-center">
                                <NewsItem
                                    key={article.id}
                                    content={article}
                                />
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div class='d-flex justify-content-center mt-5'>
                    <div class='spinner-border'>
                        <span class='visually-hidden'>Loading...</span>
                    </div>
                </div>
            )}
        </>
    );
}
 
export default NewsList;