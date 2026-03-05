const text = "Passionné par le développement web et la programmation.";
        let index = 0;

        function typeEffect(){
            if(index < text.length){

                document.querySelector('typing').innerHTML += text.charAt(index); index++;
                setTimeout(typeEffect, 50)
            }
        }

        window.onload = typeEffect;