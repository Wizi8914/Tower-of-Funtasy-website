const counter = document.querySelector('.value');
const speed = 300

const animate = () => {
    const value = +counter.getAttribute('final');
    const data = +counter.innerText;
    
    const time = value / speed;
    if(data < value) {
        counter.innerText = Math.ceil(data + time);
        setTimeout(animate, 1);
    } else {
        counter.innerText = value;
    }
    
}