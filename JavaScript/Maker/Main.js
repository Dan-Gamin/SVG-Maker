document.body.style.display = "block";

var explorer = document.getElementById("explorer");

explorer.style.height = window.innerHeight + "px";

function resize()
{
    let size = document.getElementsByClassName("svgsize");
    let svg = document.getElementById("rsvg");
    svg.style.width = size[0].value;
    svg.style.height = size[1].value;
}

AddItem.Circle();