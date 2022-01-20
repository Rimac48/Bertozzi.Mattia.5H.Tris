var matrice = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

var cpu=0;
var Xrandom;
var YRandom;

function Cpu()
{
    cpu=1;
}

function TurnoCpu()
{
    do{
        Xrandom = Math.floor(Math.random() * 3);//tra 0 e 2
        YRandom = Math.floor(Math.random() * 3);//tra 0 e 2
    }
    while(matrice[Xrandom][YRandom]!=0)
}

function Gioca(id)
{
    var coordinata = id.split(",")
    var x = coordinata[0];
    var y = coordinata[1];

    Controllo(id,x,y);

    Vittoria(x,y);

    if(cpu==1)
    {
        TurnoCpu();
        var strID= Xrandom + "," + YRandom;
        Controllo(strID,Xrandom,YRandom);
        Vittoria(x,y);
    }

    // alert(x);
    // alert(y);
}

//Refresha la pagina html
function reloadPage()
{
    window.location.reload();
}

//Lancia la moneta per scegliere il turno
function Moneta(){
    var Moneta = Math.floor(Math.random() * 2)
    if(Moneta==1)
    {
        alert("Comincia il Player 2");
        if(cpu==1){
            TurnoCpu();
            var strID= Xrandom + "," + YRandom;
            Controllo(strID,Xrandom,YRandom);
            Vittoria(x,y);
        }
        Player=2;
    }
    else{
        alert("Comincia il Player 1");
        Player=1;
    }
}

//Controlla se cè un vincitore
function Vittoria(x,y)
{
    var TimeAlert=500;
    var TimeRefresh=1000;

    //Player 1
    //controllo per righe
    if(matrice[0][0]==1 && matrice[0][1]==1 && matrice[0][2]==1)
    {
    
        setTimeout(function(){alert("Player 1 ha VINTO !"); },TimeAlert);
        setTimeout(function(){reloadPage();},TimeRefresh);
    }
    else if(matrice[1][0]==1 && matrice[1][1]==1 && matrice[1][2]==1)
    {
        setTimeout(function(){alert("Player 1 ha VINTO !"); },TimeAlert);
        setTimeout(function(){reloadPage();},TimeRefresh);
    }
    else if(matrice[2][0]==1 && matrice[2][1]==1 && matrice[2][2]==1)
    {
        setTimeout(function(){alert("Player 1 ha VINTO !"); },TimeAlert);
        setTimeout(function(){reloadPage();},TimeRefresh);
    }

    //controllo per colonne
    else if(matrice[0][0]==1 && matrice[1][0]==1 && matrice[2][0]==1)
    {
        setTimeout(function(){alert("Player 1 ha VINTO !"); },TimeAlert);
        setTimeout(function(){reloadPage();},TimeRefresh);
    }
    else if(matrice[0][1]==1 && matrice[1][1]==1 && matrice[2][1]==1)
    {
        setTimeout(function(){alert("Player 1 ha VINTO !"); },TimeAlert);
        setTimeout(function(){reloadPage();},TimeRefresh);
    }
    else if(matrice[0][2]==1 && matrice[1][2]==1 && matrice[2][2]==1)
    {
        setTimeout(function(){alert("Player 1 ha VINTO !"); },TimeAlert);
        setTimeout(function(){reloadPage();},TimeRefresh);
    }

    //controllo diagonali
    else if(matrice[0][0]==1 && matrice[1][1]==1 && matrice[2][2]==1)
    {   
        setTimeout(function(){alert("Player 1 ha VINTO !"); },TimeAlert);
        setTimeout(function(){reloadPage();},TimeRefresh);
    }
    else if(matrice[0][2]==1 && matrice[1][1]==1 && matrice[2][0]==1)
    {
        setTimeout(function(){alert("Player 1 ha VINTO !"); },TimeAlert);
        setTimeout(function(){reloadPage();},TimeRefresh);
    }

    //Player 2
    //controllo per righe
    else if(matrice[0][0]==2 && matrice[0][1]==2 && matrice[0][2]==2)
    {
        setTimeout(function(){alert("Player 2 ha VINTO !"); },TimeAlert);
        setTimeout(function(){reloadPage();},TimeRefresh);
    }
    else if(matrice[1][0]==2 && matrice[1][1]==2 && matrice[1][2]==2)
    {
        setTimeout(function(){alert("Player 2 ha VINTO !"); },TimeAlert);
        setTimeout(function(){reloadPage();},TimeRefresh);
    }
    else if(matrice[2][0]==2 && matrice[2][1]==2 && matrice[2][2]==2)
    {
        setTimeout(function(){alert("Player 2 ha VINTO !"); },TimeAlert);
        setTimeout(function(){reloadPage();},TimeRefresh);
    }

    //controllo per colonne
    else if(matrice[0][0]==2 && matrice[1][0]==2 && matrice[2][0]==2)
    {
        setTimeout(function(){alert("Player 2 ha VINTO !"); },TimeAlert);
        setTimeout(function(){reloadPage();},TimeRefresh);
    }
    else if(matrice[0][1]==2 && matrice[1][1]==2 && matrice[2][1]==2)
    {
        setTimeout(function(){alert("Player 2 ha VINTO !"); },TimeAlert);
        setTimeout(function(){reloadPage();},TimeRefresh);
    }
    else if(matrice[0][2]==2 && matrice[1][2]==2 && matrice[2][2]==2)
    {
        setTimeout(function(){alert("Player 2 ha VINTO !"); },TimeAlert);
        setTimeout(function(){reloadPage();},TimeRefresh);
    }

    //controllo diagonali
    else if(matrice[0][0]==2 && matrice[1][1]==2 && matrice[2][2]==2)
    {
        setTimeout(function(){alert("Player 2 ha VINTO !"); },TimeAlert);
        setTimeout(function(){reloadPage();},TimeRefresh);
    }
    else if(matrice[0][2]==2 && matrice[1][1]==2 && matrice[2][0]==2)
    {
        setTimeout(function(){alert("Player 2 ha VINTO !"); },TimeAlert);
        setTimeout(function(){reloadPage();},TimeRefresh);
    }
    else if(matrice[0][0]!=0 && matrice[0][1]!=0 && matrice[0][2]!=0 && matrice[1][0]!=0 && matrice[1][1]!=0 && matrice[1][2]!=0 && matrice[2][0]!=0 && matrice[2][1]!=0 && matrice[2][2]!=0)
    {
        setTimeout(function(){alert("PAREGGIO!"); },TimeAlert);
        setTimeout(function(){reloadPage();},TimeRefresh);
    }
}

var Player=1;

//se la cella non è stata giocata,la gioca
function Controllo(id,x,y)
{
    if(matrice[x][y]==0)
    {
        if(Player==1)
        {
            elem = document.getElementById(id); 
            elem.src="https://bit.ly/31hS8TN";
            matrice[x][y]=1;
            Player=2;
        }
        else
        {
            elem = document.getElementById(id); 
            elem.src="https://bit.ly/3q4PqLK";
            matrice[x][y]=2;
            Player=1;
        }
    }
}
