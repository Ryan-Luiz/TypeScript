class Pessoa{
    private nome : string ;
    private idade: number;

    olamundo(): string {
        return "Salve Rapaziada";
    }

}

let p = new  Pessoa();

document.getElementById("texto").textContent = p.olamundo();
