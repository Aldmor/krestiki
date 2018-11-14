<script >  
function MyClick (xx) 
{  //alert (xx); 
var numsell=  +(xx[3]);                    // получили из имени кнопки ее номер  0..8  
    if (emptyCell(numsell)==true)    // клетка свободна 
     {  ar[numsell]='X';             // пишем Х в массив
               document.getElementById(xx).value='X';
         bclick=true;
          // alert('Отработал MyClick');
          return true;
     }
}
</script>