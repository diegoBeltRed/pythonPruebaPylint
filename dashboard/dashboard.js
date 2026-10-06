import * as data from "./data.js"


//Lee de report.json y plasma las convenciones, avisos y errores
data.readReport("").then(datos => {
    let conventions = 0, warnings = 0, errors = 0;
    for(let i of datos){
        if(i.type === "convention") conventions+=1;
        else if (i.type === "warning") warnings+=1;
        else if (i.type === "error") errors+=1;
    }
    document.getElementById("conventions").textContent = conventions;
    document.getElementById("warnings").textContent = warnings;
    document.getElementById("errors").textContent = errors;
});

