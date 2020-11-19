class Book extends Edition {
  constructor(name, author, year, resume, group) {
    super(name, author, year, group)
    this.resume = resume
    this.type = 'book'
  }

  get resumeInfo() {
    return this.resume
  }

  set resumeInfo(newResume) {
    this.resume = newResume
  }
}