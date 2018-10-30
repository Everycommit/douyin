import Mock from 'mockjs';

let homeData={
    "id":'0',
    "tit":"@遗产经典语录",
    "txt":"在核实的时间遇到核实得人是一种幸福。@痘印小猪手#情感语录#遗产小和尚",
    "bgc":"@遗产经典语录创作的原生",
    "pic":"",
    "like":5,
    "msg":[
        {
            "icon":"",
            "name":"小明",
            "txt":"我爱泰勒",
            "date":"2018-8-10 16:01",
            "dianzan":"123"
        },{
            "icon":"",
            "name":"小猴",
            "txt":"Taylor is my favorite",
            "date":"2018-8-07 8:05",
            "dianzan":"123"
        },{
            "icon":"",
            "name":"小红",
            "txt":"嘿 霉霉",
            "date":"2018-5-10 10:00",
            "dianzan":"123"
        },{
            "icon":"",
            "name":"小张",
            "txt":"Taylor Swift",
            "date":"2018-1-9 12:22",
            "dianzan":"123"
        },{
            "icon":"",
            "name":"小白",
            "txt":"Country singer Taylor",
            "date":"2017-8-22 22:10",
            "dianzan":"123"
        },{
            "icon":"",
            "name":"小王",
            "txt":"you are very pretty",
            "date":"2017-4-14 23:25",
            "dianzan":"123"
        },{
            "icon":"",
            "name":"小李",
            "txt":"I am your fan",
            "date":"2017-4-14 13:55",
            "dianzan":"123"
        }
    ],
    "transpond":""
}
Mock.mock('/home',(res)=>{
    return homeData
})
export default Mock;