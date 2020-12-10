! function($) {
    const $list = $('.list ul');
    //1.渲染list.html页面
    $.ajax({
        url: 'http://localhost/dashboard/a-javascript/project-taobao/php/listdata.php',
        dataType: 'json'
    }).done(function(data) {
        let $strhtml = '';
        $.each(data, function(index, value) {
            $strhtml += `
                <li>
                    <a href="detail.html?sid=${value.sid}">
                        <img class="lazy" data-original="${value.url}" width="200" height="200"/>
                        <p>${value.title}</p>
                        <span>￥${value.price}</span>
                    </a>
                </li>
            `;
        });
        $list.html($strhtml);
        $(function() {
            $("img.lazy").lazyload({ effect: "fadeIn" });
        });
    });
}(jQuery);