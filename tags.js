
$( document ).ready( function() {

    var entries = [

        { label: 'данные', url: '#data', target: '_top' },
        { label: 'технологи', url: '#technology', target: '_top' },
        { label: 'иенвайромент', url: '#environment', target: '_top' },
        { label: 'обучение', url: '#learning', target: '_top' },
        { label: 'сопровождение', url: '#escort', target: '_top' },
        { label: 'новости', url: '#news', target: '_top' },
        { label: 'комьюнити', url: '#community', target: '_top' }
    ];

    var settings = {

        entries: entries,
        width: 480,
        height: 480,
        radius: '65%',
        radiusMin: 75,
        bgDraw: false,
        bgColor: '#111',
        opacityOver: 1.00,
        opacityOut: 0.05,
        opacitySpeed: 6,
        fov: 800,
        speed: 1,
        fontFamily: 'Oswald, Arial, sans-serif',
        fontSize: '15',
        fontColor: '#fff',
        fontWeight: 'normal',//bold
        fontStyle: 'normal',//italic
        fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        fontToUpperCase: true

    };

    //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
    $( '#holder' ).svg3DTagCloud( settings );

} );
