$(function(){
    var products = [
        { value: 'Alma', data: 'Some' },
        { value: 'Barack', data: 'Some' },
        { value: 'Banán', data: 'Some' },
        { value: 'Bérci ribiszke', data: 'Some' },
        { value: 'Birs', data: 'Some' },
        { value: 'Bortermő szőlő', data: 'Some' },
        { value: 'Dió', data: 'Some' },
        { value: 'Kajszibarack', data: 'Some' },
        { value: 'Kaktuszfüge', data: 'Some' },
        { value: 'Kalamondin', data: 'Some' },
        { value: 'Kései meggy', data: 'Some' },
        { value: 'Keserű narancs', data: 'Some' },
        { value: 'Kínai gesztenye', data: 'Some' },
        { value: 'Kivi (gyümölcs)', data: 'Some' },
        { value: 'Kopasz kivi', data: 'Some' },
        { value: 'Kökény (növényfaj)', data: 'Some' },
        { value: 'Kumkvat', data: 'Some' },
        { value: 'Málna', data: 'Some' },
        { value: 'Mandarin (gyümölcs)', data: 'Some' },
        { value: 'Mandula (növényfaj)', data: 'Some' },
        { value: 'Mangó', data: 'Some' },
        { value: 'Mangosztán', data: 'Some' },
        { value: 'Maracuja', data: 'Some' },
        { value: 'Mazsola', data: 'Some' },
        { value: 'Meggy', data: 'Some' },
        { value: 'Zeller', data: 'Some' },
        { value: 'Papaja', data: 'Some' },
        { value: 'Paradicsom', data: 'Some' },
        { value: 'Perui földicseresznye', data: 'Some' },
        { value: 'Pineberry', data: 'Some' },
        { value: 'Pitaja', data: 'Some' },
        { value: 'Pomelo', data: 'Some' }
    ];

    $('#search-field').autocomplete({
        lookup: products,
        onSelect: function (suggestion) {
            alert('You selected: ' + suggestion.value + ', ' + suggestion.data);
        }
    });
});

$('#home-sale').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('#popular-sale').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// $('#details-gallery').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
// });