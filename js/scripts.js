// elemen tombol 'Hitung'
let button = document.getElementById('btn');

// Add an event listener to the button for the 'click' event
button.addEventListener('click', () => {
    // Get input values and parse them to integers
    const usia = parseInt(document.getElementById('usia').value);
    const tinggi_badan = parseInt(document.getElementById('tinggi_badan').value);
    const berat_badan = parseInt(document.getElementById('berat_badan').value);
    const result = document.getElementById('output');
    // Inisialisasi tanda status untuk validasi input
    let usia_status = false, tinggi_badan_status = false, berat_badan_status = false;

    // Validate usia 
    if (usia === '' || isNaN(usia) || (usia <= 0)) {
        document.getElementById('usia_error').innerHTML = 'Tolong masukan usia yang valid';
    } else {
        document.getElementById('usia_error').innerHTML = '';
        usia_status = true;
    }

    // Validate tinggi_badan
    if (tinggi_badan === '' || isNaN(tinggi_badan) || (tinggi_badan <= 0)) {
        document.getElementById('tinggi_badan_error').innerHTML = 'Tolong masukan tinggi badan yang valid';
    } else {
        document.getElementById('tinggi_badan_error').innerHTML = '';
        tinggi_badan_status = true;
    }

    // Validate berat_badan
    if (berat_badan === '' || isNaN(berat_badan) || (berat_badan <= 0)) {
        document.getElementById('berat_badan_error').innerHTML = 'Tolong masukan berat badan yang valid';
    } else {
        document.getElementById('berat_badan_error').innerHTML = '';
        berat_badan_status = true;
    }

    // Jika semua input valid, hitung BMI
    if (usia_status && tinggi_badan_status && berat_badan_status) {
        // Hitung BMI menggunakan rumus
        const bmi = (berat_badan / ((tinggi_badan * tinggi_badan) / 10000)).toFixed(2);

        // Menentukan kategori BMI dan memberikan penjelasan
        let resultText = '';
        if (bmi < 18.5) {
            resultText = 'Kekurangan berat badan : ' + bmi + '.\nKekurangan berat badan dapat menyebabkan masalah kesehatan seperti kekurangan gizi, osteoporosis, dan sistem kekebalan tubuh yang lemah. Disarankan untuk mengonsumsi makanan bergizi tinggi dan berkonsultasi dengan ahli gizi.';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            resultText = 'Normal (ideal) : ' + bmi + '.\nBerat badan Anda termasuk dalam kategori normal. Ini menandakan bahwa Anda memiliki keseimbangan antara berat dan tinggi badan yang baik untuk kesehatan. Pertahankan pola makan sehat dan gaya hidup aktif.';
        } else if (bmi >= 25.0 && bmi <= 29.9) {
            resultText = 'Kelebihan berat badan : ' + bmi + '.\nKelebihan berat badan dapat meningkatkan risiko berbagai penyakit seperti penyakit jantung, diabetes tipe 2, dan tekanan darah tinggi. Disarankan untuk mengadopsi pola makan sehat dan meningkatkan aktivitas fisik.';
        } else {
            resultText = 'Kegemukan (Obesitas) : ' + bmi + '.\nObesitas dapat meningkatkan risiko penyakit serius seperti penyakit jantung, diabetes, dan beberapa jenis kanker. Penting untuk berkonsultasi dengan profesional kesehatan untuk rencana penurunan berat badan yang aman dan efektif.';
        }

        // Menampilkan hasilnya pada halaman web
        result.innerHTML = resultText.replace(/\n/g, '<br>');
    } else {
        // Peringatkan pengguna jika formulir mengalami kesalahan
        alert('Formulir memiliki kesalahan');
        result.innerHTML = '';
    }
});

// Add an event listener to the 'Reset' button for the 'click' event
document.getElementById('reset_btn').addEventListener('click', function() {
    // Reset semua kolom input dan pesan kesalahan
    document.getElementById('usia').value = '';
    document.getElementById('tinggi_badan').value = '';
    document.getElementById('berat_badan').value = '';
    document.getElementById('male').checked = false;
    document.getElementById('female').checked = false;
     // Clear all error messages
    document.getElementById('usia_error').innerText = '';
    document.getElementById('tinggi_badan_error').innerText = '';
    document.getElementById('berat_badan_error').innerText = '';
    document.getElementById('gender_error').innerText = '';
    // Clear the result display
    document.getElementById('output').innerText = '';
});