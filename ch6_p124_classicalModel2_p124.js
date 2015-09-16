function Article() {
  this.tags = ['js', 'css'];
}
var article = new Article();

function BlogPost() {};
BlogPost.prototype = article;
var blog = new BlogPost();

function StaticPage() {
  Article.call(this);
}
var page = new StaticPage();

blog.tags.push('html');
page.tags.push('php');

console.log(article.hasOwnProperty('tags'));
console.log(blog.hasOwnProperty('tags'));
console.log(page.hasOwnProperty('tags'));

console.log(article.tags.join(', '));