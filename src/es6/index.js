const axios = require('axios');

//get anything
 async function get(){
    const datos = await  axios.get('https://jsonplaceholder.typicode.com/todos');
    console.log('datos',datos);
}

get();

// Algunos conceptos basicos ES6
const conceptosES6 = [
    //'parDEF',
    //'concatSTR',
    //'multilineaSTR',
    //'desestructuracion',
    //'arrowFunction',
    'promise',


]
//console.log(conceptosES6[0]);


switch  (conceptosES6[0]) {
    // Parametros por defecto
    case 'parDef': 
        
        break;
    case 'concatSTR':
        const str1 = 'zapatillas';
        const str2 = 'kayoga';
        const concat = str1+str2;
        const concatVar  = 'Hola ' + str1 + ' '+ str2;
        const concatVar1 = `${concatVar} ${concat}`;
        console.log(concatVar);
        console.log(concatVar1);
        break;
    case 'multilineaSTR':
        //antes 
        const str = 'primera linea \n' + 'segunda linea'
        console.log(str);
        //ES6
        const strES6 = `Primera Linea
                    Segunda Linea
                      Tercera Linea`;
        console.log(strES6);
        break;
    case 'desestructuracion':
        //Basico ES6
        const objectSample = {
            name:'Joel',
            age:'26',
            etc:'others'        
        }
        const {name,age,etc} = objectSample;
        console.log(name,age,etc);
        // Plus ES6
        let arr1 = [1,2,3]
        let arr2 = [4,5,6];
        let arr3 = ['joel',...arr1,...arr2];
        console.log(arr3);
        break;
    case 'arrowFunction':
        //Antes
        let arrobj = [
            {name: 'joel', age:'26'},
            {name: 'sayu', age:'30'}
        ]
        const listOfNames = arrobj.map(function(item){
            console.log(item.name,item.age);
        })
        // ES6 son funciones anonimas
        const listOfNames2 = arrobj.map(item =>{
            console.log(item.name);
        }) 
        // Otra opcion que es como un return y permite consolear
        const listOfNames3 = arrobj.map(item => item.name) 
        console.log(listOfNames3);    
        break;
    case 'promise':
        /*const promesa = () => { 
            return new  Promise((resolve, reject) => {
                
            });
        }*/


    default:
        console.log('default');


}
    
        
    
  

//console.log(parametros(10,6));
//console.log('osss');

//








