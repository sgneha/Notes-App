(function (exports) {
    function testFortext() {
        var text = "My favourite language is JavaScript"
        var note = new note(text);
        if (note.text === text) {
            console.log("Test for text passed")
        }
        else {
            throw new Error("Test for text failed")
        }

    }
    testFortext();

})(this)

