
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
        if (noteListView.displayNotes() === ('<ul><li><div>testing note</div></li></ul>')) {
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

        if (noteListView.displayNotes() === ('<ul><li><div>testing note 1</div></li><li><div>testing note 2</div></li></ul>')) {
            console.log('Test for displaying  multiple notes passed')

        }
        else {
            console.log('Test for displaying  multiple notes failed')
        }

    }
    TestNotelistViewNone()
    TestNotelistViewSingle()
    TestNotelistViewforMultiple()

})(this)