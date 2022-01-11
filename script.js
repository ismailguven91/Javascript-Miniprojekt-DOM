// SKAPAR 5 RADER MEN SOM ÖKAR I STORLEK FÖR VARJE RAD
for (let i = 0; i < 5; i++) {
  const p = document.createElement("p");
  document.body.appendChild(p);

  p.innerHTML = "Rad " + (i + 1);
  p.style.textAlign = "center";
  p.style.margin = "1rem 0rem";
  p.style.color = "hsl(220, 80%, 60%)";
  p.style.fontSize = 13 + i * 13 + "px";
  p.style.fontWeight = "bold";

  //SKAPAR ÄNDRING AV FÄRG
  const hue = 140 + i * 20;
  p.style.backgroundColor = `hsl(${hue},100%,85%)`;
}

//SKAPAR STORA BOXEN
const box = document.createElement("div");
document.body.appendChild(box);

box.style.borderStyle = "solid";
box.style.borderColor = "black";
box.style.borderWidth = "2px";
box.style.display = "flex";
box.style.padding = "70px";
box.style.justifyContent = "space-around";

//SKAPAR 1 AV 3 BOXAR I DEN STORA BOXEN OCH GER DEN KORREKTA VÄRDEN
for (let i = 0; i < 3; i++) {
  const div = document.createElement("div");
  box.appendChild(div);

  div.style.backgroundColor = "hsl(240, 70%, 80%)";
  div.style.padding = "8px";

  //SKAPAR EN ARRAY AV STRINGS SOM KOMMER FINNAS I BOX 3/3 (HÖGER BOX)
  const textArray = [
    "ett",
    "två",
    "tre",
    "fyra",
    "fem",
    "sex",
    "sju",
    "åtta",
    "nio",
    "tio",
  ];

  //GER DE TRE BOXARNA VÄRDEN
  for (let j = 0; j < 10; j++) {
    const p = document.createElement("p");
    div.appendChild(p);

    p.style.margin = "0px";
    p.style.width = "50px";
    p.style.fontSize = "20px";
    p.style.paddingTop = "0.25rem";

    let color;
    let backgroundColor;

    //SKAPAR OCH GER DE TRE BOXARNA VÄRDEN
    if (i === 0) {
      p.innerHTML = j;

      //BOX 1/3 (VÄNSTER)
      //VARANNAN BOX SVART MED VIT TEXTFÄRG OCH VARANNAN VIT MED SVART TEXTFÄRG SAMT ATT "NUMMER 4" SKA SAMMA BAKGRUND SOM BOXEN MEN MED VIT TEXTFÄRG"
      if (j % 2) {
        backgroundColor = "white";
        color = "black";
      } else {
        backgroundColor = "black";
        color = "white";
      }

      if (j === 4) {
        backgroundColor = "none";
        color = "white";
      }

      //BOX 2/3 (MITTEN)
      //GÅR FRÅN 9-0 OCH CENTRERAR TEXTEN (SIFFRORNA)
    } else if (i === 1) {
      p.innerHTML = 9 - j;
      p.style.textAlign = "center";

      //VARANNAN BOX SVART MED VIT TEXTFÄRG OCH VARANNAN VIT MED SVART TEXTFÄRG SAMT ATT "NUMMER 8" SKA SAMMA BAKGRUND SOM BOXEN MEN MED VIT TEXTFÄRG".
      if (j % 2) {
        backgroundColor = "black";
        color = "white";
      } else {
        backgroundColor = "white";
        color = "black";
      }

      if (10 - j === 9) {
        backgroundColor = "none";
        color = "white";
      }
    }

    //BOX 3/3 (HÖGER)
    //SKICKAR IN MIN ARRAY MED STRINGS OCH ALIGNAR TEXTEN TILL HÖGER
    else {
      p.innerHTML = textArray[j];
      p.style.textAlign = "end";

      //VARANNAN BOX VIT MED SVART TEXTFÄRG OCH VARANNAN SVART MED VIT TEXTFÄRG SAMT ATT "NUMMER 6" SKA SAMMA BAKGRUND SOM BOXEN MEN MED SVART TEXTFÄRG".
      if (j % 2) {
        backgroundColor = "white";
        color = "black";
      } else {
        backgroundColor = "black";
        color = "white";
      }

      if (j === 5) {
        backgroundColor = "none";
        color = "black";
      }
    }

    p.style.backgroundColor = backgroundColor;
    p.style.color = color;
  }
}
