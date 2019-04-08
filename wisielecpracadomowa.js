var hasla = new Array(11);
hasla[0]="Apetyt rośnie w miarę jedzenia";
hasla[1]="Biednemu zawsze wiatr w oczy";
hasla[2]="Cel uświęca środki";
hasla[3]="Co cię nie zabije, to cię wzmocni";
hasla[4]="Darowanemu koniowi w zęby się nie zagląda";
hasla[5]="Do ludzi po naukę, do matki po koszulę";
hasla[6]="Elektryka prąd nie tyka	";
hasla[7]="Grosz do grosza, a będzie kokosza";
hasla[8]="Jedna jaskółka wiosny nie czyni";
hasla[9]="Kogut myślał o niedzieli, a w sobotę łeb ucięli";
hasla[10]="Lepiej z mądrym zgubić niż z głupim znaleźć";

hasla[i] = haslo.toUpperCase();
var ile_skuch = 0;
var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

for (i=0; i<=10; i++)
	var dlugosc = hasla[i].length();

var haslo1 = "";

for (i=0; i<dlugosc; i++)
{
	if (haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
	else haslo1 = haslo1 + "-";
}


function wypisz_haslo()
{
	document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start;

var litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";

function start()
{
	var tresc_diva = "";
	for (i=0; i<=34; i++)
		{
			var element = "lit" + i;
			tresc_diva = tresc_diva +  '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>';
			if ( (i+1)%7 == 0) tresc_diva = tresc_diva + '<div style="clear:both;></div>"'
		}
	document.getElementById("alfabet").innerHTML = tresc_diva;
	
	
	wypisz_haslo();
}

String.prototype.ustawZnak = function(miejsce, znak)
{
	if (miejsce > this.length - 1) return this.toString();
	else return this.substr(0,miejsce) + znak + this.substr(miejsce + 1);
}

function sprawdz(nr)
{
	var trafiona = false;
	for (i=0; i<dlugosc; i++)
	{
		if (haslo.charAt(i) == litery[nr])
		{
			haslo1 = haslo1.ustawZnak(i, litery[nr]);
			var trafiona = true;
		}
	}
	if (trafiona == true) 
	{
		yes.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background = "green";
		document.getElementById(element).style.color = "#00c000";
		document.getElementById(element).style.border = "3px solid #00c000";
		document.getElementById(element).style.cursor = "default";
		
		wypisz_haslo();
	}
	else 
	{
		no.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#C00000";
		document.getElementById(element).style.border = "3px solid #C00000";
		document.getElementById(element).style.cursor = "default";	
		document.getElementById(element).setAttribute("onclick",";");
		
		//skucha
		ile_skuch++;
		var obraz = "img/s" +ile_skuch+".jpg";
		document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'" alt ="" />';
		
 	}
	
	//wygrana
	
	if (haslo == haslo1)
	document.getElementById("alfabet").innerHTML = "Podano prawidłowe hasło: " +haslo+ '<br/> <br/> <span class="reset" onclick = "location.reload()">JESZCZE RAZ?</span>';

	//przegrana
	if (ile_skuch>=9) 
	document.getElementById("alfabet").innerHTML = "Przegrana!  Prawidłowe hasło: " +haslo+ '<br/> <br/> <span class="reset" onclick = "location.reload()">JESZCZE RAZ?</span>';
		
	wypisz_haslo();
}
