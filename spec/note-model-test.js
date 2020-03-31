(function (exports) {
    var text = "My favourite language is JavaScript"
    var note = new note(text);
    function testFortext() {

        if (note.text === text) {
            console.log("Test for text passed")
        }
        else {
            throw new Error("Test for text failed")
        }
        function testForViewNote() {
            if (note.viewNote() === text) {
                console.log("Test for viewNote passed")
            }
            else {
                throw new Error("Test for viewNote failed")
            }

        }

    }
    testFortext();
    testForViewNote();


})(this)

