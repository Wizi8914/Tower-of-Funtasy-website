fetch(`/stats`)
.then(response => response.json())
.then(data => {
    const html = `
    <div class="counter-flex__column">
        <div class="value" data-from="0" data-to="${data.server}"></div>
        <h2><i class="fas fa-server"></i> Servers</h2>
    </div>
    <div class="counter-flex__column">
        <div class="value" data-from="0" data-to="${data.commands}"></div>
        <h2><i class="fas fa-terminal"></i> Commands</h2>
    </div>
    <div class="counter-flex__column">
        <div class="value" data-from="0" data-to="${data.members}"></div>
        <h2><i class="fas fa-users"></i> Users</h2>
    </div>
    `

    const counters = document.querySelector(".counters")
    let counter = document.createElement("div"); 
    counter.className = "counter-flex";
    counter.innerHTML = html;

    counters.appendChild(counter);

    
    $('.value').countTo({
        refreshInterval: 50,
        speed: 1500
    });
    

})
.catch(err => {
    console.error("Error fetching guild count: ", err);
})
