//fetch的使用样例(代替ajax)

fetch(url, options)
    .then(response => console.log(response)/*对返回对象做些什么*/)
    .catch(err => console.log(err)/*错误处理*/);

/*options*/
options =
{
    method: "POST",
    headers:{},
    body: JSON.stringify({})
};
