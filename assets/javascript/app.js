$(document).ready(function(){

  var searchButtons = ['dog', 'cat', 'bird', 'cute', 'dumb', 'moose', 'skateboarding', 'snowboarding', 'mountains', 'nature'];

  $(document).on('click', '.search-btn', function(){

    var searchQuery = $(this).text();

    callGiphy(searchQuery);
  });

  function populateButtons(){
    $('#button-container').empty();
    searchButtons.forEach(function(button){
      var newButton = $('<button class="search-btn">')
      newButton.text(button);
      $('#button-container').append(newButton);
    })
  }

  $('.new-search-btn').on('click', function(){
    var newValue = $('.gif-search').val();
    searchButtons.forEach(function(value){
      if(searchButtons.includes(newValue)){
        callGiphy(newValue)
      } else {
        searchButtons.push(newValue);
        callGiphy(newValue);
      }
    })
    populateButtons();
  })

  function callGiphy(query){
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=NAKkHeBxebc7yukomDEoaFQUnJTPvrXd&";

    q = query

    console.log(q);

    queryURL = queryURL + "limit=10&q=" + q;

    console.log(queryURL)

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      $('.gif-holder').empty();
      response.data.forEach(function (gif) {
        var gifDiv = $('<div>');
        var rating = $('<p>');
        var gifImg = $('<img>');

        rating.text('Rating: ' + gif.rating);

        gifImg.attr('src', gif.images.fixed_height.url);

        gifDiv.append(rating).append(gifImg);

        $('.gif-holder').append(gifDiv);
      })
    })
  }

  populateButtons()
})