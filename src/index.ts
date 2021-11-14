//Desarrolle un algoritmo que permita cargar alumnos
// y sus notas en los tres trimestres
//Se debe permitir obtener el promedio anual 
//(es decir, de sus tres notas) de un alumno (ingresado por el usuario)

function promedioanual(cantidadalumnos:number) {
  let nombres:any[]=new Array(cantidadalumnos);
  let nota1:number[]=new Array(cantidadalumnos);
  
  let nota2:number[]=new Array(cantidadalumnos);
  let nota3:number[]=new Array(cantidadalumnos);
  let promedio:number[]=new Array(cantidadalumnos);

  promedio=0;




  for (let index = 0; index < cantidadalumnos; index++) {
    nombres[index]=prompt("ingrese el nombre del alumno");
    nota1[index]=prompt("ingrese nota primer trimestre");
    nota2[index]=prompt("ingrese nota segundo trimestre");
    nota3[index]=prompt("ingrese nota tercer trimestre");

    promedio[index]=(nota1[index]+nota2[index]+nota3[index]);
    console.log(`El promedio del alumno ${nombres} es ${promedio}`);

  }
return promedioanual; 

}

promedioanual();



