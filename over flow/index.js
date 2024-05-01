let beratBadan = prompt("Input nilai berat badan anda: ");

if (beratBadan >= 80) {
    alert("Anda Obesitas");
} else if (beratBadan >= 60 && beratBadan < 80) {
    alert("Anda Gemuk");
} else if (beratBadan >= 40 && beratBadan < 60) {
    alert("Anda Ideal");
} else if (beratBadan >= 20 && beratBadan < 60) {
    alert("Anda Kurus");
} else {
    alert("Anda Kurang Gizi");
}