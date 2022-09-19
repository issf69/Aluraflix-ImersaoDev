var listaFilmes = [
    "https://upload.wikimedia.org/wikipedia/pt/7/79/Yesterday_%282019%29_poster.jpg",
    "https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/90/98/20169244.jpg"
];

for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">");
}


/* var listaFilmes = [
    "https://upload.wikimedia.org/wikipedia/pt/7/79/Yesterday_%282019%29_poster.jpg",
    "https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/90/98/20169244.jpg"
];

for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">");
}


//Explicaçao


//var listaFilmes = ["Yesterday", "A Chegada", "Escola de Rock"];
// elemento           1             2            3
// índice.            0             1            2

//adicionando varios elementos - indice 4
listaFilmes.push("Harry Potter 3");

//indice 4
listaFilmes.push("Harry Potter 4");
listaFilmes.push("Harry Potter 5");
//listaFilmes.push("Harry Potter 6");

console.log(listaFilmes.length);
//experimente o h1, strong
//document.write("<p>" + listaFilmes[0] + "<P>");
//document.write("<p>" + listaFilmes[1] + "<P>");
//document.write("<p>" + listaFilmes[2] + "<p>");
//document.write("<p>" + listaFilmes[3] + "<p>");

// valor inicial.condição.expressão final
for (var indice = 0; indice < listaFilmes.length; indice++) {
    //  document.write("<p>" + indice + "</p>");
    document.write("<p>" + listaFilmes[indice] + "</p>");
} */