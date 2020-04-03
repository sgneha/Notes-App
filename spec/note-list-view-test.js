
(function (exports) {
    function TestNotelistViewNone() {
        var noteList = new NoteList()
        var noteListView = new NoteListView(noteList)
        if (noteListView.displayNotes() === 'There are no notes to display') {
            console.log('Test for displaying when no note, passed')
        }
        else {
            console.log('Test for displaying when no note, failed')
        }

    }



    function TestNotelistViewSingle() {
        var noteList = new NoteList()
        noteList.addNote('testing note')
        var noteListView = new NoteListView(noteList)
        var input = '<ul><li><a href="#notes/0" id=0>testing note</a></li></ul>'
        if (noteListView.displayNotes() === input) {
            console.log('Test for displaying single note passed')

        }
        else {

            console.log('Test for displaying single note failed')
        }

    }
    function TestNotelistViewforMultiple() {
        var noteList = new NoteList()
        noteList.addNote('testing note 1')
        noteList.addNote('testing note 2')
        var noteListView = new NoteListView(noteList)
        if (noteListView.displayNotes() === ('<ul><li><a href="#notes/0" id=0>testing note 1</a></li><li><a href="#notes/1" id=1>testing note 2</a></li></ul>')) {
            console.log('Test for displaying  multiple notes passed')

        }
        else {
            console.log('Test for displaying  multiple notes failed')
        }

    }
    function testDisplayFirst20() {
        var noteList = new NoteList()
        noteList.addNote('testing note so that i can check if its more than 20')
        var noteListView = new NoteListView(noteList)
        if (noteListView.displayNotes() === ('<ul><li><a href="#notes/0" id=0>testing note so that</a></li></ul>')) {

            console.log('%c Test for displaying 20 characters passed', 'color: green')

        }
        else {

            console.log('%c Test for displaying  20 characters failed', 'color: red')
        }

    }

    TestNotelistViewNone()
    TestNotelistViewSingle()
    TestNotelistViewforMultiple()
    testDisplayFirst20()

})(this)