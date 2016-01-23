function getXmlHttp(){
var XMLHttp = null;
 if(window.XMLHttpRequest){
 try{
 XMLHttp = new XMLHttpRequest();
 } catch(e){}
 } else if(window.ActiveXObject){
 try{
 XMLHttp = new ActiveXObject("Msxml2.XMLHTTP");
 } catch(e){
 try{
  XMLHttp = new ActiveXObject("Microsoft.XMLHTTP");
 } catch(e){}
 }
 }
 return XMLHttp;
 }
 function initialize(){
 }
 function Inpucheck() {
  fval = document.getElementById('myfile').value
  intPos = fval.lastIndexOf(".");
  if(intPos > 0) return true
  return false;
  }
 var d = document;  var ms = null ;
 var mbmizila = 0;
 loaderf  = function(){
   var fex = null;
    res= document.getElementById('myfile').value;
	if ((res.lastIndexOf("\\")) == -1){
	if (Inpucheck() == true) getfilepath("\\"+res); else alert("Load a file"); 
	} else {
   var fval = res.replace(/\\/g,"?");
   var c = fval.lastIndexOf("?"); 
   fval = fval.substr(c, fval.length);  
   fex = fval.replace('?',"\\");      
   if (Inpucheck() == true) getfilepath(fex); else alert("Load a file");
   } 
  } 
 function getfilepath(fpath){
   var reqst=getXmlHttp();
   reqst.open("GET","readffile.php?fpath="+fpath,true);   
   reqst.onreadystatechange = function() {
          if(reqst.readyState == 4) {        
            if(reqst.status == 200) { 
                parseImgg();          				
              var xmlDoc = reqst.responseXML; 			  
			  var  imgs = xmlDoc.documentElement.getElementsByTagName("curimage");
			  var i = 0; 
			   while ( i < imgs.length)
			  {		                  			  
			    var Rimg = imgs[i].getAttribute("mage"); 
				var Ub =  imgs[i].getAttribute("ihost");                  				
				disposition(Rimg,Ub,i); 	
                i++; 				 
			  }  		  
		    reqst = null;
            } else {			  
			 reqst = null;
            }
          }
        };        
       reqst.send(null);
 }
var imglist = [];
var  imgtab = null;
function  parseImgg(){
    if (imgtab) {imgtab.innerHTML = ""; imgtab = null;}
	if (imgtab == null){
   imgtab = document.createElement('table');
   imgtab.cellPadding="5";
   imgtab.cellSpacing="24";
   document.body.appendChild(imgtab);
 }   
}
var colcount = 0; var currentrow = 0; var trow, tcol; var n = 0;
function disposition(rimg,furl, i){
    if ((n == 0) || (n == 5)) { trow = document.createElement('tr'); trow.style.width= "40%"; imgtab.appendChild(trow);}
	if(n <= 5){
	  tcol = document.createElement('td'); 
	  tcol.style.cursor = "pointer"; tcol.style.background = "#ccc000"; tcol.style.width = "20%";
	 tcol.innerHTML = '<img width = "100%" src="'+ rimg +'"></img>'+'<br>'+'<a  id="detail'+i+'" style="display:none" href=http://"'+furl+'">'+furl+'</a>';
	 trow.appendChild(tcol);
	 n++;	 
	}
	tcol.onmouseover = function(){
    document.getElementById('detail'+i).style.display = "block";	
	}
	 tcol.onmouseout = function(){
    document.getElementById('detail'+i).style.display = "none";	
	}
	if(n >= 5) n = 0;
}
