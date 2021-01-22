(
    function() {
        function replaceAll(content,searchText,replaceText) {
            while(content.indexOf(searchText) > -1) {
                content = content.replace(searchText,replaceText);
            }

            return content;
        };
        let div = document.querySelectorAll('.product-info-container .content div');
    let infoP = document.querySelectorAll('.product-info-container .content div p')
    for (let i = 0 ; i < div.length; i++) {
        div[i].style = {};
        div[i].align = '';
        div[i].style.fontSize = '16px'
    }

    // for (let i = 0; i < infoP.length; i++) {
    //     infoP[i].style.marginTop = '15px'
    // }

    let p = document.querySelectorAll('.product-attributes .chapter-box p')
    for ( let i = 0; i < p.length; i++) {
        p[i].style.marginTop = '15px'
    }

    
    let imgArr = document.querySelectorAll('.product-attributes .chapter-box img');
    let origin = window.location.origin;
    for (let i = 0; i < imgArr.length; i++) {
        let custom = imgArr[i].getAttribute('data-custom');
        if (custom != 'newVpn') {

            let flag = imgArr[i].src.indexOf(origin);
        
            if (flag != -1) {
                imgArr[i].src = replaceAll(imgArr[i].src,origin,'https://vpncollection.com')
            }
        }
        
    }

    // 操作 所有内容区图片
    if (window.screen.width <= 750) {
        let imgArr = document.querySelectorAll('.product-attributes .chapter-box img');
        for (let i = 0; i < imgArr.length; i++) {
            if (imgArr[i].getAttribute('data-custom') != 'newVpn') {
                imgArr[i].style.width = '100%';
                imgArr[i].style.height = 'auto';
            }
            
        }
    }
    }
)()
    
