$(document).ready(function(){

  var searchButtons = ['dog', 'cat', 'bird', 'cute', 'dumb', 'moose', 'skateboarding', 'snowboarding', 'mountains', 'nature'];

  $(document).on('click', '.search-btn', function(){
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=NAKkHeBxebc7yukomDEoaFQUnJTPvrXd&";

    console.log(this);

    var query = $(this).text();

    console.log(query);

    queryURL = queryURL + "limit=10&q=" + query;

    console.log(queryURL)

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response){
      console.log(response);
      $('.gif-holder').empty();
      response.data.forEach(function(gif){
        var gifDiv = $('<div>');
        var rating = $('<p>');
        var gifImg = $('<img>');

        rating.text('Rating: ' + gif.rating);

        gifImg.attr('src', gif.images.fixed_height.url);

        gifDiv.append(rating).append(gifImg);

        $('.gif-holder').append(gifDiv);
      })
    })

  });

  function populateButtons(){
    searchButtons.forEach(function(button){
      var newButton = $('<button class="search-btn">')
      newButton.text(button);
      $('#button-container').append(newButton);
    })
  }

  $('.new-search-btn').on('click', function(){
    var newValue = $('.gif-search').val();
  })



  populateButtons()
})