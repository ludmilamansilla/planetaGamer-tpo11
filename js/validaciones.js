console.log(document.querySelector('form'));

let formulario = document.querySelector('form');

formulario.addEventListener('submit', function (evento) {
    
    evento.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let user = document.getElementById('user').value;

        if(name == '') {
            document.getElementById('nameHelp').innerHTML = 'Ingrese los datos pedidos del nombre';
            document.getElementById('nameHelp').style.color = 'red';                                    
        }
        if (email == '') {
            document.getElementById('emailHelp').innerHTML = 'Ingrese Email'; 
            document.getElementById('emailHelp').classList.add('error');                                
        }
        if (password = '') {
            document.getElementById('passwordHelp').innerHTML = 'Ingrese la contraseña'; 
            document.getElementById('passwordHelp').classList.add('error'); 
        }
        if (user = '') {
            document.getElementById('userHelp').innerHTML = 'Ingrese el nombre de usuario'; 
            document.getElementById('userHelp').classList.add('error'); 
        }

});
