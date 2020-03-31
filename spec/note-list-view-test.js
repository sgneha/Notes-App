
(function (exports) {

    var noteList = new NoteList()
    noteList.addNote('testing note')
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