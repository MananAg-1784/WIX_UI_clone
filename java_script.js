$(document).ready( function(){
    $('.nav2 > div').hide();
    
    $('#nav_creation').on('click', function(){
        $('#growth').hide();
        $('#enterprise').hide();
        $('#resources').hide();
        $('#business').hide();
        $('#creation').slideToggle();
    });
    $('#nav_business').on('click', function(){
        $('#growth').hide();
        $('#enterprise').hide();
        $('#resources').hide();
        $('#creation').hide();
        $('#business').slideToggle();
    });
    $('#nav_growth').on('click', function(){
        $('#creation').hide();
        $('#enterprise').hide();
        $('#resources').hide();
        $('#business').hide();
        $('#growth').slideToggle();
    });
    $('#nav_resources').on('click', function(){
        $('#growth').hide();
        $('#enterprise').hide();
        $('#creation').hide();
        $('#business').hide();
        $('#resources').slideToggle("display-flex");
    });
    $('#nav_enterprise').on('click', function(){
        $('#growth').hide();
        $('#creation').hide();
        $('#resources').hide();
        $('#business').hide();
        $('#enterprise').slideToggle("display-flex");
    });

    $('#drop_down_2 > div').hide();
    
    $('#website_type div button:nth-child(1)').hover( function(){
        $('.nav2 > div').css('display','none');
        $('#business_services').css('display','inline-flex');
        },
        function(){
            $('#business_services').css('display','none');
        }
    );

    $('#website_type div button:nth-child(3)').hover( function(){
        $('.nav2 > div').css('display','none');
        $('#creative').css('display','inline-flex');
        },
        function(){
            $('#creative').css('display','none');
        }
    );

    $('#website_type div button:nth-child(2)').hover( function(){
        $('.nav2 > div').css('display','none');
        $('#store').css('display','inline-flex');
        },
        function(){
            $('#store').css('display','none');
        }
    );

    $('#website_type div button:nth-child(4)').hover( function(){
        $('.nav2 > div').css('display','none');
        $('#community').css('display','inline-flex');
        },
        function(){
            $('#community').css('display','none');
        }
    );

    $('#website_type div button:nth-child(5)').hover( function(){
        $('.nav2 > div').css('display','none');
        $('#blog').css('display','inline-flex');
        $('#collections').css('display','none');
        },
        function(){
            $('#blog').css('display','none');
        }
    );

    $('#template_collection').hover( function(){
        $('.nav2 > div').css('display','none');
        $('#collections').css('display','inline-flex');
        $('#blog').css('display','none');
        },
        function(){
            $('#collections').css('display','none');
        }
    );

    $('#profile div a:nth-child(3)').hover( function(){
        $('#profile_options').css('display','flex')
        $('#profile_options').hover(function(){
            $('#profile_options').css('display','flex')
            },
            function(){
                $('#profile_options').css('display','none')
            });
        }, function(){
            $('#profile_options').css('display','none')
        });

});

