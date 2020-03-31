(function (exports) {
    function NoteListView(noteList) {
        this.noteList = noteList

    }
    NoteListView.prototype.displayNotes = function () {
        var result = []
        for (let i = 0; i < this.noteList.viewAllNotes().length; i++) {
            result.push(`<li><div>${this.noteList.viewAllNotes()[i].text}</div></li>`)
        }
        return `<ul>${result.join('')}</ul>`

    }
    exports.NoteListView = NoteListView
})(this)