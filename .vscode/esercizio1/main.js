// ES 1: Scrivi una funzione di uguaglianza che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI,
//   FALSE altrimenti.
//   Esempi:
//     Input: n = 2, m = 3
//     Output: FALSE
//     Input: n = 2, m = '2'
//     Output: FALSE
//     Input: n = 2, m = 2
//     Output: TRUE 

function isIdentic(n, m) {
    if (n===m) { 
        return true

    } else {
        return false
    }

}
console.log(isIdentic (2,"2"))


