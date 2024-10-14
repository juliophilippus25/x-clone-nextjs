export const getNewsTopHeadlines = async () => {
  const newsData = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`,
    { cache: "no-store" }
  );

  return newsData.json();
};
