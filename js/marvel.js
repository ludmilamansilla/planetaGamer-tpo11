const marvel = {
    render:()=> {
        const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=5fd21311e8b3ede424c0a48a51b9ec68&hash=022627338b6f66179c568dde2a7b285f';
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';

        fetch(urlAPI)
        .then (res => res.json())
        .then ((json) => {
            for(const hero of json.data.results){
                let urlHero = hero.urls[0].url;
                contentHTML+= ` 
                <div class="col-md-4">
                    <a href="${urlHero}" target="_blank">
                        <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                    </a>
                    <h3 class="title">${hero.name}</h3>
                </div>`; 
            }
            container.innerHTML = contentHTML;
        })
    }
};
marvel.render()