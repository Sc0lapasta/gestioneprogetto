class Visualizzatore {
    
    getCoordinateLotto(lotto) {
        
        
        
        console.log("CANCELLO VECCHIA PAGINA");
        visualizzatore.refresh();
        console.log("CARICO NUOVO LOTTO: "+lotto);




        let coordinate = [];
        
        $.ajax({

            url: 'https://raw.githubusercontent.com/Sc0lapasta/gestioneprogetto/refs/heads/1.3/coordinate_aree/'+lotto+'/'+lotto+'_piano_terra.json',
            success: function (fileJSON) {
                console.log('https://raw.githubusercontent.com/Sc0lapasta/gestioneprogetto/refs/heads/1.3/coordinate_aree/'+lotto+'/'+lotto+'_piano_terra.json')
                coordinate = JSON.parse(fileJSON);
                console.log(coordinate);
    
                visualizzatore.render(lotto);
            },
            error: function (error) {
                console.log("errore nel caricamento del file json", error);
            }
        });
    }
    render(lotto)
    {
        console.log(lotto);

        //rosso>  terra primo secondo terzo seminterrato
        //giallo> terra primo secondo 
        //arancione> terra primo 
        // comuni: terra ; primo
        
        //rosso arriva fino a 4
        //giallo parte da 1 e arriva fino a 2
        //arancione parte da 1 e arriva a 2


        //da fare tutto come unica funzione
        // let immagine = 
        // '<img src="https://github.com/Sc0lapasta/gestioneprogetto/blob/1.3/immagini_piani_lotti/'+lotto+'/'+lotto+'_piano_'+piano+'.png?raw=true"'
        // + 'usemap="#mappa_'+lotto+'_piano_terra"></img>';
        // console.log(immagine);
        // document.getElementById("area_immagini").innerHTML += immagine;
        //da fare tutto come unica funzione 
        // for(let i = 1; i < 3; i++)
        //     {
        //         let immagine = visualizzatore.getImmagine(lotto,piani[i]);
        //         console.log(immagine);
        //         document.getElementById("area_immagini").innerHTML += immagine; 
        //     }
        //per renderizzare le immagini
        visualizzatore.renderImmagini(lotto);
        // let immagine = 
        // '<img src="https://github.com/Sc0lapasta/gestioneprogetto/blob/1.3/immagini_piani_lotti/'+lotto+'/'+lotto+'_piano_terra.png?raw=true"'
        // + 'usemap="#mappa_'+lotto+'_piano_terra"></img>';
        // console.log(immagine);
        // document.getElementById("area_immagini").innerHTML = immagine;
    }
    caricaComboBox()
    {
        let lotti = ["giallo","rosso","arancione"];
        lotti.forEach(lotto =>{
            document.getElementById("combo_lotti").innerHTML += 
            '<option value="'+lotto+'">'+lotto+'</option>';
        });
    }
    getComboBox()
    {
        return document.getElementById("combo_lotti").value;
    }
    refresh()
    {
        document.getElementById("area_immagini").innerHTML = "";
    }
    getImmagine(lotto,piano)
    {
        return '<img src="https://github.com/Sc0lapasta/gestioneprogetto/blob/1.3/immagini_piani_lotti/'+lotto+'/'+lotto+'_piano_'+piano+'.png?raw=true"'
        + 'usemap="#mappa_'+lotto+'_piano_terra"></img>';
    }
    caricaAree(piano) {
        console.log(coordinate.length);
        for (let index = 0; index < coordinate.length; index++) {
            document.getElementById(piano).innerHTML +=
            '<area alt="' + coordinate[index]["alt"] + '" coords="' + coordinate[index]["coords"] + '" href="' + coordinate[index]["href"] 
            + '" shape="' + coordinate[index]["shape"] + '" onclick="funzioneGenerica(this)" />';   
        }
    }
    renderImmagini(lotto)
    {
        let piani = ["seminterrato","terra","primo","secondo","terzo"]
        switch (lotto) {
            case "rosso":
                piani.forEach(piano => {
                    let immagine = visualizzatore.getImmagine(lotto,piano);
                    console.log(immagine);
                    document.getElementById("area_immagini").innerHTML += immagine;
                });
                break;
            case "arancione":
                for(let i = 1; i < 3; i++)
                {
                    let immagine = visualizzatore.getImmagine(lotto,piani[i]);
                    console.log(immagine);
                    document.getElementById("area_immagini").innerHTML += immagine; 
                }
                break;
            case "giallo":
                for(let i = 1; i < 4; i++)
                {
                    console.log(piani[i]);
                    let immagine = visualizzatore.getImmagine(lotto,piani[i]);
                    console.log(immagine);
                    document.getElementById("area_immagini").innerHTML += immagine; 
                }
                break;
            default:
                alert("errore con il caricamento dell'immagine");
                break;
        }
    }
}
const visualizzatore = new Visualizzatore();