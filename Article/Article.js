// Because classes are not hoised you will need to start your code at the
// bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class.
    this.expandButton = domElement.querySelector(".expandButton");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    // Update: Specified in class to make an open/close button instead
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener("click", this.expandArticle.bind(this));
    this.expandButton.innerHTML = "Expand";
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    if (this.domElement.classList.length > 1) {
      this.domElement.classList.toggle("article-close");
    }
    this.domElement.classList.toggle("article-open");
    //this.domElement.classList.toggle("close");
    this.expandButton.classList.toggle("expandedBtn");

    this.expandButton.innerHTML = this.expandButton.classList.contains(
      "expandedBtn"
    )
      ? "Close"
      : "Expand";
  }
}

/* START HERE:

- Select all classes named ".article" and assign that value to the articles variable.

- With your selection in place, now chain .forEach() on to the articles variable
to iterate over the articles NodeList and create a new instance of Article by
passing in each article as a parameter to the constructor.

*/

let articles = Array.from(document.getElementsByClassName("article"));
articles.forEach(article => new Article(article));
