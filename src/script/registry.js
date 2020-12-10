! function($) {
    const $username = $('#username');
    const $span = $('span');

    $username.on('focus', function() {
        $span.eq(0).html('中英文均可，最长14个英文或7个汉字');
        $span.eq(0).css('color', '#333');
    });
    $username.on('blur', function() {

        $.ajax({
            type: 'post',
            url: 'http://localhost/dashboard/a-javascript/project-taobao/php/reg.php',
            data: {
                xingming: $username.val()
            }
        }).done(function(data) { //data就是后端返回的结果
            console.log(data);
            if (!data) { //不存在
                $span.css('color', 'green').html('√');
            } else { //存在
                $span.css('color', 'red').html('该用户名已存在');
            }
        });

    });

}(jQuery);