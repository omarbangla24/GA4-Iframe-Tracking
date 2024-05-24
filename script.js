1. Sender-Child

#First Step
Tags:  
<script>
  try {
      var postObject = JSON.stringify({
        event: 'iframeFormSubmit', 
        form: 'Contact Us',
        eventData: {
         OrderID: {{orderID}},
         ProductTitle: {{productTitle}},
         DiscountAmount: {{discountAmount}},                          
         TotalPrice: {{total-Price}}

      }
        
      });
      parent.postMessage(postObject, 'https://float.space/');
} catch(e) {
  window.console && window.console.log(e);
}
  </script> 

Triggering
Firing Triggers
payment receive 2 CSS Element Visibility
Element Visibility

#2nd Step

Variable > User-Defined Variables>discountAmount

function() {
    return document.querySelector("#sb_invoice_totals_container > div > p.invoice-amount.invoice-amount--total-discount > span").innerText.replace("£","").trim();
  
}

2. Listner-Mother
<script type="text/javascript">
(function(window) {

    addEvent(window, 'message', function(message) {
      try{
      var data = JSON.parse(message.data);
      var dataLayer = window.dataLayer || (window.dataLayer = []);
      if (data.event) {
        dataLayer.push({
          'event': data.event,
          'postMessageData': data
        });
      }
      }catch(e){}
    });

    // Cross-browser event listener
    function addEvent(el, evt, fn) {
      if (el.addEventListener) {
        el.addEventListener(evt, fn);
      } else if (el.attachEvent) {
        el.attachEvent('on' + evt, function(evt) {
          fn.call(el, evt);
        });
      } else if (typeof el['on' + evt] === 'undefined' || el['on' + evt] === null) {
        el['on' + evt] = function(evt) {
          fn.call(el, evt);
        };
      }
    }

  })(window);
</script>


