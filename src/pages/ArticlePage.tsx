import ArticleSidebar from '../components/ArticleSidebar';
import TopBanner from '../components/TopBanner';

function ArticlePage() {
  const articles = [
    { id: 1, title: "文章1" },
    { id: 2, title: "文章2" },
  ];
  return (
    <div>
      <TopBanner />
      {articles.map((article, index) => (
        <ArticleSidebar key={article.id} docIndex={index} />
      ))}
    </div>
  );
}
