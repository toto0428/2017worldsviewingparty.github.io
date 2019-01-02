( function () {

    var animationEnd = function () {
        var t,
            el = document.createElement( 'div' ),
            animations = {
                'animation': 'animationend',
                'WebkitAnimation': 'webkitAnimationEnd'
            }

        for ( t in animations ) {
            if ( el.style[ t ] !== undefined ) {
                return animations[ t ];
            }
        }
    }(),
        navli = $( '.nav li' ),
        sec = $( '.J-sec' ),
        index,
        count = navli.length,
        toggleSecClass = window.CSS && window.CSS.supports && ( window.CSS.supports( 'mask-position', '0 0' ) || window.CSS.supports( '-webkit-mask-position', '0 0' ) ) ? 'mask' : 'fadeIn',
        toggleNavClass = 'active',
        toggleSecZindexClass = 'zIndex',
        isAnimating = false;

    




    toggleSec( 0 );

    center();

    $( window ).resize( function () {
        center();
    } )

    
    } );
} )();