import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/Prod.scss';

function Pro() {
  return (
    <div id='projects'>
    <h1 className='headprod'>Project</h1>
    <article class="article tile" >
    <div class="article-image"></div>
    <section class="article-body">
      <p class="datestamp">2023 d3</p>
      <p class="article-tags">Full Stack Web App</p>
      <h2 class="article-heading">"Hackathon Event" listing page Hackathon.app</h2>
      <p>
      Access a rich repository of resources, including tutorials, sample projects, and documentation to boost your hackathon experience.
Stay updated with the latest tools and technologies through our curated content.      </p>
    </section>
    <section class="chart">
      <div class="rating-bar-1 rating-small"></div>
      <div class="rating-bar-2 rating-large"></div>
    </section>
    <footer class="article-footer">
      <ul class="article-links">
        <li><a href="https://github.com/gijendrap/App-Development">Github</a></li>
      </ul>
    </footer>
  </article>
  </div>
  );
}

export default Pro;
