function MM_swapImgRestore(){var i,x,a=document.MM_sr;for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++)x.src=x.oSrc;}
function MM_preloadImages(){var d=document;if(d.images){if(!d.MM_p)d.MM_p=new Array();var i,j=d.MM_p.length,a=MM_preloadImages.arguments;for(i=0;i<a.length;i++)if(a[i].indexOf("index.htm#")!=0){d.MM_p[j]=new Image;d.MM_p[j++].src=a[i];}}}
function MM_findObj(n,d){var p,i,x;if(!d)d=document;if((p=n.indexOf("?"))>0&&parent.frames.length){d=parent.frames[n.substring(p+1)].document;n=n.substring(0,p);}
if(!(x=d[n])&&d.all)x=d.all[n];for(i=0;!x&&i<d.forms.length;i++)x=d.forms[i][n];for(i=0;!x&&d.layers&&i<d.layers.length;i++)x=MM_findObj(n,d.layers[i].document);if(!x&&d.getElementById)x=d.getElementById(n);return x;}
function MM_swapImage(){var i,j=0,x,a=MM_swapImage.arguments;document.MM_sr=new Array;for(i=0;i<(a.length-2);i+=3)if((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x;if(!x.oSrc)x.oSrc=x.src;x.src=a[i+2];}}
function MM_reloadPage(aa){if(aa==true)with(navigator){if((appName=="Netscape")&&(parseInt(appVersion)==4)){document.MM_pgW=innerWidth;document.MM_pgH=innerHeight;onresize=MM_reloadPage;}}
else if(innerWidth!=document.MM_pgW||innerHeight!=document.MM_pgH)location.reload();}
MM_reloadPage(true);function flevDivPositionValue(ba,ca){this.opera=(window.opera);this.ns4=(document.layers);this.ns6=(document.getElementById&&!document.all&&!this.opera);this.ie=(document.all);var da="";docObj=eval("MM_findObj('"+ba+"')");if(docObj==null){return 0;}
if((ca=="left")||(ca=="top")){if(!this.ns4){docObj=docObj.style;}
da=eval("docObj."+ca);if((this.ie)&&(da=="")){if(ca=="top"){da=eval(ba+".offsetTop");}
else{da=eval(ba+".offsetLeft");}};}
else{if(this.opera){docObj=docObj.style;if(ca=="height"){da=docObj.pixelHeight;}
else if(ca=="width"){da=docObj.pixelWidth;}}
else if(this.ns4){da=eval("docObj.clip."+ca);}
else if(this.ns6){da=document.defaultView.getComputedStyle(docObj,"").getPropertyValue(ca);}
else if(this.ie){if(ca=="width"){da=eval(ba+".offsetWidth");}
else if(ca=="height"){da=eval(ba+".offsetHeight");}}}
da=(da=="")?0:da;if(isNaN(da)){if(da.indexOf('px')>0){da=da.substring(0,da.indexOf('px'));}}
return parseInt(da);}
function flevPersistentLayer(){var sD=arguments[0],oD=eval("MM_findObj('"+sD+"')"),iWW,iWH,iSX,iSY,iT=10,sS="";if(!document.layers){oD=oD.style;}
if(oD.tmpTimeout!=null){clearTimeout(oD.tmpTimeout);}
var ea=arguments[1],sXC=arguments[2],sXR=arguments[3],sYT=arguments[4],sYC=arguments[5],sYB=arguments[6];var iS=(arguments.length>7)?parseInt(arguments[7]):0,iPx=(arguments.length>8)?parseInt(arguments[8]):0;if(window.innerWidth){var oW=window;iWW=oW.innerWidth;iWH=oW.innerHeight;iSX=oW.pageXOffset;iSY=oW.pageYOffset;}
else if(document.documentElement&&document.documentElement.clientWidth){var fa=document.documentElement;iWW=fa.clientWidth;iWH=fa.clientHeight;iSX=fa.scrollLeft;iSY=fa.scrollTop;}
else if(document.body){var ga=document.body;iWW=ga.clientWidth;iWH=ga.clientHeight;iSX=ga.scrollLeft;iSY=ga.scrollTop;}
else{return;}
var ha=iNX=flevDivPositionValue(sD,'left'),iCY=iNY=flevDivPositionValue(sD,'top');if(ea!=""){iNX=iSX+parseInt(ea);}
else if(sXC!=""){iNX=Math.round(iSX+(iWW)-(flevDivPositionValue(sD,'width')));}
else if(sXR!=""){iNX=iSX+iWW-(flevDivPositionValue(sD,'width')+parseInt(sXR));}
if(sYT!=""){iNY=iSY+parseInt(sYT);}
else if(sYC!=""){iNY=Math.round(iSY+(iWH/2) - (flevDivPositionValue(sD, 'height')/2));}
else if(sYB!=""){iNY=iSY+(iWH-flevDivPositionValue(sD,'height')-parseInt(sYB));}
if((ha!=iNX)||(iCY!=iNY)){if(iS>0){if(iPx>0){iT=iS;var ia=iPx,iPxY=iPx,iMX=Math.abs(ha-iNX),iMY=Math.abs(iCY-iNY);if(iMX<iMY){iPxY=(iMX!=0)?((iMY/iMX)*iPx) : iPx;} else {iPxX = (iMY != 0) ? ((iMX/iMY)*iPx):iPx;}
if(ia>=iMX){ia=Math.min(Math.ceil(ia),iPx);}
if(iPxY>=iMY){iPxY=Math.min(Math.ceil(iPxY),iPx);}
if((ha<iNX)&&(ha+ia<iNX)){iNX=ha+ia;}
if((ha>iNX)&&(ha-ia>iNX)){iNX=ha-ia;}
if((iCY<iNY)&&(iCY+iPxY<iNY)){iNY=iCY+iPxY;}
if((iCY>iNY)&&(iCY-iPxY>iNY)){iNY=iCY-iPxY;}}
else{var ja=((iNX-ha)/ iS), iMY = ((iNY - iCY) / iS);ja=(ja>0)?Math.ceil(ja):Math.floor(ja);iNX=ha+ja;iMY=(iMY>0)?Math.ceil(iMY):Math.floor(iMY);iNY=iCY+iMY;}}
if((parseInt(navigator.appVersion)>4||navigator.userAgent.indexOf("MSIE")>-1)&&(!window.opera)){sS="px";}
if(ja!=0){eval("oD.left = '"+iNX+sS+"'");}
if(iMY!=0){eval("oD.top = '"+iNY+sS+"'");}}
var sF="flevPersistentLayer('"+sD+"','"+ea+"','"+sXC+"','"+sXR+"','"+sYT+"','"+sYC+"','"+sYB+"',"+iS+","+iPx+")";oD.tmpTimeout=setTimeout(sF,10);}
function flevInitPersistentLayer(){if(arguments.length<8){return;}
var sD=arguments[0];if(sD==""){return;}
var oD=eval("MM_findObj('"+sD+"')");if(!oD){return;}
var ka=parseInt(arguments[1]);var la=arguments[2],sXC=arguments[3],sXR=arguments[4],sYT=arguments[5],sYC=arguments[6],sYB=arguments[7];var iS=(arguments.length>8)?parseInt(arguments[8]):0,iPx=(arguments.length>9)?parseInt(arguments[9]):0;if(ka!=0){if(!document.layers){oD=oD.style;}
la=parseInt(oD.left),sYT=parseInt(oD.top);}
var sF="flevPersistentLayer('"+sD+"','"+la+"','"+sXC+"','"+sXR+"','"+sYT+"','"+sYC+"','"+sYB+"',"+iS+","+iPx+")";eval(sF);}