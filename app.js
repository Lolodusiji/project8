var input = document.querySelectorAll('.inpt');

let submit = document.querySelector('.form-container')

let error = document.querySelectorAll('.err-mesg');

let icon = document.querySelectorAll('.err-img')
console.log(icon)

submit.addEventListener('submit', (e) => {
    // console.log(input);
    input.forEach(inpt => {
        // console.log(inpt);
        if(inpt.value === '') {
            error.forEach(err => {
                err.style.display = 'block'
                setTimeout(() => {
                    err.style.display = 'none'
                }, 3000);
                 
            })
            // 
            inpt.style.borderColor = 'rgba(241, 59, 59, 0.877)';
            setTimeout(()=>{
                inpt.style.borderColor = 'hsl(246, 25%, 77%)';
            } ,3000)
            for (let err = 0; err < icon.length; err++){
                // console.log(error[err]);
                const element = icon[err];
                element.style.display = 'block'
                setTimeout(()=>{
                    element.style.display = 'none'
                } ,3000)

            }
        }

    })  
   

    e.preventDefault();

    })
