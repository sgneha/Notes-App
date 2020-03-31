(function (exports) {
    function NoteListView(noteList) {
        this.noteList = noteList

    }
    NoteListView.prototype.displayNotes = function () {
        return '<ul><li><div>testing note</div></li></ul>'
    }
    exports.NoteListView = NoteListView
})(this)