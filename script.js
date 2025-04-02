let coordinate = [];

function caricaCoordinate(jsonCoordinate,piano) {
    $.ajax({
        url: 'https://raw.githubusercontent.com/Sc0lapasta/gestioneprogetto/refs/heads/main/'+jsonCoordinate+'.json',
        // url: 'https://raw.githubusercontent.com/Sc0lapasta/gestioneprogetto/refs/heads/main/giallo_piano_terra.json',
        success: function (fileJSON) {
            coordinate = JSON.parse(fileJSON);
            console.log(coordinate.length);

            carica(piano);
        },
        error: function (error) {
            console.log("errore nel caricamento del file json", error);
        }
    });
}

function funzioneGenerica(area) {
    alert(area.alt + "inserire qui script a piacere");
}

function carica(piano) {
    console.log(coordinate.length);
    for (let index = 0; index < coordinate.length; index++) {
        document.getElementById(piano).innerHTML +=
        '<area alt="' + coordinate[index]["alt"] + '" coords="' + coordinate[index]["coords"] + '" href="' + coordinate[index]["href"] 
        + '" shape="' + coordinate[index]["shape"] + '" onclick="funzioneGenerica(this)" />';   
    }
}

function renderAree()
{
    // console.log("ciaoaoa");
    id = ["piano_terra","piano_primo","piano_secondo"];
    jsonCoordinate = ["giallo_piano_terra","giallo_piano_primo","giallo_piano_secondo"];

    for(let i = 0; i < 3; i++)
    {
        console.log(jsonCoordinate[i],id[i]);
        caricaCoordinate(jsonCoordinate[i],id[i]);
    }
}