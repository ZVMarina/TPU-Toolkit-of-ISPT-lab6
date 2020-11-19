class Group {
  constructor(name, library) {
    this.name = name
    this.library = library
    this.edition = []
    this.editionNumbers = 0
  }

  get nameInfo() {
    return this.name
  }

  get editionNumbersInfo() {
    return this.editionNumbers
  }

  get libraryInfo() {
    return this.library
  }

  get editionInfo() {
    return this.edition
  }

  set nameInfo(newName) {
    this.name = newName
  }

  updateNumbers() {
    this.editionNumbers = this.edition.length
  }

  addBook(nameBook, author, year, resume) {
    const book = new Book(nameBook, author, year, resume, this.name)
    this.edition.push(book)
    this.updateNumbers()
    return book
  }

  addJournal(nameJournal, author, year) {
    const journal = new Journal(nameJournal, author, year, this.name)
    this.edition.push(journal)
    this.updateNumbers()
    return journal
  }

  removeEdition(nameEdition) {
    this.edition = this.edition.filter(function (edition) {
      if (nameEdition !== edition.nameEdition) {
        return edition
      }
    })
    this.updateNumbers()
  }
}