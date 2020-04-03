(function (exports) {
    function Controller(noteListModel = new NoteList()) {
        this.noteListModel = noteListModel

    }

    Controller.prototype.changeText = function (text) {
        let element = document.getElementById("notes");
        element.innerHTML = text
    }
    Controller.prototype.addNote = function (text) {
        this.noteListModel.addNote(text)
    }
    Controller.prototype.displayNotes = function () {
        var noteListView = new NoteListView(this.noteListModel)
        this.changeText(noteListView.displayNotes())
    }
    Controller.prototype.fullNote = function (id) {
        fullNote = this.noteListModel.viewAllNotes()[id].text
        return fullNote
    }

    exports.Controller = Controller
})(this)

