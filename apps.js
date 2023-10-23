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
   c =  b.value;
   b.value = c.slice(0,-1)
}