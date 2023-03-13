const numButtons = 30; // het aantal gewenste knoppen

const container = document.getElementById("container"); // krijg de container om knoppen aan toe te voegen

for (let i = 0; i < numButtons; i++) {
  const button = document.createElement("button"); // maak een nieuwe knop
  button.innerHTML = i + 1; // geef de knop een nummer
  button.style.backgroundColor = "green"; // stel de standaard achtergrondkleur van de knop in
  button.style.color = "white"; // stel de tekstkleur van de knop in op wit
  button.style.width = "100px"; // stel de breedte van de knop in
  button.style.height = "100px"; // stel de hoogte van de knop in
  button.style.margin = "5px"; // stel de marge van de knop in
  button.style.border = "none"; // verwijder de rand van de knop
  button.style.borderRadius = "5px"; // voeg een afgeronde hoek toe aan de knop
  container.style.maxWidth = "550px";
  container.style.margin = "0 auto";
  container.style.backgroundColor = "grey";

  let clickCount = 0; // bijhouden hoe vaak op de knop is geklikt

  button.addEventListener("click", () => {
    setTimeout(() => {
      clickCount++; // increment clickCount
      switch (clickCount) {
        case 1:
          button.style.backgroundColor = "red"; // verander achtergrondkleur naar rood na 1 klik
          break;
        case 2:
          button.style.backgroundColor = "purple"; // verander achtergrondkleur naar paars na 2 klikken
          break;
        case 3:
          button.style.backgroundColor = "blue"; // verander achtergrondkleur naar blauw na 3 klikken
          break;
        case 4:
          button.style.backgroundColor = "black"; // verander achtergrondkleur naar zwart na 4 klikken
          break;
        case 5:
          container.removeChild(button); // verwijder de knop na 5 klikken
          break;
      }
    }, 00); // wacht 0 seconde voordat je de kleur van de knop verandert
  });

  container.appendChild(button); // voeg de knop toe aan de container
}
