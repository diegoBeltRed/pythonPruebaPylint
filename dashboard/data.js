/* ESTE ARCHIVO .JS SIRVE PARA LEER LOS ARCHIVOS .JSON E INFORMACIÓN */

//Lee el archivo report.json y devuelve un array con todo el contenido
export async function readReport(modificador){
    const response = await fetch(modificador+"../docs/pylint/report.json")
    return await response.json();
}