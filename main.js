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

const List = [pushkinLibrary, TPULibrary]

const searchButton = document.querySelector('.searchButton')
const content = document.querySelector('.content')


searchButton.addEventListener('click', search)

function search() {
  if (confirm('Вы хотите начать поиск издания?')) {
    content.innerHTML = ''
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
      if (library.groups.length > 0) {
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
      } else { alert('Библиотека пуста') }

    }
  })
}

function createEditionHtml(groupName, thisLibrary) {
  thisLibrary.groups.forEach(function (group) {
    if (group.name === groupName) {

      let editionHtml = ''
      if (group.edition.length > 0) {
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
      } else { alert('Отдел пуст') }
    }
  })

}

function createEditionAtributeHtml(editionName, thisGroup) {
  thisGroup.edition.forEach(function (edition) {
    if (edition.name === editionName) {
      const atrArray = Object.entries(edition)

      let html = ''

      atrArray.forEach(function (itemAtrArray) {
        let arrhtml = ''
        itemAtrArray.forEach(function (item) {
          let itemHtml = `<span>${item}</span> `
          arrhtml += itemHtml
        })
        const resultHtml = `<div>${arrhtml}</div>`
        html += resultHtml
      })
      content.innerHTML = ''
      content.insertAdjacentHTML('beforeend', html)
    }
  })
}