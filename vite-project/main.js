
import '@picocss/pico'
import './style.css'


document.querySelector('.numberCard').oninput = () =>{
  document.querySelector('.card-number').innerText = document.querySelector('.numberCard').value;
}

document.querySelector('.nameCard').oninput = () =>{
  document.querySelector('.card-holder').innerText = document.querySelector('.nameCard').value;

}

document.querySelector('.expirationCard').oninput = () =>{
  document.querySelector('.expiration').innerText = document.querySelector('.expirationCard').value;

}


