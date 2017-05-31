
			var oVm = document.getElementById('vidio_mac');
			var oPic = oVm.getElementsByTagName('img');
			var timer 	= null;
				var now 	= 0;
// 调用函数区域
			move_words()
			// show()
			tab_nav()
			modal()
			// media()
// 字体飞入效果
			function move_words() {
				var oWords =document.getElementById('move_words');

				move(oWords,{'left':0,'top':0,'width':724,'height':147},{duration:300})
			};

			// function media(){
			// 	var oM_v= document.getElementById('m_player');
			// 	clearInterval(timer)
			// 	timer = setTimeout(function(){
			// 		// oM_v.style.display = 'none'
			// 		move(oM_v,{'opacity':0})
			// 	},10000);
			// };
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

//选项卡效果
			function tab_nav(){
				var oBd 	= document.getElementById('bd');
				var oHeadparent = document.getElementById('tab_nav');
				var aHead 	= document.getElementById('tab_nav').children;
				var oHeadp	= document.getElementById('tab_piont').getElementsByTagName('li');
				var oBody 	= document.getElementById('tab_banner').children[0];
				var aBodyw 	= document.getElementById('tab_words').children;
				// alert(oBodyw.length)

				for (var i = 0; i < aHead.length; i++) {
					(function(index){
						aHead[i].onclick= function(){
							tab_tab(index)
						};
						oHeadp[i].onclick= function(){
							tab_tab(index)
						};

					})(i)
				};
				setTimeNav()
		//定时播放
				function setTimeNav(){
					timer=setInterval(function(){
						now ++;
						if (now>2) {
							now=0;
						};
						tab_tab(now)

					},3000);
				};
		// 播放封装
				function tab_tab(index){
					clearInterval(timer);
					for (var j = 0; j < aHead.length; j++) {
						aHead[j].className='cur';
						oHeadp[j].className='p';
						// aBodyw[j].style.opacity=0;
						aBodyw[j].style.opacity=0;
						aBodyw[j].style.filter= "alpha(opacity:0)";
					}
					oHeadp[index].className='p active';
					aHead[index].className='cur n'+(index+1);
					// oBody.style.left = -766*index+'px';
					move(oBody,{'left':-766*index});
					aBodyw[index].style.opacity=1;
					aBodyw[index].style.filter= "alpha(opacity:100)";
					// move(aBodyw[index],{'opacity':1})
				};
		//鼠标进入清除定时器
				oHeadparent.onmouseover=oHeadp[0].parentNode.onmouseover=oBody.onmouseover=function(){
					clearInterval(timer);
				};
		//鼠标移除重启定时器
				oHeadparent.onmouseout=oHeadp[0].parentNode.onmouseout=oBody.onmouseout=function(){

					setTimeNav()
					// alert('离开了')

				};


			};


//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// 模态框 组件

			function modal(){
				var oM = document.getElementById('modal');

				var oV_btn = document.getElementById('video_btn');
				var oBtn1 = document.getElementById('d_btn1');
				var oBtn2 = document.getElementById('d_btn2');
				var oShadow = document.getElementById('shadow');

				// var oM_v= document.getElementById('m_player');   //视频id

				var oM_video = document.getElementById('modal_v');
				var oM_v_close = document.getElementById('close_v');

				var oM_form = document.getElementById('modal_f');
				var oM_f_close = document.getElementById('close_f');




//  to open 
				oV_btn.onclick = function(ev){
					// var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;

					// oM.style.top = scrollTop - 195  + 'px';
					oM.style.display = 'block';
					oShadow.style.height = '2492px';
					oM_video.style.display = 'block';
				};

				oBtn1.onclick = oBtn2.onclick = function(){
					// var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
					// oM_v.style.display = 'none';  //视频隐藏
					oShadow.style.height = '2492px';
					oM.style.display = 'block'; 
					// oM.style.top = scrollTop - 195  + 'px';
					oM_form.style.display = 'block';


				};

//  to close 
				oM_v_close.onclick = function(){
					oShadow.style.height = '0px';
					oM_video.style.display = 'none';
				};
				oM_f_close.onclick = function(){
					oShadow.style.height = '0px';
					oM_form.style.display = 'none';
				};

				return false;
			};

			

