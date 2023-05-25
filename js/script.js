function hitungLuas() {
    var sisiLuas = document.getElementById("sisi-luas").value;
    var hasilLuas = sisiLuas * sisiLuas;
    document.getElementById("rumus-luas").innerHTML = "L = s x s";
    document.getElementById("menghitung-luas").innerHTML = "L = " + sisiLuas + " cm" + " x " + sisiLuas + " cm";
    document.getElementById("output_luas").innerHTML = "L = " + hasilLuas + " cm<sup>2</sup>";
}

function resetLuas() {
    document.getElementById("sisi-luas").value = "";
    document.getElementById("rumus-luas").innerHTML = "";
    document.getElementById("menghitung-luas").innerHTML = "";
    document.getElementById("output_luas").innerHTML = "";
}

function hitungKeliling() {
    var sisiKeliling = document.getElementById("sisi-keliling").value;
    var hasilKeliling = 4 * sisiKeliling;
    document.getElementById("rumus-keliling").innerHTML = "K = 4 x s";
    document.getElementById("menghitung-keliling").innerHTML = "K = 4 x " + sisiKeliling + " cm";
    document.getElementById("output_keliling").innerHTML = "K = " + hasilKeliling + " cm";
}

function resetKeliling() {
    document.getElementById("sisi-keliling").value = "";
    document.getElementById("rumus-keliling").innerHTML = "";
    document.getElementById("menghitung-keliling").innerHTML = "";
    document.getElementById("output_keliling").innerHTML = "";
}