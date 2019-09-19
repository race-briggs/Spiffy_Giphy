$(document).ready(function(){

  var searchButtons = ['dog', 'cat', 'bird', 'cute', 'dumb', 'moose', 'skateboarding', 'snowboarding', 'mountains', 'nature'];

  $(document).on('click', '.search-btn', function(){

    var searchQuery = $(this).text();

    callGiphy(searchQuery);
  });

  function populateButtons(){
    $('#button-container').empty();
    searchButtons.forEach(function(button){
      var newButton = $('<button class="search-btn btn">')
      newButton.text(button);
      $('#button-container').append(newButton);
    })
  }

  $('.new-search-btn').on('click', function(){
    var newValue = $('.gif-search').val();
    if(searchButtons.includes(newValue)){
      callGiphy(newValue)
    } else {
      searchButtons.push(newValue);
      callGiphy(newValue);
    }
    populateButtons();
  })

  function callGiphy(query){
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=NAKkHeBxebc7yukomDEoaFQUnJTPvrXd&";

    q = query

    queryURL = queryURL + "limit=10&q=" + q;

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      $('.gif-holder').empty();
      response.data.forEach(function (gif) {
        var gifDiv = $('<div class="gifDiv">');
        var rating = $('<p>');
        var gifImg = $('<img class="gifImg">');

        rating.text('Rating: ' + gif.rating);

        gifImg.attr('src', gif.images.fixed_height.url);

        gifDiv.append(rating).append(gifImg);

        $('.gif-holder').append(gifDiv);
      })
    })
  }

  populateButtons()
})