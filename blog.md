---
layout: page
title: Blog
permalink: /posts/
menu: main
weight: 5
---

Check back, or subscribe to my RSS feed, to see when more lessons are added.

Being a university tutor for undergraduate subjects, I have also included some handy tutorial videos for undergraduate electronics. This is university level theory, but you do not have to understand it in whole to get an awesome electronics project going!

If you are interested in learning more tertiary level subjects, I recommend checking out [Coursera][CourseraLink] or [edX][edXlink] for some great MOOC courses.

[CourseraLink]:
[edXlink]:


  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
      </li>
    {% endfor %}
  </ul>

  <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>
