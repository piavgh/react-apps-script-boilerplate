// Use ES6/7 code
const onOpen = () => {
  FormApp.getUi()
    .createAddonMenu()
    .addItem('Configure notifications', 'showSidebar')
    .addItem('About', 'showAbout')
    .addToUi()
}

const showSidebar = () => {
  const ui = HtmlService.createHtmlOutputFromFile('sidebar').setTitle(
    'React Apps Script Boilerplate'
  )
  FormApp.getUi().showSidebar(ui)
}

const showAbout = () => {
  const ui = HtmlService.createHtmlOutputFromFile('about')
    .setWidth(420)
    .setHeight(270)
  FormApp.getUi().showModalDialog(ui, 'About React Apps Script Boilerplate')
}

export { onOpen, showSidebar, showAbout }
