$(document).ready(function(){

    var heightR = $('.box-offers').height();

    $('.box-offers .item-section').css({'height':heightR});

    $('.item-section1,.item-section2,.item-section3,.item-section4,.item1,.item2,.item3,.item4,.item5').viewportChecker({
        classToAdd: 'visible animated fadeIn',
        repeat:true,
        offset:200
    });
   $('.number').viewportChecker({
        callbackFunction: function(){
            $('.item-section').addClass('test');
            $('.number-1').animate({ num: 5200}, {
                duration: 3000,
                step: function (num){
                    this.innerHTML = (num).toFixed(0)
                }
            });

            $('.number-2').animate({ num: 14}, {
                duration: 3000,
                step: function (num){
                    this.innerHTML = (num).toFixed(0)
                }
            });

            $('.number-3').animate({ num: 3.2}, {
                duration: 3000,
                step: function (num){
                    this.innerHTML = (num).toFixed(1)+'<br><small>млн</small>'
                }
            });
        },
        repeat:true
    });
});