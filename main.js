var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;
    
  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
};

function getSyncScriptParams() {
         var scripts = document.getElementsByTagName('script');
         var lastScript = scripts[scripts.length-1];
         var scriptName = lastScript;
         return {
             elements : scriptName.getAttribute('data-elements')
         };
 } 

$( document ).ready(function() {
  if (getUrlParameter('aff') == '929') {
    
    var elements = $.data($('script[src*="UnbounceHideElements"]'), 'data-element');
    console.log("elements")
    $(elements).remove(); //Elements to remove.
  }
});
