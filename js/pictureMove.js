
var div=document.getElementById('pic_left');
//找到图片的最大索引
var n = div.getElementsByTagName("img").length-1;
//存当前图片的索引
var d =0;

var pic_text=document.getElementById('pic_text');
var pic_name=new Array("女王","爱人","战争","死亡");
//换图
function Huan()
{
    //找到所有图片
    var attr = div.getElementsByTagName("img");
    
    //当前索引加1
    d++;
    
    //判断索引是否超出范围
    if(d>n)
    {
        d = 0;
    }
    
    //换图
    //让所有隐藏
    for(var i=0;i<=n;i++)
    {
        attr[i].style.display = "none";
    }
    
    //让该索引的显示
    attr[d].style.display = "block";
    
    pic_text.innerHTML=pic_name[d];
}    
