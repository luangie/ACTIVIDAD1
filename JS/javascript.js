
//( "¡Bienvenido, como puedo ayudarte")
swal("¡Bienvenido!" , "...¡Como puedo ayudarte!");



function validacioncampos() {

    var nombre= document.getElementById("name").value;
    var tipom = document.getElementById("type").value;
    var email = document.getElementById("email").value;
    var celular = document.getElementById("celular").value;
    var mensaje = "";
    
    /*if (tipom =="") {
        alert("el campo tipo de mensaje esta vacio");
       document.getElementById("type").focus();
      }
   
    if (nombre ==""){
      alert("el campo nombre esta vacio");
      document.getElementById("name").focus();
      }*/

     
    if(tipom == "" || nombre =="" || email == "" || celular ==""  ){
    if(tipom ==""){
        mensaje +="el campo de tipo de mensaje esta vacio";
         }
    if (nombre =="") {
             mensaje +="\nel campo nombre esta vacio";
              }

        // Continuidad de las alertas//

    if(email == ""){
       mensaje +="\nel campo email esta vacio";
     }
     if(celular == ""){
      mensaje +="\nel campo celular esta vacio";
    }



   
      alert(mensaje);
          }

           
        }
    
    



