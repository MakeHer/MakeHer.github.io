---
layout: lesson
title:  "How to Build a Static Website with GitHub Pages"
date:   2014-11-07 01:22:14
lesson-cat: "Website HowTos"
description: "How did I make my website? I'll show you!"
---

Before going into detail, this is a how to guide of basically how I setup this blog, listing some of the resources and guides which I used. Hopefully by reading this guide, you'll have been convinced that using Jekyll + GitHub pages is one of the most convenient ways to get a static blog up and running, with faster load times (since there's no access to databases), and full control of the source that gets generated.

If there's something you're not sure clear on, leave comments, and I'll try my best to edit and add what's needed. Also there's no doubt you'll be able to find more in depth explanations by searching. 

Of course I've tried to make this as modular as possible so you can chop and cut any features you like. But let's start with the basics.

Setting up the Site
===================

You'll need to do a few things before you get started on editing layout and content:

 * Sign up for a github account
 * Install git on your local machine
 * create a new repository on your github remote
 * Install Ruby
 * Install Bundler gem
 * Install jekyll with the 'github-pages' gem

 These steps can be done by following the:

 * [GitHub Pages](http://pages.github.com "GitHub Pages") quick setup guide, and
 * It's later [Jekyll](https://help.github.com/articles/using-jekyll-with-pages/ "Using Jekyll with Pages") install guide

Configuring Jekyll
==============
So now that you have Jekyll installed on your local machine, you can now see how your repo will build after a push to your GiHub repo by typing in your command-line window/terminal:

```
~$ bundle exec jekyll serve
```

Ok, I've followed your steps. So what am I staring at?
------------------------------------------------------
Jekyll is a static site generator (as opposed to a dynamic). Think of it like going to a takeaway shop, and ordering an item off the menu which is premade instead of made-to-order. The difference between a static site is that all the pages that a user would access off the server are all compiled, and the server only neets to fetch the page that the browser requests. Whereas a dynamic site would have to build the page everytime the browser requests it, taking more processing time. Reason why you might want a dynamic page is if the information your site provides changes quite frequently, say for example, the page a user requests reports the number of transactions have been made over the past 24 hours, which will in turn require to access a database to get the live figures. Examples of dynamic site generators are like wordpress and joomla, which are also known as Content Management Systems (CMS).

For the purpose of blogging and publishing, a static site is quite appropriate, since blogging new updates is a relatively less frequent way of publishing, and generally the site accumulates with new content, rather than refreshing with completely different content everytime.

So having a look at the folder structure, you'll notice a couple of things. 

 1. Folders are beginning with _foldername and folders without the underscore. 

And having a look inside some of the html files, you'll notice there's an unusual descriptive tags, which look like a code block.
This code block is knwon as liquid. 

Configuring the Content
=======================

Site Information
----------------

Now that you've got Jekyll up and running, you'll see that you'll need to substitute some information in. All these generate site "variables", are all kept in the one file _config.yml.

Editing Pages
-------------
Introducing Markdown:
If you've read html before, you know that editing it involves doubly looking through tag structures till you find the relevant content nested in between.
It's highly intuitive, minimal, and it makes it less of an eyesore for anyone who just wants to type their content. There's a good [cheatsheet]. 

Adding More Pages
-----------------
Two things you can do:

 * Add simple markdown file pagename.md
 * Add 

Layout Design
-------------
Now here's the fun part. 