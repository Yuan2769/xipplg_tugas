function hitung(operator) {
    const bilangan1 = parseFloat(document.getElementById('bilangan1').value);
    const bilangan2 = parseFloat(document.getElementById('bilangan2').value);
    let hasil;

    if (isNaN(bilangan1) || isNaN(bilangan2)) {
        alert('Masukkan kedua bilangan terlebih dahulu.');
        return;
    }

    switch (operator) {
        case 'tambah':
            hasil = bilangan1 + bilangan2;
            alert(`Hasil Penjumlahan = ${hasil}`);
            break;
        case 'kurang':
            hasil = bilangan1 - bilangan2;
            alert(`Hasil Pengurangan = ${hasil}`);
            break;
        case 'kali':
            hasil = bilangan1 * bilangan2;
            alert(`Hasil Perkalian = ${hasil}`);
            break;
        case 'bagi':
            if (bilangan2 === 0) {
                alert('Tidak bisa dibagi dengan nol.');
            } else {
                hasil = bilangan1 / bilangan2;
                alert(`Hasil Pembagian = ${hasil}`);
            }
            break;
    }
}

function clearInputs() {
    document.getElementById('bilangan1').value = '';
    document.getElementById('bilangan2').value = '';
}