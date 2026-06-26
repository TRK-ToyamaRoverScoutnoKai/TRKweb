import React, { useState, useEffect } from "react";
import "./News.css";

const News = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const wpUrl = "https://roverport.rcjweb.jp";
        const tagId = 203;

        const apiUrl = `${wpUrl}/wp-json/wp/v2/posts?_embed&tags=${tagId}&per_page=100`;

        console.log("API URL:", apiUrl);

        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        console.log("取得した記事:", data);

        setPosts(data);
      } catch (err) {
        console.error("取得エラー:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="news-container">
        <p>記事を読み込み中...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="news-container">
        <p style={{ color: "red" }}>エラー: {error}</p>
      </div>
    );
  }

  return (
    <div className="news-container">
      <h2>活動報告</h2>

      <div className="news-grid">
        {posts.length === 0 ? (
          <p>活動報告の記事がありません。</p>
        ) : (
          posts.map((post) => {
            const imageUrl =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ??
              "https://via.placeholder.com/400x250?text=No+Image";

            return (
              <article key={post.id} className="news-card">
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="news-link"
                >
                  <div className="news-image-wrapper">
                    <img
                      src={imageUrl}
                      alt={post.title.rendered}
                      className="news-image"
                    />
                  </div>

                  <div className="news-content">
                    <h3
                      dangerouslySetInnerHTML={{
                        __html: post.title.rendered,
                      }}
                    />

                    <div
                      className="news-excerpt"
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.rendered,
                      }}
                    />
                  </div>
                </a>
              </article>
            );
          })
        )}
      </div>
    </div>
  );
};

export default News;