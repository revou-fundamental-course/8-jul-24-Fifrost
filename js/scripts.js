let button = document.getElementById('btn');

    button.addEventListener('click', () => {
        const tinggi_badan = parseInt(document.getElementById('tinggi_badan').value);
        const berat_badan = parseInt(document.getElementById('berat_badan').value);
        const result = document.getElementById('output');
        let tinggi_badan_status = false, berat_badan_status = false;

        if (tinggi_badan === '' || isNaN(tinggi_badan) || (tinggi_badan <= 0)) {
            document.getElementById('tinggi_badan_error').innerHTML = 'Tolong masukan tinggi badan yang valid';
        } else {
            document.getElementById('tinggi_badan_error').innerHTML = '';
            tinggi_badan_status = true;
        }

        if (berat_badan === '' || isNaN(berat_badan) || (berat_badan <= 0)) {
            document.getElementById('berat_badan_error').innerHTML = 'Tolong masukan berat badan yang valid';
        } else {
            document.getElementById('berat_badan_error').innerHTML = '';
            berat_badan_status = true;
        }

        if (tinggi_badan_status && berat_badan_status) {
            const bmi = (berat_badan / ((tinggi_badan * tinggi_badan) / 10000)).toFixed(2);

            if (bmi < 18.5) {
                result.innerHTML = 'Kekurangan berat badan : ' + bmi;
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                result.innerHTML = 'Normal (ideal) : ' + bmi;
            } else if (bmi >= 25.0 && bmi <= 29.9) {
                result.innerHTML = 'Kelebihan berat badan : ' + bmi;
            } else {
                result.innerHTML = 'Kegemukan (Obesitas) : ' + bmi;
            }
        } else {
            alert('The form has errors');
            result.innerHTML = '';
        }
    });

    document.getElementById('reset_btn').addEventListener('click', function() {
        document.getElementById('tinggi_badan').value = '';
        document.getElementById('berat_badan').value = '';
        document.getElementById('male').checked = false;
        document.getElementById('female').checked = false;
        document.getElementById('tinggi_badan_error').innerText = '';
        document.getElementById('berat_badan_error').innerText = '';
        document.getElementById('gender_error').innerText = '';
        document.getElementById('output').innerText = '';
    });