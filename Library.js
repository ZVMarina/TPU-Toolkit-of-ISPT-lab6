class Library {
  constructor(name) {
    this.name = name
    this.groups = []
  }

  get nameInfo() {
    return this.name
  }

  get groupsInfo() {
    return this.groups
  }

  set nameInfo(newName) {
    this.name = newName
  }

  addGroup(nameGroup) {
    const group = new Group(nameGroup, this.name)
    this.groups.push(group)
    return group
  }

  removeGroup(nameGroup) {
    this.groups = this.groups.filter(function (group) {
      if (nameGroup !== group.nameGroup) {
        return group
      }
    })
  }

  searchEditionYear(year) {
    const arrEdition = []
    this.groups.forEach(function(group) {
      group.edition.forEach(function(edition) {
        if (edition.year === year) {
          arrEdition.push(edition)
        }
      })
    })
    return arrEdition
  }
}