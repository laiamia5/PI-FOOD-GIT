export function validartitle (value) {
    if(value.length > 80 ) return 'mayor'
    if(value.length < 2) return 'menor'
    if(value.length < 80 && value.length > 2) return ''
 }

 export function validarnum (value){
    let saber = Math.sign(value)
    if(saber == -1) return 'no puede ser negativo'
    if(saber == 0) return 'debe asignar un valor'
    if(saber == 1) return ''
 }

 export function validarImg (value){
    if(/.(gif|jpeg|jpg|png)$/i.test(value)){
        return ''
    }else{
        return 'no es una imagen'
    }
 }

 export function validarSummary(value){
    if(value.length > 300) return 'se permiten solo 300 caracteres'
    if(value.length < 10) return 'debe agregar almenos 10 caracteres'
    if(value.length < 300 && value.length > 10) return ''
 }

 export let dishTypesArray = []

 export function validarDishtypes(value){
   dishTypesArray.push(value)
   return dishTypesArray.join('-')
 }

 export let stepsArray = []

export function validarSteps(value){
   stepsArray.push(value)
   return stepsArray.join('-')
}