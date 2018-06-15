pigIt = s => s.split(' ').map(e => e.substr(1) + e[0] + 'ay').join(' ');

//or

function pigIt(str){
    var arrayStr = str.split(''); 
    var word = '';
    var sentence  = '';
    var begining  = true;
    var firstLetter = '';
    
    arrayStr.forEach(function(letter, i){  
        if (begining) {
            firstLetter = letter;
            begining = false;
        } else { 
            if (letter === ' ' || i == arrayStr.length) {
                sentence += firstLetter; 
                sentence += 'ay '; 
                firstLetter = '';
                begining = true;
            } else {
                sentence += letter;
            }
        } 
        if (i + 1 == arrayStr.length) {
            sentence += firstLetter; 
            sentence += 'ay'; 
        } 
    });
    return sentence;
  }

  //or

  function pigIt(str) {
    var arrayWord = str.split(' ');
    return arrayWord.map(function(word) {
      var firstLetter = word.charAt(0);
      return word.slice(1) + firstLetter + 'ay';
    }).join(' ');
  }

  //or
  
  function pigIt(str){
    return str.split(' ').map(word => {
      return word.substring(1) + word[0] + 'ay';
    }).join(' ');
  }