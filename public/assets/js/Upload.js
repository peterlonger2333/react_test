function upload()
{
    var up_file = $('#form-files').files[0];//找到id为file的组件，当然这里是input组件
    var description = $('#description');
    var makerName = $('#makerName')
    var artName = $('#artName')
    var time = $('#time')
    var formData = new FormData();//新建一个formdata用于存储数据
    formData.append("up_file",up_file);//将选择的文件添加到formdata中
    formData.append("description",description);
    formData.append("makerName",makerName);
    formData.append("artName",artName);
    formData.append("time",time);
    // $("#upload").html(target)
    $.ajax
    ({
        url:'http://127.0.0.1:5000/upload',
        dataType:'json',
        type:'POST',
        async: true,
        data: formData,
        processData : false, // 使数据不做处理
        contentType : false, // 不要设置Content-Type请求头
        success: function(data) {
            var params = JSON.parse(data)
            $("#img").attr("src", params);
        },
    });
}