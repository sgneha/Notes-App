(function (exports) {
    var noteList = new NoteList()
    function testForViewAllNotes() {
        if (noteList.viewAllNotes() === []) {
            console.log("Test for view all notes passed")
        }
        else {
            console.log("Test for view all notes failed")
        }
    }
    testForViewAllNotes()
})(this)
