
window.onload = function()
{
    document.getElementById('inputtext').value = "Type or paste JavaScript here and click Go...";
    document.getElementById('outputtext').value = "JavaScript formatted as HTML appears here";

    document.getElementById('gobutton').onclick = go;
    document.getElementById('copybutton').onclick = copy;
    document.getElementById('clearinputbutton').onclick = clearInput;
    document.getElementById('clearoutputbutton').onclick = clearOutput;
}


function go()
{
    let mappings = getMappings();
    let inputtext = document.getElementById('inputtext').value;
    let outputtext = "";

    for(let c = 0, l = inputtext.length; c < l; c++)
    {
        outputtext += mappings[inputtext[c].charCodeAt(0)];
    }

    document.getElementById('outputtext').value = outputtext;
}


function copy()
{
    document.getElementById("outputtext").select();

    document.execCommand("Copy");
}


function clearInput()
{
    document.getElementById('inputtext').value = "";
}


function clearOutput()
{
    document.getElementById('outputtext').value = "";
}


function getMappings()
{
    mappings = [];

    // initialize to default values
    for(let i = 0; i <= 127; i++)
    {
        mappings[i] = String.fromCharCode(i);
    }

    // overwrite values we want to replace

    // tab
    mappings[9] = "&nbsp;&nbsp;&nbsp;&nbsp;";

    // linefeed
    mappings[10] = "</br>\n";

    // carriage return
    mappings[13] = "";

    // space
    mappings[32] = "&nbsp;";

    // <
    mappings[60] = "&lt;";

    // >
    mappings[62] = "&gt;";

    return mappings;
}
