/**
 * Created by tzr4032369 on 2016/4/7.
 */

//根据遍历类型type，进行不同的遍历
var traverse = function (type) {
    //初始化遍历div节点列表
    var divList = [];
    //获取根节点div
    var root = document.getElementById("root");
    switch (type) {
        case 'pre':
            pre_traverse(root, divList);
            break;
        case 'in':
            in_traverse(root, divList);
            break;
        case 'post':
            post_traverse(root, divList);
            break;
        default:
    }
    //按照divList中div节点顺序，实现div背景色动画
    changeBgColor(divList);
};

//前序遍历
var pre_traverse = function (node, divList) {
    if(node){
        divList.push(node);
        pre_traverse(node.firstElementChild,divList);
        pre_traverse(node.lastElementChild,divList);
    }
};

//中序遍历
var in_traverse = function (node, divList) {
    if (node) {
        in_traverse(node.firstElementChild, divList);
        divList.push(node);
        in_traverse(node.lastElementChild, divList);
    }
};

//后序遍历
var post_traverse = function (node, divList) {
    if (node) {
        post_traverse(node.firstElementChild, divList);
        post_traverse(node.lastElementChild, divList);
        divList.push(node);
    }
};

//定义动画间隔缓冲器
var interval;

//div背景色动画实现
var changeBgColor = function (divList) {
    var length = divList.length, i = 0;
    //divList第一个div节点背景色变蓝
    divList[i++].style.backgroundColor = "blue";

    //获取动画时间间隔
    var timeInterval = document.getElementById('time').value;

    //每间隔一段时间，执行一次变色
    interval = setInterval(function () {
        if (i < length) {
            //当前节点背景色变回白色，下个节点背景色变蓝
            divList[i-1].style.backgroundColor = '#fff';
            divList[i++].style.backgroundColor = "blue";
        } else {
            //处理最后一个节点后取消interval，其背景色变回白色
            clearInterval(interval);
            divList[i-1].style.backgroundColor = '#fff';
        }
    }, timeInterval)
};