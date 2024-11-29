import React from 'react';
import './News.css'; // Asegúrate de crear un archivo CSS para estilos

const News = () => {
  return (
    <div>
      <header>
        <h1>News Today</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#world">World</a></li>
            <li><a href="#technology">Technology</a></li>
            <li><a href="#sports">Sports</a></li>
          </ul>
        </nav>
      </header>

      <main className="news-container">
        <article className="news-card">
          <img src="path/to/your/news1.jpg" alt="News 1" />
          <h2>Title of News Article 1</h2>
          <p>This is a brief summary of the news article. <a href="#">Read more</a></p>
        </article>
        <article className="news-card">
          <img src="path/to/your/news2.jpg" alt="News 2" />
          <h2>Title of News Article 2</h2>
          <p>This is a brief summary of the news article. <a href="#">Read more</a></p>
        </article>
        {/* Agrega más tarjetas de noticias según sea necesario */}
      </main>

      <footer>
        <p>&copy; 2024 News Today. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default News;