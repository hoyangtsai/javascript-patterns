function Article() {
  this.tags = ['js', 'css'];
}
var article = new Article();

function BlogPost() {}
BlogPost.prototype = article;
var blog = new BlogPost();

function StaticPage() {
  Article.call(this);
}
var page = new StaticPage();

console.log(article.hasOwnProperty('tags')); // true
console.log(blog.hasOwnProperty('tags')); // false
console.log(page.hasOwnProperty('tags')); // true;

blog.tags.push('html');
page.tags.push('php');
console.log(article.tags.join(', ')); // "js, css, html"