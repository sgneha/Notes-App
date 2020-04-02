(function (exports) {

    function testDisplaySingleNote() {
        console.log('Displays single note')
        var note = new Note('testing single note')
        var singleNoteView = new SingleNoteView(note)
        expect(singleNoteView.displaySingleNote()).toInclude('testing single note')

    }

    testDisplaySingleNote()
})(this)