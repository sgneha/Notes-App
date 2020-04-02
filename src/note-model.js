
(function (exports) {
    function Note(text) {
        this.text = text
        this.id = 0
    }
    Note.prototype.viewNote = function () {
        return this.text
    }
    exports.Note = Note

})(this)
