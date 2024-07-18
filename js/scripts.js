// Mendapatkan elemen tombol 'Hitung'
let button = document.getElementById('btn');

// Menambahkan event listener ke tombol untuk event 'click'
button.addEventListener('click', () => {
    console.log('Tombol Hitung diklik'); // Debugging
    // Mendapatkan nilai input dan mengkonversi mereka ke integer
    const usia = parseInt(document.getElementById('usia').value);
    const tinggi_badan = parseInt(document.getElementById('tinggi_badan').value);
    const berat_badan = parseInt(document.getElementById('berat_badan').value);
    const gender = document.querySelector('input[name="gender"]:checked');
    const result = document.getElementById('output');

    // Inisialisasi tanda status untuk validasi input
    let usia_status = false, tinggi_badan_status = false, berat_badan_status = false, gender_status = false;

    // Validasi usia 
    if (isNaN(usia) || usia <= 0) {
        document.getElementById('usia_error').innerHTML = 'Tolong masukkan usia yang valid';
    } else {
        document.getElementById('usia_error').innerHTML = '';
        usia_status = true;
    }

    // Validasi tinggi badan
    if (isNaN(tinggi_badan) || tinggi_badan <= 0) {
        document.getElementById('tinggi_badan_error').innerHTML = 'Tolong masukkan tinggi badan yang valid';
    } else {
        document.getElementById('tinggi_badan_error').innerHTML = '';
        tinggi_badan_status = true;
    }

    // Validasi berat badan
    if (isNaN(berat_badan) || berat_badan <= 0) {
        document.getElementById('berat_badan_error').innerHTML = 'Tolong masukkan berat badan yang valid';
    } else {
        document.getElementById('berat_badan_error').innerHTML = '';
        berat_badan_status = true;
    }

    // Validasi gender
    if (!gender) {
        document.getElementById('gender_error').innerHTML = 'Tolong pilih jenis kelamin';
    } else {
        document.getElementById('gender_error').innerHTML = '';
        gender_status = true;
    }

    // Jika semua input valid, hitung BMI
    if (usia_status && tinggi_badan_status && berat_badan_status && gender_status) {
        console.log('Semua input valid'); // Debugging
        // Hitung BMI menggunakan rumus
        const bmi = (berat_badan / ((tinggi_badan * tinggi_badan) / 10000)).toFixed(2);

        // Menentukan kategori BMI dan memberikan penjelasan
        let resultText = '';
        if (bmi < 18.5) {
            resultText = 'Kekurangan berat badan: ' + bmi + '<br><br>Kurang dari 18.5 = Kekurangan berat badan<br>18.5 - 24.9 = Normal (ideal)<br>25.0 - 29.9 = Kelebihan berat badan<br>30.0 atau lebih = Kegemukan (Obesitas)<br><br>Kekurangan berat badan dapat menyebabkan masalah kesehatan seperti kekurangan gizi, osteoporosis, dan sistem kekebalan tubuh yang lemah. Disarankan untuk mengonsumsi makanan bergizi tinggi dan berkonsultasi dengan ahli gizi.';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            resultText = 'Normal (ideal): ' + bmi + '<br><br>Kurang dari 18.5 = Kekurangan berat badan<br>18.5 - 24.9 = Normal (ideal)<br>25.0 - 29.9 = Kelebihan berat badan<br>30.0 atau lebih = Kegemukan (Obesitas)<br><br>Berat badan Anda termasuk dalam kategori normal. Ini menandakan bahwa Anda memiliki keseimbangan antara berat dan tinggi badan yang baik untuk kesehatan. Pertahankan pola makan sehat dan gaya hidup aktif.';
        } else if (bmi >= 25.0 && bmi <= 29.9) {
            resultText = 'Kelebihan berat badan: ' + bmi + '<br><br>Kurang dari 18.5 = Kekurangan berat badan<br>18.5 - 24.9 = Normal (ideal)<br>25.0 - 29.9 = Kelebihan berat badan<br>30.0 atau lebih = Kegemukan (Obesitas)<br><br>Kelebihan berat badan dapat meningkatkan risiko berbagai penyakit seperti penyakit jantung, diabetes tipe 2, dan tekanan darah tinggi. Disarankan untuk mengadopsi pola makan sehat dan meningkatkan aktivitas fisik.';
        } else {
            resultText = 'Kegemukan (Obesitas): ' + bmi + '<br><br>Kurang dari 18.5 = Kekurangan berat badan<br>18.5 - 24.9 = Normal (ideal)<br>25.0 - 29.9 = Kelebihan berat badan<br>30.0 atau lebih = Kegemukan (Obesitas)<br><br>Obesitas dapat meningkatkan risiko penyakit serius seperti penyakit jantung, diabetes, dan beberapa jenis kanker. Penting untuk berkonsultasi dengan profesional kesehatan untuk rencana penurunan berat badan yang aman dan efektif.';
        }

        // Menambahkan gender ke hasil
        resultText = `Jenis Kelamin: ${gender.value.charAt(0).toUpperCase() + gender.value.slice(1)}<br>` + resultText;

        // Menampilkan hasilnya pada halaman web
        result.innerHTML = resultText.replace(/\n/g, '<br>');
    } else {
        // Peringatkan pengguna jika formulir mengalami kesalahan
        alert('Formulir memiliki kesalahan');
        result.innerHTML = '';
    }
});

// Menambahkan event listener ke tombol 'Reset' untuk event 'click'
document.getElementById('reset_btn').addEventListener('click', function() {
    console.log('Tombol Reset diklik'); // Debugging
    // Reset semua kolom input dan pesan kesalahan
    document.getElementById('usia').value = '';
    document.getElementById('tinggi_badan').value = '';
    document.getElementById('berat_badan').value = '';
    document.getElementById('Laki-Laki').checked = false;
    document.getElementById('Perempuan').checked = false;
    // Menghapus semua pesan kesalahan
    document.getElementById('usia_error').innerText = '';
    document.getElementById('tinggi_badan_error').innerText = '';
    document.getElementById('berat_badan_error').innerText = '';
    document.getElementById('gender_error').innerText = '';
    // Menghapus tampilan hasil
    document.getElementById('output').innerText = '';
});
