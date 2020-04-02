
(function (exports) {
    var noteController = new Controller()
    document.write("Testing")
    function controllerInstantiated() {
        console.log("New controller is Instantiated")
        expect(noteController).toBe(new Controller())
    }
    function controllerPassedNoteListModel() {
        console.log('Controller passed noteListModel')
        expect(noteController.noteListModel).toBe(new NoteList())
    }
    function mockElement() {
        var mockedElement = document.createElement('div')
        mockedElement.id = 'app'
        document.getElementsByTagName('body').item(0).appendChild(mockedElement)
    }

    function testsInnerHTML() {
        console.log('Testing Inner HTML')
        mockElement()
        noteController.addNote("Hi")
        noteController.displayNotes()
        expect(document.getElementById("app").innerHTML).toInclude("Hi")
    }

    controllerInstantiated()
    controllerPassedNoteListModel()
    testsInnerHTML()

})(this)
