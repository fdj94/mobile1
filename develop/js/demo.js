function setRem(){
	document.documentElement.style.fontSize = innerWidth / 20 + "px";
}
setRem();
onresize = setRem;

var down = document.querySelector(".down"),
	more = document.querySelector(".more"),
	navColor = document.querySelectorAll(".nav li"),
	lenNav = navColor.length;
more.addEventListener("touchend",function(){
	down.classList.toggle("none");
});
for(var i = 0; i < lenNav; i++){
	navColor[i].addEventListener("touchend",function(){
		for(var j = 0;  j < lenNav; j++){
			navColor[j].classList.remove("color");
		}
		this.classList.add("color");
	});
}

var arr = [
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/673428579_150120/0',
        title1 : '曝孙杨已有私生子 前女友独立将孩子抚养至2岁',
        title2 : '近日，全明星探接到孙杨前女友李莹念身边知情人爆...',
        num : '4608'
    },
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/674330668_200160/0',
        title1 : '火箭vs鹈鹕精彩视频：哈登杂耍运球送妙传 悍将神奇补扣',
        title2 : '',
        num : '18'
    },
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/673544709_150120/0',
        title1 : '揭秘孙杨绯闻“孩子他妈” 否认是小三并已相识6年',
        title2 : '北京时间10月12日消息，据全明星探报道，运动...',
        num : '319'
    },
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/674157945_150120/0',
        title1 : '曝孙杨前女友独自携子过中秋 住破旧小区',
        title2 : '',
        num : '69'
    },
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/673056424_150120/0',
        title1 : '进世界杯获1.5亿巨奖？国足贴心 4战0胜为足协省1200万',
        title2 : '',
        icon : 'http://mat1.gtimg.com/www/mobi/image/flagicon.png',
        num : '2094'
    },
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/674310199_150120/0',
        title1 : '孙继海：高洪波辞职做法不男人 他需要一颗大心脏',
        title2 : '',
        icon : 'http://mat1.gtimg.com/www/mobi/image/flagicon.png',
        num : '292'
    },
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/674091538_150120/0',
        title1 : '皇马官方宣布续约克罗斯到2022 年薪2000万欧',
        title2 : '腾讯体育10月12日讯皇马(数据)官方网站正式...',
        icon : 'http://mat1.gtimg.com/www/mobi/image/flagicon.png',
        num : '308'
    },
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/674139656_150120/0',
        title1 : '亚冠杯-新疆小组赛末战64分狂胜头名晋级8强 将战卡塔尔劲旅',
        title2 : '新疆小组赛全胜晋级八强腾讯体育10月12日20...',
        icon : 'http://mat1.gtimg.com/www/mobi/image/flagicon.png',
        num : '339'
    },
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/674383788_150120/0',
        title1 : '火箭400万神人救了哈登 让他从背锅侠变MVP',
        title2 : '今夏德帅把四阵哈登重新拉回到MVP争夺行列中的...',
        icon : 'http://mat1.gtimg.com/www/mobi/image/flagicon.png',
        num : '7'
    },
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/672437426_150120/0',
        title1 : 'NBA季前赛13日前瞻：马刺对战魔术 掘金悍将再砍两双？',
        title2 : '腾讯体育10月12日讯北京时间10月13日，N...',
        icon : 'http://mat1.gtimg.com/www/mobi/image/flagicon.png',
        num : '2'
    },
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/671522562_150120/0',
        title1 : '冰球盛宴来袭！腾讯全程独家网络视频直播新赛季NHL',
        title2 : '冰球盛宴来袭！腾讯全程视频直播新赛季NHL。',
        icon : 'http://mat1.gtimg.com/www/mobi/image/flagicon.png',
        num : '13'
    },
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/673292094_150120/0',
        title1 : '速度比博尔特快+颜值比小贝高！这项比赛必须要看',
        title2 : '',
        icon : 'http://mat1.gtimg.com/www/mobi/image/flagicon.png',
        num : '16'
    },
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/673730423_150120/0',
        title1 : '孙杨事件引发热议 网友力挺愿其不受流言影响',
        title2 : '据《全明星直播》爆料，孙杨与前女友李莹念有私生...',
        icon : 'http://mat1.gtimg.com/www/mobi/image/flagicon.png',
        num : '240'
    },
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/674299982_150120/0',
        title1 : '孙杨私生子疑点重重：为何两年才曝光 不符孙母风格',
        title2 : '近日，全明星探接到孙杨前女友李莹念身边知情人爆...',
        icon : 'http://mat1.gtimg.com/www/mobi/image/flagicon.png',
        num : '17'
    },
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/673792444_150120/0',
        title1 : '星探连线孙杨前女友遭粗暴拒绝 男子代接不置可否',
        title2 : '全明星直播电话联络孙杨前女友李莹念，一位女士听...',
        icon : 'http://mat1.gtimg.com/www/mobi/image/flagicon.png',
        num : '185'
    },
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/674551589_150120/0',
        title1 : '英格兰赛丁俊晖连赢四局 4-0零封梅希文晋级',
        title2 : '腾讯体育10月13日凌晨，2016/2017赛...',
        icon : 'http://mat1.gtimg.com/www/mobi/image/flagicon.png',
        num : '10'
    },
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/674145252_150120/0',
        title1 : '纳达尔：赛季基本已结束 我知道该如何找回胜利',
        title2 : '近日，全明星探接到孙杨前女友李莹念身边知情人爆...',
        icon : 'http://mat1.gtimg.com/www/mobi/image/flagicon.png',
        num : '555'
    },
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/673097688_150120/0',
        title1 : '曝孙杨已有私生子 前女友独立将孩子抚养至2岁',
        title2 : '近日，全明星探接到孙杨前女友李莹念身边知情人爆...',
        icon : 'http://mat1.gtimg.com/www/mobi/image/flagicon.png',
        num : '333'
    },
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/673428579_150120/0',
        title1 : '火箭400万神人救了哈登 让他从背锅侠变MVP',
        title2 : '今夏德帅把四阵哈登重新拉回到MVP争夺行列中的...',
        icon : 'http://mat1.gtimg.com/www/mobi/image/flagicon.png',
        num : '522'
    },
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/674319713_150120/0',
        title1 : '冰球盛宴来袭！腾讯全程独家网络视频直播新赛季NHL',
        title2 : '冰球盛宴来袭！腾讯全程视频直播新赛季NHL。',
        icon : 'http://mat1.gtimg.com/www/mobi/image/flagicon.png',
        num : '666'
    }
];
var list = document.querySelector(".list ul"),
	m = 0;
arr.forEach(function(item){
    add(item);
});
function add(option){
	var li = document.createElement("li"),
		src = option.src,
		title1 = option.title1,
		title2 = option.title2,
		num = option.num;
	var th = document.createElement("div");
	th.classList.add("th");
	img = document.createElement("img");
	img.setAttribute("src",src);
	th.appendChild(img);
	li.appendChild(th);
	var h2 = document.createElement("h2");
	h2.innerText = title1;
	li.appendChild(h2);
	var p = document.createElement("p"),
	    span = document.createElement("span"),
	    flag = document.createElement("i"),
	    com = document.createElement("i");
	p.innerText = title2;
	span.classList.add("count");
	com.innerText = num;
	flag.classList.add("flag");
	flag.classList.add("flag"+ (++m));
	span.appendChild(flag);
	span.appendChild(com);
	p.appendChild(span);
	li.appendChild(p);
	list.appendChild(li);
}

var click = document.querySelector(".click");
	click.addEventListener("touchstart", function(){
		click.innerText = "加载中...";
		var timer = setTimeout(function(){
			clearTimeout(timer);
			click.innerText = "点击查看更多";
		}, 3000);
	});



var footer = document.querySelector("footer"),
	end = document.querySelector(".end");
	end.addEventListener("touchend", function(){
		footer.classList.add("none");
	});