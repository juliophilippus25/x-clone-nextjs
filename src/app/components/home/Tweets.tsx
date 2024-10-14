import useSWR from 'swr';
import { getNewsTopHeadlines } from '@/app/api';
import { getTweets } from '@/app/libs/data';
import { removeDuplicateData } from '@/app/utils';
import Article from './Article';

const fetcher = async () => {
    const newsTop = await getNewsTopHeadlines();
    return removeDuplicateData(newsTop);
};

const Tweets = () => {
    // Get tweets from local storage
    const tweets = getTweets();

    // Use SWR to fetch articles from the API
    const { data: articles, error: apiError } = useSWR('news', fetcher);

    return (
        <div className='w-full'>
            {/* Render local tweets first */}
            <div>
                {tweets.length > 0 ? (
                    tweets.map((tweet, idx) => (
                        <div key={`tweet-${idx}`}>
                            <Article data={tweet} />
                        </div>
                    ))
                ) : (
                    <div>No tweets found.</div>
                )}
            </div>

            {/* Loading state for articles */}
            {!articles && !apiError && <div>Loading more tweets, please wait...</div>}

            {/* Error handling */}
            {apiError && <div>Error loading tweets: {apiError.message}</div>}

            {/* Render API articles */}
            <div className='mt-4'>
                {articles ? (
                    articles.length > 0 ? (
                        articles.map((article, idx) => (
                            <div key={`article-${idx}`}>
                                <Article data={article} />
                            </div>
                        ))
                    ) : (
                        <div>No tweets found.</div>
                    )
                ) : null}
            </div>
        </div>
    );
};

export default Tweets;
