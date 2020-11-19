// Вариант 4

const pushkinLibrary = new Library('Библиотека имени Пушкина')
const TPULibrary = new Library('Библиотека ТПУ')

const goodGroup = pushkinLibrary.addGroup('Отдел хорошей литературы')
const sadGroup = pushkinLibrary.addGroup('Отдел грустной литературы')

const bookArthur = goodGroup.addBook('Артур и минипуты', 'Люк Бессон', 2002, 'Это отличная книга')
const bookHarry = goodGroup.addBook('Гарри Поттер и философский камень', 'Джоан Роулинг', 1997, 'Это крутая книга')

const journalNature = goodGroup.addJournal('Nature', 'Nature Publishing Group', 1869)

journalNature.addArticles('Статья о собаках', 'Статья о кошках')

function addDescription() {
  goodGroup.edition.forEach(function (item) {
    let string = ''
    switch (item.type) {
      case 'book':
        string = 'Введите описание для книги'
        break;
      case 'journal':
        string = 'Введите описание для журнала'
    }
    const description = prompt(`${string} "${item.name}"`)
    try {
      item.generateDescription(description)
    } catch (err) {
      alert("Некорректные данные: " + err.message);
    }
    console.log(item.description)
  })
}

function searchLibrary() {
  const searchText = prompt('Введите имя библиотеки')

  let currentLibrary;

  List.forEach(function (library) {
    if (library.name === searchText) {
      currentLibrary = library
    }
  })

  if (!currentLibrary) {
    console.log('Что-то пошло не так')
  }

  return currentLibrary
}

function searchGroup(library) {
  const searchText = prompt('Какой отдел Вас интересует?')

  let currentGroup;

  library.edition.forEach(function (group) {
    if (group.name === searchText) {
      currentGroup = group
    }
  })

  if (!currentGroup) {
    console.log('Что-то пошло не так')
  }

  return currentGroup
}



const List = [pushkinLibrary, TPULibrary]

const searchButton = document.querySelector('.searchButton')
const content = document.querySelector('.content')


searchButton.addEventListener('click', search)

function search() {
  if (confirm('Вы хотите начать поиск издания?')) {
    createLibraryHtml()
  }
}

function createLibraryHtml() {

  let librarysHtml = ''

  List.forEach(function (library) {
    const libraryLabel = `<label><input name="library" value='${library.name}' type='radio'>${library.name}</label>`
    librarysHtml += libraryLabel
  })

  const currentHtml = `<form class="form">
  ${librarysHtml}
  <button>Подтвердить</button>
  </form>`

  content.insertAdjacentHTML('beforeend', currentHtml)

  const form = document.querySelector('.form')
  form.addEventListener('submit', function (event) {
    event.preventDefault()
    createGroupHtml(form.elements["library"].value)
  })

}

function createGroupHtml(libraryName) {
  List.forEach(function (library) {
    if (library.name === libraryName) {
      let gropsHtml = ''

      library.groups.forEach(function (group) {
        const groupLabel = `<label><input name="group" value='${group.name}' type='radio'>${group.name}</label>`
        gropsHtml += groupLabel
      })

      const currentHtml = `<form class="form">
                          ${gropsHtml}
                          <button>Подтвердить</button>
                          </form>`

      content.innerHTML = ''
      content.insertAdjacentHTML('beforeend', currentHtml)

      const form = document.querySelector('.form')
      form.addEventListener('submit', function (event) {
        event.preventDefault()
        createEditionHtml(form.elements["group"].value, library)
      })

    }
  })
}

function createEditionHtml(groupName, thisLibrary) {
  thisLibrary.groups.forEach(function (group) {
    if (group.name === groupName) {

      let editionHtml = ''

      group.edition.forEach(function (edition) {
        const editionLabel = `<label><input name="edition" value='${edition.name}' type='radio'>${edition.name}</label>`
        editionHtml += editionLabel
      })

      const currentHtml = `<form class="form">
                          ${editionHtml}
                          <button>Подтвердить</button>
                          </form>`

      content.innerHTML = ''
      content.insertAdjacentHTML('beforeend', currentHtml)

      const form = document.querySelector('.form')
      form.addEventListener('submit', function (event) {
        event.preventDefault()
        createEditionAtributeHtml(form.elements["edition"].value, group)
      })

    }
  })

}


function createEditionAtributeHtml (editionName, thisGroup) {
  console.log(editionName)
  console.log(thisGroup)
}