(function (exports) {
    function NoteListView(noteList) {
        this.noteList = noteList
    }
    NoteListView.prototype.displayNotes = function () {
        var result = []
        var lengthOfListArray = this.noteList.viewAllNotes().length
        if (lengthOfListArray === 0) return 'There are no notes to display'
        for (let i = 0; i < lengthOfListArray; i++) {
            var shortFormText = this.noteList.viewAllNotes()[i].text.slice(0, 20)
            var id = this.noteList.viewAllNotes()[i].id
            result.push(`<li><a href="#notes/${id}" id=${id}>${shortFormText}</a></li>`)

        }

        return `<ul>${result.join('')}</ul>`


    }
    exports.NoteListView = NoteListView
})(this)