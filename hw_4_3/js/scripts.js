let birthYear = prompt("Введіть ваш рік народження");
let city = prompt("В якому місті ви живете?");
let sport = prompt("Який ваш улюблений вид спорту?");

if(birthYear === null || city === null || sport === null) {
    let cancelMessage = "Шкода, що Ви не захотіли ввести свій(ю)";
    cancelMessage += birthYear === null ? ", вік народження" : "";
    cancelMessage += city === null ? ", місто в якому ви живете" : "";
    cancelMessage += sport === null ? ", улюблений вид спорту" : "";
    alert(cancelMessage);
} else {
    let currentYear = new Date().getFullYear();
    let age = currentYear - Number(birthYear);

    let firstPartMessage;
    let secondPartMessage = "";

    let sportList = {
        "футбол": "Андрієм Ярмоленко",
        "баскетбол": "Дуайті Ховард",
        "хокей": "Дмитром Німенко"
    };

    if (city === "Київ" || city === "Вашингтон" || city === "Лондон") {
        firstPartMessage = `${age}. Ти живеш у столиці ${city}`;
    } else {
        firstPartMessage = `${age}. Ти живеш у місті ${city}`;
    }

    if (sport === "футбол" || sport === "баскетбол" || sport === "хокей") {
        let player = sportList[sport];
        secondPartMessage = `Круто! Хочеш стати ${player}`;
    }

    alert(`${firstPartMessage}. ${secondPartMessage}`);
}
