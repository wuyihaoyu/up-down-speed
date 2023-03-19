$(document).ready(function(){

    if(window.location.href.indexOf("bilibili.com/video") > -1){
        $("body").append(`<div style='position:fixed;top: 500px;left: 10px;z-index:10000'>
        <input id='inputbox' style='display:inline-block;width:50px;height:20px;border:3px solid blue;'></input>
        <button id='clickbox' style='width:30px;height:23px;background-color:red;'>确定</button>
        <div id='resume' style='width:87px;height:24.8px;background-color:red;line-height:24.8px;text-align:center;margin-top:5px'>恢复倍速</div>
        <div>`)

        document.querySelector("#resume").addEventListener("click",function(){
            const bilbilspeed2 =  localStorage.getItem("bilbilspeed")
            if(bilbilspeed2 && bilbilspeed2>0){
                document.querySelector("video").playbackRate=bilbilspeed2
               }
        })


        const bilbilspeed =  localStorage.getItem("bilbilspeed")
        if(bilbilspeed && bilbilspeed>0){
            document.querySelector("video").playbackRate=bilbilspeed
           }
    
        function clickButton(){

        const speed = Number(document.querySelector("#inputbox").value).toFixed(2)
        if(speed && speed >0){
               document.querySelector("video").playbackRate=speed
               document.querySelector("#inputbox").value=''
               localStorage.setItem("bilbilspeed",speed)
            }
        }
        document.querySelector("#clickbox").addEventListener("click", clickButton)

      console.log("脚本执行成功！")
    }else{
        console.log("没匹配到B站倍速按钮！")
        return
    }
   
})