import useSWR from 'swr';
import { getNewsTopHeadlines } from '@/app/api';
import { removeDuplicateData } from '@/app/utils';
import Article from './Article';

// Create a fetcher function
const fetcher = async () => {
    const newsTop = await getNewsTopHeadlines();
    return removeDuplicateData(newsTop);
};

const Tweets = () => {
    // Use SWR to fetch data
    const { data: articles, error } = useSWR('news', fetcher);

    // Handle loading state
    if (!articles) return <div>Loading...</div>;

    // Handle error state
    if (error) return <div>Error loading articles: {error.message}</div>;

    return (
        <div className='w-full'>
            {articles.length > 0 ? (
                articles.map((article, idx) => (
                    <div key={`${article.title}-${idx}`}>
                        <Article data={article} />
                    </div>
                ))
            ) : (
                <div>No articles found.</div>
            )}
        </div>
    );
};

export default Tweets;
