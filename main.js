$('document').ready(function(){
  $("input[type='button']").click(function(){
    cheer.getName($('.your_name').val());
    cheer.appendDom(cheer.name);
  });
});

 var cheer = {
  name: '',

  getName: function(name){
    cheer.name = name;
  },

  preamble: function(){
    return 'Your name is ' + cheer.name
  },

  postamble: function(){
    return cheer.name + cheer.endings[Math.Floor(Math.random()*cheer.endings.length)]
  },

  nameArray: function(){
    return cheer.name.toUpperCase().split('');
  },

  appendDom: function(){
    $('ul').empty();
    $('ul').append($('<li>' + cheer.preamble() +'</li>'));

    cheer.nameArray().forEach(function(letter){
      if(letter === 'A' ||letter === 'E' ||letter ==='F' ||letter === 'H' ||letter === 'I' ||letter === 'L' ||letter === 'M' ||letter === 'N' || letter === 'O' ||letter ===  'R' ||letter === 'S' || letter === 'X' ){
        $('ul').append('<li>Give me an... ' + letter + '</li>');
      } else {
        $('ul').append('<li>Give me a... ' + letter + '</li>');
      }
    })

    $('ul').append($('<li>' + cheer.postamble() + '</li>'));
  },
  
  endings: [' is Great!!!', ' is the Best!!!', ' is Amazing!!!', ' is Wonderful!!!']
};
