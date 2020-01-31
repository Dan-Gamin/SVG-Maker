var AddItem = {
    Circle: () =>
    {
        
        let container = document.createElement("button");
        let icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        let title = document.createElement("h1");
        let circle1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        let circle2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        title.innerHTML = "Circle";
        title.style.fontFamily = "'Varela Round', sans-serif";
        icon.setAttribute("height","100");
        icon.setAttribute("width","100");
        icon.setAttribute("wow","s");
        circle1.setAttribute("r","25%");
        circle1.setAttribute("cx","40%");
        circle1.setAttribute("cy","40%");
        circle1.setAttribute("fill","none");
        circle1.setAttribute("stroke","black");
        circle1.setAttribute("stroke-width","2");
        circle2.setAttribute("r","25%");
        circle2.setAttribute("cx","50%");
        circle2.setAttribute("cy","50%");

        let object = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        object.setAttribute("r","50%")
        object.setAttribute("cy","0")
        object.setAttribute("cx","0")
        document.getElementById("rsvg").appendChild(object);
        
        container.classList = "ExplorerElements";
        container.onclick = () => {
            document.getElementById("APPT").innerHTML = title.innerHTML;
            document.getElementsByName("xpos")[0].setAttribute("value",object.getAttribute("cx"))
            document.getElementsByName("xpos")[0].onchange = () => {
                object.setAttribute("cx",document.getElementsByName("xpos")[0].getAttribute("value"))
                document.getElementById("rsvg").appendChild(object);
            }
            document.getElementsByName("ypos")[0].setAttribute("value",object.getAttribute("cy"))
        
        }
        
        icon.appendChild(circle1);
        icon.appendChild(circle2);
        container.appendChild(icon);
        container.appendChild(title);

        explorer.appendChild(container);

        

        

        return container;
    }
}
