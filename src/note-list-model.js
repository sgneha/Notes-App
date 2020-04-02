(function (exports) {
    function NoteList() {
        this.list = []
    }
    NoteList.prototype.viewAllNotes = function () {
        return this.list
    }
    NoteList.prototype.addNote = function (note) {
        this.list.push(new Note(note))
    }

    exports.NoteList = NoteList
})(this)
