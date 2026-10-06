import { readReport } from "../data.js";

console.log("hola");

const frame = document.getElementById("frame");

readReport("../").then(datos => {
    for(let msg of datos){
        const div = document.createElement("div");

        if(msg.type === "convention"){
            div.classList.add("convention");
        }
        else if(msg.type === "error"){
            div.classList.add("error");
        }
        else if(msg.type === "warning"){
            div.classList.add("warning");
        }

        div.innerHTML = `
            <p>Type: ${msg.type}</p>
            <p>Object: ${
                msg.obj === "" ? "none" : msg.obj
            }</p>
            <p>Line: ${msg.line}</p>
            <p>Message: ${msg.message}</p>
        `;

        frame.appendChild(div);
        
    }
});