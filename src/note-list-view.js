(function (exports) {
    function NoteListView(noteList) {
        this.noteList = noteList

    }
    NoteListView.prototype.displayNotes = function () {
        for (let i = 0; i < this.noteList.viewAllNotes().length; i++) {
            return ('<ul>' + `<li><div>${this.noteList.viewAllNotes()[i].text}</div></li>` + '</ul>')
        }

    }
    exports.NoteListView = NoteListView
})(this)