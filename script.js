document.getElementById('serviceForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const service = document.getElementById('service').value;
    const username = document.getElementById('username').value;


    if (!username) {
        alert('Por favor, inicia sesión primero.');
        return;
    }


    const data = `Usuario: ${username}\nServicio Seleccionado: ${service}`;
    const blob = new Blob([data], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'servicio_seleccionado.txt';
    a.click();
    URL.revokeObjectURL(url);
});


    function showServiceOptions() {
        const service = document.getElementById('service').value;
        const serviceOptions = document.getElementById('serviceOptions');
        const domoticaOptions = document.getElementById('domoticaOptions');
        const electricidadOptions = document.getElementById('electricidadOptions');
        const restauracionOptions = document.getElementById('restauracionOptions');

        serviceOptions.style.display = 'block';
        domoticaOptions.style.display = 'none';
        electricidadOptions.style.display = 'none';
        restauracionOptions.style.display = 'none';

        if (service === 'domotica') {
            domoticaOptions.style.display = 'block';
        } else if (service === 'electricidad') {
            electricidadOptions.style.display = 'block';
        } else if (service === '3R') {
            restauracionOptions.style.display = 'block';
        }

        document.getElementById('about-tab').addEventListener('click', function() {
            var aboutSection = document.getElementById('about');
            if (aboutSection.style.display === 'none' || aboutSection.style.display === '') {
                aboutSection.style.display = 'block';
            } else {
                aboutSection.style.display = 'none';
            }
        });
    }
