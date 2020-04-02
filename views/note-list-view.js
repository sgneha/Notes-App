(function (exports) {
    function NoteListView(noteList) {
        this.noteList = noteList

    }
    NoteListView.prototype.displayNotes = function () {
        var result = []
        var lengthOfListArray = this.noteList.viewAllNotes().length
        if (lengthOfListArray === 0) return 'There are no notes to display'
        for (let i = 0; i < lengthOfListArray; i++) {
            result.push(`<li><div>${this.noteList.viewAllNotes()[i].text}</div></li>`)

        }

        return `<ul>${result.join('')}</ul>`


    }
    exports.NoteListView = NoteListView
})(this)