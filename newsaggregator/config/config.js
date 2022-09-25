fetch('../data.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        let app = document.getElementById('lii');
        console.log(app);
        let out = "";
        for (let dat of data) {
            out += `
           <div class="list_news">
           <p>${dat.heading}</p>
           <img src="${dat.newim}" alt="">
           <img src="${dat.newimg}" alt="">
           
           </div>
        `
        }
        app.innerHTML = out;


    })
    .catch(function(err) {
        console.log(err);
    })