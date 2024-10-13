import useSWR from 'swr';
import { getNewsTopHeadlines } from '@/app/api';
import { getTweets } from '@/app/libs/data';
import { removeDuplicateData } from '@/app/utils';
import Article from './Article';

// Create a fetcher function for API
const fetcher = async () => {
    const newsTop = await getNewsTopHeadlines();
    return removeDuplicateData(newsTop);
};

const Tweets = () => {
    // Get tweets from local storage
    const tweets = getTweets(); // Fetch tweets from local storage

    // Use SWR to fetch articles from the API
    const { data: articles, error: apiError } = useSWR('news', fetcher);
    console.log(articles);

    // Handle loading state
    if (!articles) return <div>Loading...</div>;

    // Handle API error state
    if (apiError) return <div>Error loading articles: {apiError.message}</div>;

    return (
        <div className='w-full'>
            {/* Render local tweets */}
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

            {/* Render API articles */}
            <div className='mt-4'>
                {articles.length > 0 ? (
                    articles.map((article, idx) => (
                        <div key={`article-${idx}`}>
                            <Article data={article} />
                        </div>
                    ))
                ) : (
                    <div>No articles found.</div>
                )}
            </div>
        </div>
    );
};

export default Tweets;