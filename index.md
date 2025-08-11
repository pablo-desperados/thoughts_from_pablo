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

  <h1>Highlighted Media</h1>
  <ul class="posts">
    <li><span>09 Nov 2011</span> » <a href="http://vimeo.com/39016099">Video: RubyConf Argentina - Optimizing For Happiness</a></li>
    <li><span>01 Oct 2011</span> » <a href="http://confreaks.com/videos/712-rubyconf2011-github-flavored-ruby">Video: RubyConf - GitHub Flavored Ruby</a></li>
  </ul>

  <h1>Other Interviews, Talks, Etc</h1>
  <ul class="posts">
      <li><span>25 Jul 2013</span> » <a href="http://www.youtube.com/watch?v=7DoB0SCUtOk&list=SP055Epbe6d5aclKNAa8msO1VvDOJ8sYlS&index=23">Video: Tom Preston-Werner interviewed at OSCON 2013</a></li>
      <li><span>27 Sep 2012</span> » <a href="http://www.youtube.com/watch?v=Ln-B_fs9QMY&feature=youtu.be">Video (Panel): Founders & CEOs of Eventbrite, GitHub, Mozilla, & ALOM on Startup Culture</a></li>
      <li><span>16 Sep 2010</span> » <a href="http://www.youtube.com/watch?v=Hi2V1x1AkD8">Video: Tom Preston-Werner at Mail.ru Office 2010</a></li>
  </ul>

  <h1>Noteworthy Open Source Projects</h1>
  <ul class="posts">
    <li><a href="http://github.com/jekyll/jekyll/">Jekyll:</a> A simple, blog aware, static site generator.</li>
    <li><a href="http://semver.org">Semantic Versioning:</a> A meaningful method for incrementing version numbers.</li>
    <li><a href="http://github.com/toml-lang/toml">TOML:</a> Tom's Obvious, Minimal Language.</li>
  </ul>
</div>