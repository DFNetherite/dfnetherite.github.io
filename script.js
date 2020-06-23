/*CodeMirror(document.querySelector('#CodeMirrorr'), {
    lineNumbers: true,
    tabSize: 2,
    value: 'console.log("Hello, World");',
    mode: 'javascript',
    theme: 'dracula'
  });
*/
var myCodeMirror = CodeMirror(document.body, {
    lineNumbers: true,
    tabSize: 2,
    value: 'new codeLine("event", "Join")\n.playerAction("SendMessage", "The Website Works.")\n.build();',
    mode: 'javascript',
    theme: 'dracula'
});

function changeTheme(theme) {
    console.log(theme)
    myCodeMirror.setOption("theme", theme);
}

function showCode() {
    var text = myCodeMirror.getValue();
    console.log("\n" + text + "\n ");
}

showCode();

function json() {
    try {
        var a = eval(myCodeMirror.getValue());
        document.getElementById("codebox").value = a.json;
    } catch (e) {
        alert(e);
    }
}

function encode() {
    try {
        var a = eval(myCodeMirror.getValue());
        document.getElementById("codebox").value = a.encoded;
    } catch (e) {
        alert(e);
    }
}


function giveCommand() {
    try {
        var a = eval(myCodeMirror.getValue());
        document.getElementById("codebox").value = a.give;
    } catch (e) {
        alert(e);
    }
}

function copy() {
    alert("coming soon.");
}

function sharecode() {
    document.getElementById("codebox").value = "https://dfprismarine.github.io/?code=" + btoa(myCodeMirror.getValue());
}

var urlParams = new URLSearchParams(window.location.search);
var customCode = urlParams.get("code");
if (customCode != null) {
    try {
        myCodeMirror.setValue(atob(customCode))
    } catch (e) {
        alert("There was an error while decrypting your code.")
        console.log(e);
    }
}