---
layout: lesson
title:  "How to Build a Static Website with GitHub Pages"
date:   2014-11-07 01:22:14
lesson-cat: "Website HowTos"
description: "How did I make my website? I'll show you!"
---

First and foremost, I's like to acknowlege all the sources that I brought together to fit all the features of the website together.  
After reading this I hope you'll have found some of it useful. If there's something you're not sure clear on, leave comments, and I'll try my best to edit and add what's needed. Also if in doubt, GOOGLE! -- just like I did. 

Of course I've tried to make this as modular as possible so you can chop and cut any features you like. But lets start with the basics.

*Side Note*
------------------

Now before you start reading, I will caution that, yes, most of the setup will use the command-line. So if you're thinking the command-line is quite a daunting task, I do implore you to have a go first. I'll admite I used to have a fear for the command-line (despite the fact that as a child I used to think it was such a cool hackery thing to do), but over time I exercised more with it, and just like a muscle, it's become almost a breeze to navigate through folder structures. It's like Linus Torvald said: "The Command-Line may be hard to do easy tasks, but it make it easy to do hard tasks".

Setting up the Site
===================

You'll need to do a few things before you get started on the website:

 * Sign up for a github account
 * Install Ruby
 * Install Bundler gem
 * Install git
 * create a new repository on your github remote
 * _(optional)_: Link it with a domain name

Install Jekyll
==============


Ok, I've followed your steps. So what am I staring at?
------------------------------------------------------
Jekyll is a static site generator (as opposed to a dynamic). Difference between a static site is that all the pages that a user would access off the server are all compiled, and the server only neets to fetch the page that the browser requests. Whereas a dynamic site would have to build the page everytime the browser requests it, taking more processing time. Reason why you might want a dynamic page is if the information your site provides changes quite frequently, say for example, the page a user requests reports the number of transactions have been made over the past 24 hours, which will in turn require to access a database to get the live figures. Examples of dynamic site generators are like wordpress and joomla, which are also known as Content Management Systems (CMS).

For the purpose of blogging and publishing, a static site is quite appropriate, since blogging new updates is a relatively less frequent way of publishing, and generally the site accumulates with new content, rather than refreshing with completely different content everytime. Therefore it's faster for users to access the content if its premade. Just like if you go to a takeaway shop and you order something which is premade as opposed to made-to-order. 

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