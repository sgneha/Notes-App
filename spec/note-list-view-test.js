
(function (exports) {
    var note = new Note("testing note")
    var noteList = new NoteList()
    noteList.addNote(note)
    function TestNotelistView() {
        var noteListView = new NoteListView(noteList)
        if (noteListView.displayNotes() === ('<ul><li><div>testing note</div></li></ul>')) {
            console.log('Test for displaying notes passed')
        }
        else {
            console.log('Test for displaying notes failed')
        }

    }
    TestNotelistView()

})(this)