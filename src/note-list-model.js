(function (exports) {
    function NoteList() {
        this.list = []
    }
    NoteList.prototype.viewAllNotes = function () {
        return this.list
    }
    exports.NoteList = NoteList
})(this)
