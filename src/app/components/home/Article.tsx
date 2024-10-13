import { news } from '@/app/types';
import { getUserById } from '@/app/libs/data';
import { Tweet } from '@/app/libs/data';
import Image from 'next/image';
import { FaRegComment, FaRetweet, FaRegHeart, FaChartBar, FaShareAlt, FaBookmark } from 'react-icons/fa';
import { formatUsername } from '@/app/libs/utils';

interface ArticleProps {
    data: news | Tweet; // Allow either type
}

const Article = ({ data }: ArticleProps) => {
    const isTweet = 'tweet' in data; // Check if the data is a tweet
    let username = 'unknown'; // Default username
    let name = 'Unknown User'; // Default name
    let urlToImage = isTweet ? '' : data.urlToImage; // Set URL based on type

    const formattedUsername = formatUsername(username);

    if (isTweet) {
        // Fetch the user data for the tweet
        const user = getUserById(data.userId);
        username = user?.username || 'unknown'; // Get username or fallback to 'unknown'
        name = user?.name || 'Unknown User'; // Get name or fallback
    } else {
        username = data.author || 'unknown'; // For articles
        name = data.author || 'Unknown User'; // Use author name for articles
    }

    return (
        <div className="flex items-start p-4 border-b border-gray-800">
            <div className="flex-shrink-0">
                <Image
                    src="/avatar.jpg"
                    alt={name}
                    width={50}
                    height={50}
                    className="w-10 h-10 rounded-full"
                />
            </div>
            <div className="flex-grow ml-2">
                <p className="text-white">
                    {name}&nbsp;
                    <span className="text-gray-500">@{formatUsername(username)}</span>
                </p>
                <div className="mt-2">
                    <p className="text-gray-300">{isTweet ? data.tweet : data.title || ''}</p>
                    <br />
                    <p className="text-gray-300">{isTweet ? '' : data.description}</p>
                </div>
                {urlToImage && (
                    <div className='my-2'>
                        <Image
                            src={urlToImage}
                            alt="image"
                            width={150}
                            height={150}
                            className='w-full h-auto rounded-lg'
                        />
                    </div>
                )}
                <div className="flex items-center justify-start mt-4 gap-4 lg:gap-10 cursor-pointer text-sm lg:text-lg">
                    <span className="text-gray-500 flex items-center">
                        <FaRegComment className="text-gray-500 hover:text-white" />
                        <span className="ml-1">12</span>
                    </span>
                    <span className="text-gray-500 flex items-center">
                        <FaRetweet className="text-gray-500 hover:text-white" />
                        <span className="ml-1">31</span>
                    </span>
                    <span className="text-gray-500 flex items-center">
                        <FaRegHeart className="text-gray-500 hover:text-white" />
                        <span className="ml-1">41</span>
                    </span>
                    <span className="text-gray-500 flex items-center">
                        <FaChartBar className="text-gray-500 hover:text-white" />
                        <span className="ml-1">24</span>
                    </span>
                    <FaBookmark className="text-gray-500 hover:text-white" />
                    <FaShareAlt className="text-gray-500 hover:text-white" />
                </div>
            </div>
        </div>
    );
};

export default Article;
