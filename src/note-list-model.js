(function (exports) {
    function NoteList() {
        this.list = []
    }
    NoteList.prototype.viewAllNotes = function () {
        return this.list
    }
    NoteList.prototype.addNote = function (note) {
        var newNote = new Note(note)
        newNote.id = this.list.length
        this.list.push(newNote)
    }

    exports.NoteList = NoteList
})(this)
