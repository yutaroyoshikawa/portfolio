window.onload = function(){

    const div = document.createElement('div');
    div.style.opacity = 0;
    div.style.color = 'rgb(253, 172, 167)';
    div.style.fontFamily = 'Hannari';
    div.id = 'articleTitle';
    document.body.appendChild(div);
    let Flag = false;
    const conceptText = {
        0:{
            0: 'k/1き/0r/1ら/0k/1き/0r/1ら/0/n',
            1: 'p/1ポ/0p/0p/2ッ/0プ/0/n',
            2: 'I/0T/0/n'
        },
        1:{
            0: 'w/1わ/0k/1く/0w/1わ/0k/1く/0/n',
            1: 's/1シ/0n/1ン/0p/1プ/0r/1ル/0/n',
            2: 'D/0e/0s/0i/0g/0n/n'
        },
        2:{
            0: 'd/1ど/0k/1き/0d/1ど/0k/1き/0/e',
            1: 'm/1モ/0ー/0d/1ド/0/e',
            2: 'M/0u/0s/0i/0c/0/e'
        }
    };
    let conceptStack = {
        0: '',
        1: '',
        2: ''
    };
    let recentCount = {
        paragraph: 0,
        num: 0,
        stack: 0,
        stopFlag: false,
        underCount: 40,
        underFlag: false,
        underLoop: 1
    };
    let barColor = {
      0: 254,
      1: 209,
      2: 229
    };
    let showArticle = false;
    let articleOpa = 0;
    let backStack;
    let animStop = false;
    let loopNum;
    let tmpConcept = '';
    let conceptDeray = 20;
    let clickFlag = false;
    let clickSet = 0;
    let clickOpacity = 1;
    let openingAnim = true;
    let iconBox;
    let iconMaterial;
    let mouseFlag = false;
    let leaveFlag = false;
    let uuid;
    let animCount = 0;
    let open = 1;
    let x;
    let y;
    let backAnim = false;
    let intersects;
    const perticleNum = 7;
    let distanceFromCenter = 300;
    let onCircle = 0;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 1000;
    camera.lookAt(scene.position);
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    console.clear();
    const iconGeometry = new THREE.CircleGeometry(10, 32);
    const iconLoader = new THREE.TextureLoader();
    iconLoader.load('img/sd11.png', (texture) => {
        iconMaterial = new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true,
            opacity: 0
        });
        iconBox = new THREE.Mesh(iconGeometry, iconMaterial);
        scene.add(iconBox);
    });

    const squareGeometry = new THREE.PlaneGeometry( 200, 60);
    const squareMaterial = new THREE.MeshBasicMaterial({color: 0xffffff});
    const square = new THREE.Mesh(squareGeometry, squareMaterial);
    square.position.set(-100, 300, 0);
    square.scale.x = 0.00000001;
    square.uuid = perticleNum;
    scene.add(square);
    const circleGeometry = new THREE.CircleGeometry( 10, 32 );
    const circleMaterial = new THREE.MeshBasicMaterial( { color: 0xFDACA7 } );
    const circles = [];
    const cir_info = [];

    for(let setLoop = 0; perticleNum > setLoop; setLoop++){
        cir_info[setLoop] = {
            radian: 0,
            goalRadian: (6 - 6 / perticleNum * setLoop) ,
            delay: 10 * setLoop,
            mouseFlag: false,
            createFlag: false,
            backFlag: false,
            stopFlag: false,
            stopRadian: 0
        }
    }

    circles[0] = new THREE.Mesh( circleGeometry, circleMaterial );
    circles[0].position.x = 10;
    circles[0].uuid = 0;
    scene.add( circles[0] );

    document.getElementById('back-button').addEventListener('click', function(){
        square.scale.x = 0;
        document.body.style.backgroundColor = 'rgb(138, 164, 205)';
        document.getElementById('index-wrapper').style.opacity = 1;
        document.getElementById('concept-wrapper').style.opacity = 1;
        clickFlag = false;
        mouseFlag = false;
        intersects = '';
        backAnim = true;
    });

    document.addEventListener('click', function(event){
        if(openingAnim == false){
            x = event.clientX;
            y = event.clientY;
            const ClickMouse = new THREE.Vector2();
            ClickMouse.x =  ( x / window.innerWidth ) * 2 - 1;
            ClickMouse.y = -( y / window.innerHeight ) * 2 + 1;
            const ClickrayCaster = new THREE.Raycaster();
            ClickrayCaster.setFromCamera( ClickMouse, camera );
            intersects = ClickrayCaster.intersectObjects( scene.children );
            if(intersects != ''){
                if(perticleNum == intersects[0].object.uuid) {
                    onCircle = perticleNum;
                }else {
                    onCircle = 0;
                }
            }else{
                onCircle = 0;
            }

            if(mouseFlag == true && intersects != '' && perticleNum != onCircle) {
                mouseFlag = false;
                clickFlag = true;
                document.getElementById('back-button').style.display = 'block';
                clickOpacity = 1;
            }
        }
    }, false);



    document.addEventListener( 'mousemove', function(event){
        if(openingAnim == false){
            x = event.clientX;
            y = event.clientY;
            const mouse = new THREE.Vector2();
            mouse.x =  ( x / window.innerWidth ) * 2 - 1;
            mouse.y = -( y / window.innerHeight ) * 2 + 1;
            const raycaster = new THREE.Raycaster();
            raycaster.setFromCamera( mouse, camera );
            intersects = raycaster.intersectObjects( scene.children );
            if(intersects != ''){
                if(perticleNum == intersects[0].object.uuid) {
                    onCircle = perticleNum;
                }else {
                    onCircle = 0;
                }
            }else{
                onCircle = 0;
            }
            if(mouseFlag == false && intersects != '' && perticleNum != onCircle) {
                document.body.style.cursor = 'pointer';
                uuid = intersects[0].object.uuid;
                // console.log(iconBox);
                iconBox.position.x = circles[uuid].position.x;
                iconBox.position.y = circles[uuid].position.y;
                mouseFlag = true;
                textFlag.count = true;
                cir_info[uuid].stopRadian = cir_info[uuid].radian + 0.1;
            }
            if(mouseFlag == true && intersects == '' && perticleNum != onCircle){
                document.body.style.cursor = 'default';
                mouseFlag = false;
                leaveFlag = true;
                if(cir_info[uuid].backFlag == false){
                    cir_info[uuid].backFlag = true;
                }
                textFlag.count = false;
            }
        }
    }, false );
    let textFlag = {
        count: false,
        opaFlag: false,
        opacity: 0,
        createFlag: false
    };
    function backFunc(){
        clickSet += (0 - clickSet) / 5;
        circles[uuid].scale.set(clickSet,clickSet,clickSet);
        if(document.getElementById('back-button').style.opacity != 0){
            document.getElementById('back-button').style.opacity -= 0.1;
            document.getElementById('content-wrapper').style.opacity -= 0.1;
        }
        iconBox.scale.set(0,0,0);
        if(clickSet <= 1.12){
            document.getElementById('back-button').style.display = 'none';
            document.getElementById('content-wrapper').style.display = 'none';
            open = 1;
            iconMaterial.opacity = 1;
            clickFlag = false;
            cir_info[uuid].stopFlag = false;
            backAnim = false;
            animStop = false;
            openingAnim = false;
            showArticle = false;
            clickSet = 0;
        }
    }
    function renderScene(){
        requestAnimationFrame(renderScene);
        if(showArticle === true){
            console.log(articleOpa);
            articleOpa += 0.1;
            document.getElementById('content-wrapper').style.opacity = articleOpa;
            if(articleOpa >= 1){
                articleOpa = 0;
                showArticle = false;
            }
        }
        if(backAnim === true){
            backFunc();
        }
        if(animStop === false){
            if(clickFlag == true){
                for(let colorLoop = 0; colorLoop <= 2; colorLoop++){
                    if(barColor[colorLoop] != 255){
                        barColor[colorLoop]++;
                    }
                }
                document.getElementById('first-bar').style.borderTopColor = 'rgb(' + barColor[0] + ',' + barColor[1] + ',' + barColor[2] + ')';
                document.getElementById('second-bar').style.borderTopColor = 'rgb(' + barColor[0] + ',' + barColor[1] + ',' + barColor[2] + ')';
                document.getElementById('third-bar').style.borderTopColor = 'rgb(' + barColor[0] + ',' + barColor[1] + ',' + barColor[2] + ')';
                clickOpacity -= 0.1;

                // console.log('OK');
                if(clickOpacity >= 0){
                    console.log(clickOpacity);
                    document.getElementById('concept-wrapper').style.opacity = clickOpacity;
                    document.getElementById('articleTitle').style.opacity = clickOpacity;
                    document.getElementById('back-button').style.opacity = 1 - clickOpacity;
                }else if(clickSet >= 120){
                    if(articleOpa === 0){
                        document.getElementById('content-wrapper').style.display = 'block';
                        document.getElementById('image-mask').style.height = window.innerHeight + 'px';
                        document.getElementById('top-color').style.marginTop = window.innerHeight / 2 + 'px';
                        document.getElementById('top-color').style.height = window.innerHeight / 2 + 'px';
                        document.getElementById('content-color').style.marginTop = window.innerHeight + 'px';
                        document.getElementById('article-sent').style.paddingTop = window.innerHeight / 2 - 200 + 'px';
                        document.getElementById('content-color').style.height = document.getElementById('article-sent').clientHeight - (window.innerHeight / 2 - 200) + 'px';
                        document.getElementById('article-title').style.marginTop = window.innerHeight / 2 - 100 + 'px';
                        showArticle = true;
                    }

                    document.body.style.backgroundColor = '#FDACA7';
                    circles[uuid].scale.set(1, 1, 1);
                    document.getElementById('index-wrapper').style.opacity = 0;
                    document.getElementById('concept-wrapper').style.opacity = 1;
                    animStop = true;
                    openingAnim = true;
                    document.body.style.cursor = 'default';
                }
                iconMaterial.opacity -= 0.1;
                clickSet += (130 - clickSet) / 20;
                circles[uuid].scale.set(clickSet,clickSet,clickSet);
            }else if(mouseFlag == true){
                open += (6 - open) / 5;
                square.position.set(circles[uuid].position.x + 100, circles[uuid].position.y + 70, 0);
                if(textFlag.count == true && textFlag.createFlag == false){
                    div.textContent = 'くみたてマトペ';
                    div.style.position = 'absolute';
                    div.style.zIndex = 10;
                    div.style.fontSize = 35 + 'px';
                    div.style.top = y - 122 + 'px';
                    div.style.left = x + 33 + 'px';
                    textFlag.createFlag = true;
                }
                if(textFlag.opaFlag == false){
                    textFlag.opacity += 0.07;
                    iconMaterial.opacity += 0.07;
                    div.style.opacity = textFlag.opacity;
                    if(textFlag.opacity >= 1){
                        textFlag.opaFlag = true;
                    }
                }
                square.scale.x += (1 - square.scale.x) / 5;
                cir_info[uuid].stopFlag = true;
                circles[uuid].scale.set(open, open, open);
                iconBox.opacity = 1;
                iconBox.scale.set(open - 0.4, open - 0.4, open - 0.4);
            }
            if(leaveFlag == true){
                if(textFlag.opaFlag == true){
                    textFlag.opacity -= 0.3;
                    iconMaterial.opacity -= 0.3;
                    div.style.opacity = textFlag.opacity;
                    if(textFlag.opacity <= 0){
                        textFlag.opaFlag = false;
                        textFlag.createFlag = false;
                    }
                }
                open += (1 - open) / 3;
                circles[uuid].scale.set(open, open, open);
                cir_info[uuid].stopFlag = false;
                iconBox.scale.set(open - 0.4, open - 0.4, open - 0.4);

                if(open < 1.1 && square.scale.x < 0.0000001){
                    leaveFlag = false;
                }
            }
            //遅延処理
            if(animCount != perticleNum){
                //全ての円の遅延カウンターを１ずつ減算
                for(let delayCount = 0; perticleNum > delayCount; delayCount++){
                    if(cir_info[delayCount].delay != 0) {
                        cir_info[delayCount].delay--;
                        if(cir_info[delayCount].delay == 0 && cir_info[delayCount].createFlag == false){
                            //遅延カウンターが0になった場合円をシーンに追加し回転処理に入れる
                            circles[circles.length] = new THREE.Mesh( circleGeometry, circleMaterial );
                            circles[circles.length - 1].position.x = 10;
                            circles[circles.length - 1].uuid = circles.length -1;
                            cir_info[circles.length - 1].createFlag = true;
                            scene.add( circles[circles.length - 1] );
                            animCount++;
                        }
                    }
                }
            }
            //回転処理（全て所定の位置に移動し終わった場合回転処理無視）
            if(cir_info[0].radian <= cir_info[0].goalRadian){
                //一つずつ回転
                for(let animLoop = 0; animCount >= animLoop; animLoop++){
                    if(cir_info[animLoop].radian < cir_info[animLoop].goalRadian){
                        cir_info[animLoop].radian += (cir_info[animLoop].goalRadian - cir_info[animLoop].radian) / 40;
                        circles[animLoop].position.x = distanceFromCenter * Math.cos(cir_info[animLoop].radian);
                        circles[animLoop].position.y = distanceFromCenter * Math.sin(cir_info[animLoop].radian);
                    }
                }
                if(cir_info[0].radian >= cir_info[0].goalRadian - 0.004){
                    openingAnim = false;
                }
            }
            if(cir_info[0].radian >= cir_info[0].goalRadian - 0.1){
                for(let animLoop = 0; perticleNum > animLoop; animLoop++){
                    if(cir_info[animLoop].stopFlag == false && cir_info[animLoop].backFlag == false){
                        cir_info[animLoop].radian += 0.001;
                        circles[animLoop].position.x = distanceFromCenter * Math.cos(cir_info[animLoop].radian);
                        circles[animLoop].position.y = distanceFromCenter * Math.sin(cir_info[animLoop].radian);
                    }else if(cir_info[animLoop].stopFlag == true && cir_info[animLoop].backFlag == false){
                        cir_info[animLoop].stopRadian += 0.001;
                    }else if(cir_info[animLoop].stopFlag == false && cir_info[animLoop].backFlag == true){
                        square.scale.x += (0 - square.scale.x) / 2;
                        cir_info[animLoop].stopRadian += 0.001;
                        cir_info[animLoop].radian += (cir_info[animLoop].stopRadian - cir_info[animLoop].radian) / 30;
                        circles[animLoop].position.x = distanceFromCenter * Math.cos(cir_info[animLoop].radian);
                        circles[animLoop].position.y = distanceFromCenter * Math.sin(cir_info[animLoop].radian);
                        if(cir_info[animLoop].radian >= cir_info[animLoop].stopRadian - 0.1 && square.scale.x < 0.0000001){
                            cir_info[animLoop].backFlag = false;
                        }
                    }
                }
                conceptDeray--;
                if(conceptDeray === 0){
                    conceptDeray = 5;
                    if(recentCount.stopFlag === true){
                        if(recentCount.underFlag === false){
                            recentCount.underLoop--;
                            if(recentCount.underLoop === 0) {
                                document.getElementById('concept-third').innerHTML += '|';
                                recentCount.underFlag = true;
                                recentCount.underLoop = 5;
                            }
                        }else{
                            recentCount.underLoop--;
                            if(recentCount.underLoop === 0) {
                                document.getElementById('concept-third').innerHTML = backStack;
                                recentCount.underFlag = false;
                                recentCount.underLoop = 5;
                            }
                        }
                        recentCount.underCount--;
                        if(recentCount.underCount === 0){
                            recentCount.stopFlag = false;
                            recentCount.underCount = 40;
                        }
                    }else{
                        conceptAnim();
                    }
                }
            }
        }

        renderer.render(scene, camera);
    }

    function conceptAnim(){
        if(Flag == true){
            if(recentCount.paragraph == 0){
                document.getElementById('concept-first').innerHTML = conceptStack[0];
                if(conceptStack[0] == ''){
                    document.getElementById('concept-first').style.paddingTop = '100px';
                }else{
                    document.getElementById('concept-first').style.paddingTop = '0px';
                }
            }else if(recentCount.paragraph == 1){
                document.getElementById('concept-second').innerHTML = conceptStack[1];

                if(conceptStack[1] == ''){
                    document.getElementById('concept-second').style.paddingTop = '100px';
                }else{
                    document.getElementById('concept-second').style.paddingTop = '0px';
                }
            }else{
                document.getElementById('concept-third').innerHTML = conceptStack[2];
            }
        }
        if(conceptText[recentCount.paragraph][recentCount.num][recentCount.stack] == '/'){
            recentCount.stack++;
            if(conceptText[recentCount.paragraph][recentCount.num][recentCount.stack] == 'n'){
                recentCount.paragraph++;
                recentCount.stack = 0;
            }else if(conceptText[recentCount.paragraph][recentCount.num][recentCount.stack] == 'e'){
                recentCount.paragraph = 0;
                backStack = conceptStack[2];
                conceptStack[0] = '';
                conceptStack[1] = '';
                conceptStack[2] = '';
                recentCount.stopFlag = true;
                if(recentCount.num == 2){
                    recentCount.num = 0;
                }else{
                    recentCount.num++;
                }
                recentCount.stack = 0;
            }else{
                // console.log('被'+Number(conceptText[recentCount.paragraph][recentCount.num][recentCount.stack]));
                loopNum = conceptStack[recentCount.paragraph].length - Number(conceptText[recentCount.paragraph][recentCount.num][recentCount.stack]);
                // console.log(loopNum);
                tmpConcept = conceptStack[recentCount.paragraph];
                // console.log(tmpConcept[]);
                conceptStack[recentCount.paragraph] = '';
                for(let stackLoop = 0; loopNum > stackLoop; stackLoop++){
                    conceptStack[recentCount.paragraph] += tmpConcept[stackLoop];
                }
                recentCount.stack++;
            }
        }else{
            Flag = true;
            // console.log('前' + conceptStack[recentCount.paragraph]);
            conceptStack[recentCount.paragraph] += conceptText[recentCount.paragraph][recentCount.num][recentCount.stack];
            // console.log('後' + conceptStack[recentCount.paragraph]);
            recentCount.stack++;
        }
    }

    window.addEventListener('resize', function(){
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }, false);

    document.getElementById('index-wrapper').appendChild(renderer.domElement);
    console.log(window.innerHeight);
    renderScene();
};
