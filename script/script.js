const form = document.getElementById('survey-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();    
    let transactionFormData = new FormData(form);
    convertData(transactionFormData);
})

function convertData(transactionFormData){
    let transctionName = transactionFormData.get('name');
    let transctionEmail = transactionFormData.get('email');
    let transctionAge = transactionFormData.get('age');
    let transctionRole = transactionFormData.get('role');
    let transctionRecommend = transactionFormData.get('user-recommend');
    let transctionLike = transactionFormData.get('mostLike');
    let transctionPrefer = transactionFormData.get('prefer');
    let transctionComment = transactionFormData.get('comment');
    return{
        'transctionName':transctionName,
        'transctionEmail':transctionEmail,
        'transctionAge':transctionAge,
        'transctionRole':transctionRole,
        'transctionRecommend':transctionRecommend,
        'transctionLike':transctionLike,
        'transctionPrefer':transctionPrefer,
        'transctionComment':transctionComment,
    }
}



/*function enviar(){

    let persona = {
        nombre: document.querySelector('#name'),
        email: document.querySelector('#email'),
        edad: document.querySelector('#number'),
        ocupacion: document.querySelector('#dropdown'),
        recomendacion: document.querySelector('.input-radio'),
        favorito: document.querySelector('#most-like'),
        mejorar: document.querySelector('.input-checkbox'),
        comentario: document.querySelector('#comments')
    };

    localStorage.setItem( 'persona', JSON.stringify(persona) );
    alert('Guardado con exito');
}*/