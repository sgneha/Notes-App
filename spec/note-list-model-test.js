

(function (exports) {

    function testForViewAllNotes() {
        var noteList = new NoteList()

        if (noteList.viewAllNotes() === noteList.list) {
            console.log("Test for view all notes passed")
        }
        else {
            console.log("Test for view all notes failed")
        }
    }
    function testForaddNote() {
        var noteList = new NoteList()
        noteList.addNote('My first note')
        if (noteList.viewAllNotes()[0].text === 'My first note') {

            console.log("Test for add note in list passed")

        }
        else {
            console.log("Test for add note in list failed")

        }

    }
    function testAddId() {
        console.log("Test to add unique Id")
        var noteList = new NoteList()
        noteList.addNote('My first Note')
        expect(noteList.list[0].id).toEqual(0)
        noteList.addNote('My second Note')
        expect(noteList.list[1].id).toEqual(1)


    }

    testForaddNote()
    testForViewAllNotes()
    testAddId()
})(this)
