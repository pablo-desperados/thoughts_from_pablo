---
layout: default
title: Pablo's Thoughts
---

<style>
  body {
    background-color: #121212;
    color: #e0e0e0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    line-height: 1.6;
  }
  a {
    color: #bb86fc;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  #home h1 {
    border-bottom: 1px solid #333;
    padding-bottom: 10px;
  }
  .posts {
    list-style-type: none;
    padding-left: 0;
  }
  .posts li {
    margin-bottom: 10px;
  }
  .posts li span {
    color: #888;
    margin-right: 15px;
  }
</style>

<div id="home">
  <h1>Blog Posts</h1>
  <ul class="posts">
    {% for post in site.posts %}
      <li><span>{{ post.date | date_to_string }}</span> » <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
</div>