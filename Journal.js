class Journal extends Edition {
  constructor(name, author, year, group) {
    super(name, author, year, group)
    this.articles = []
    this.type = 'journal'
  }

  get nameArticlesInfo() {
    return this.articles
  }

  addArticles(...articles) {
    this.articles.push(...articles)
  }
}