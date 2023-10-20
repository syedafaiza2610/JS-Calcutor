function work(e){
   document.getElementById('inp').value += e //field me hamesha value lagegi
  }
  function eq(){
     var a = document.getElementById('inp')
     a.value = eval(a.value)
  }
  function clr() {
   document.getElementById('inp').value=''
  }

  function clearAll() {
   var b = document.getElementById('inp');
   const currentText = inp.value;
   if (currentText.length > 0) {
     inp.value = currentText.slice(0, -1);
   }
 }
