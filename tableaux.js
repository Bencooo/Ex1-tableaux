function somme(nb1, nb2){
  var tab = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  var resultat = 0;
  
  for(var i=0; i< tab.length; i++){
    if( (tab[i] >= nb1) && (tab[i] <= nb2)){
      resultat = resultat + tab[i];
    }

}
  return resultat;
       }

console.log(somme(30, 60));