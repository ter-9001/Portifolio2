
const dados = [
    {
        Título:"Gabriel",
        Descrição: ""
    },
    {
        Título:"",
        Descrição: ""
    },
    {
        Título:"",
        Descrição: ""
    },
    {
        Título:"",
        Descrição: ""
    },
    {
        Título:"",
        Descrição: ""
    },
    {
        Título:"",
        Descrição: ""
    }];

document.getElementById("tituloprojeto").innerHTML = dados[0].Título;




Array.from(
        document.getElementsByClassName("curso")
    ).forEach(
        (element) => {

            var i;
            var elems = element.children;

            element.addEventListener("mouseover", () =>
            {

                for(i = 0; i < elems.length; i++) {
                    if (elems[i].className == "textodocurso" || elems[i].className == "textodocurso desactive" ) {
                        
                        elems[i].style.visibility = "visible";
                        elems[i].classList.remove("desactive");

                        elems[i].classList.add("active");
                       
                        break;
                    }        
                }                

               
               
                   
                     
                  
                
                


            
            })


            
            element.addEventListener("mouseout", () =>
            {
               
                for (i = 0; i < elems.length; i++) {
                    
                    
                    if(elems[i].className == "textodocurso active") {
                        
                            elems[i].classList.remove("active");

                            elems[i].classList.add("desactive");
                            elems[i].style.visibility = "hidden";
                    
                       
                        
                        break;
                    }        
                }                


            
            })


        }
    )



function  Load()
        {
            Array.from(document.getElementsByClassName("brandtext")).forEach(element => {
                
                element.classList.add("up")
                 

            });




        }


        window.onload = Load;

        window.onscroll = () => 
        {
            if(window.scrollY > 0)
            {

             
                Array.from(
                document.getElementsByClassName("brandtext")
               ).forEach(
                    (element) => {

                        
                        element.style.transition = '1.5s';
                        element.style.transform = 'translateY(-180px)';
                        
                   }
               )
               
               
                var brand = document.getElementById("brand");
                brand.classList.remove("active");
                brand.classList.add("off");
                
               
               


                var iconsnav= document.getElementById("iconsnav").style;


                iconsnav.transition = '1s';
                iconsnav.transform = 'translateY(10px)'

                
                var brand2 = document.getElementById("brand2").style;
                
                
                brand2.transition = '1.5s';
                brand2.transform = 'translateY(1000px)';
                brand2.display = 'none';


                var Projetos = document.getElementById("All");

                Projetos.classList.add("active");
                document.getElementById("menutiny").classList.toggle("on");
    
                Array.from(
                document.getElementsByClassName("topico")
               ).forEach(
                    (element) => {

                        
                        element.classList.add("active");
                        
                   }
               )

            }


            if(window.scrollY > 400)
            {
                document.getElementById("toHome").visibility = "visible";
            }
            else
            {
                document.getElementById("toHome").visibility = "hidden";
            }
       
        }


        document.getElementById('paratras').onclick = () =>
        {
            var element = document.getElementById("slide");

            var {style, src} = element;

            
                
            
            slideMoveTo(style, '2s', 'translateX(-100px)')
            style.visibility = 'hidden';
            

            

           
            
            setTimeout( () => {

                slideMoveTo(style, '2s', 'translateX(100px)')
            }, 2000)
      

            setTimeout( () => {

                let antigo = src;
                slide('-');
                let novo = 0;
                
                while(novo == antigo)
                {
                    novo = src;
                }


                style.visibility = 'visible';
                slideMoveTo(style, '2s', 'translateX(0px)')
            

            }, 2700)
            

    }

    document.getElementById('parafrente').onclick = () =>
        {
            var element = document.getElementById("slide");

            var {style, src} = element;

            
                
            
            slideMoveTo(style, '2s', 'translateX(100px)')
            style.visibility = 'hidden';
            

            

           
            
            setTimeout( () => {

                slideMoveTo(style, '2s', 'translateX(-100px)')
            }, 2000)
      

            setTimeout( () => {

                let antigo = src;
                slide('+');
                let novo = 0;
                
                while(novo == antigo)
                {
                    novo = src;
                }


                style.visibility = 'visible';
                slideMoveTo(style, '2s', 'translateX(0px)')

            }, 2700)
            

    }


   function slideMoveTo( style, transition, transform)
   {
      
            style.transition = transition;
            style.transform = transform;
            
   }

   var currentSlide = 1;

   function slide(mode)
   {
        
   
        if( mode == '+' && currentSlide < 6)
        {
            currentSlide++;
            document.getElementById("slide").src = "./"+ currentSlide + ".png"
            return;
        }

        if( mode == '+' && currentSlide == 6)
        {
            currentSlide=1;
            document.getElementById("slide").src = "./"+ currentSlide + ".png"
            return;
        }

        if( mode == '-' && currentSlide > 1)
        {

            currentSlide--;
            document.getElementById("slide").src = "./"+ currentSlide + ".png"
            return;
        }

        if( mode == '-' && currentSlide == 1)
        {
            currentSlide = 6;
            document.getElementById("slide").src = "./"+ currentSlide + ".png"
            
            return;
        }

   }


  // navbar

  document.getElementById("menutiny").onclick = () => 
  {
    document.getElementById("menutiny").classList.toggle("active");
    document.getElementById("iconsnav").classList.toggle("active");

  }

  document.getElementById("iconsnav").onclick = () =>
  {
    document.getElementById("iconsnav").classList.remove("active");
    document.getElementById("menutiny").classList.remove("active");
 }



