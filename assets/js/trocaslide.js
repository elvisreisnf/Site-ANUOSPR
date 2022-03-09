function trocaSlideCafe(){


    for (let i = 1; i <= 15 ; i++){
        let img = document.querySelector(`#image${i}`);
        img.setAttribute('src', `assets/img-produtos/confeitaria e cafe/${i}.jpg`);
    }

    let ind = 16

    while ( ind > 15){
        let slide = document.querySelector(`.slide${ind}`);
        if (slide.className != 'none'){
            slide.className = "imgnone"
            ind++
        } else {
            break
        } 
    }

}