function formToSelect(state) {
    if (!state.id) {
      return state.text;
    }
    var $state = $(
      '<span class="flag-box-span"><img class="flag flag-' + state.element.value.toLowerCase() + '"/><span class="flag-box-span">' + state.text + '(' + state.phone + ')' +'</span></span>'
    );
    return $state;
  };

  var data = [
  {
    id: 'sg',
    text: 'SGP',
    phone: '+65'
  },
  {
    id: 'in',
    text: 'IND',
    phone: '+91'
  }, {
    id: 'us',
    text: 'USA',
    phone: '+1'
  }, {
    id: 'ar',
    text: 'ARG',
    phone: '+54'
  }, {
    id: 'pe',
    text: 'PER',
    phone: '+51'
  }, {
    id: 'mx',
    text: 'MEX',
    phone: '+52'
  }, {
    id: 'co',
    text: 'COL',
    phone: '+57'
  }];

  $(document).ready(function() {
    $("#select-country-number").select2({
      templateResult: formToSelect,
      templateSelection: formToSelect,
      data: data,
      minimumResultsForSearch: -1,
    });
  
    $("#select-country-number + .select2").click(function() {    
      $(".select2-container").addClass("active-flag-select2-dropdown");        
    });
    
    function arrayObjectIndexOf(myArray, searchTerm, property) {
      for (var i = 0, len = myArray.length; i < len; i++) {
        if (myArray[i][property] === searchTerm) return i;
      }
      return -1;
    }
  
    $("#select-country-number").on("select2:select", function(evt) {
      if (arrayObjectIndexOf(data, $("#select-country-number").val(), "id") !== -1) {
        var ct = arrayObjectIndexOf(data, $("#select-country-number").val(), "id");
        $("#country-code-text").text(data[ct].phone);
      }
    });
  });  