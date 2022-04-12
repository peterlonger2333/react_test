// import entire SDK
var AWS = require('aws-sdk');
// import AWS object without services
//var AWS = require('aws-sdk/global');
// import individual service
var S3 = require('aws-sdk/clients/s3');
const ID = 'AKIAZEIS6SKBWL4GVBRP';
const SECRET = '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';

// The name of the bucket that you have created
const BUCKET_NAME = 'amplify-reactamplified-dev-180456-deployment1';
const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});
const params = {
    Bucket: BUCKET_NAME,
    CreateBucketConfiguration: {
        // Set your region here
        LocationConstraint: "ap-northeast-1"
    }
};

s3.createBucket(params, function(err, data) {
    if (err) console.log(err, err.stack);
    else console.log('Bucket Created Successfully', data.Location);
});

const fs = require('fs');
const uploadFile = (fileName) => {
    // Read content from the file
    const fileContent = fs.readFileSync(fileName);
    // Setting up S3 upload parameters
    const params = {
        Bucket: BUCKET_NAME,
        Key: fileName, // File name you want to save as in S3
        Body: fileContent
    };

    // Uploading files to the bucket
    s3.getSignedUrl('getObject',params, function(err) {
        if (err) {
            throw err;
        }
        console.log('File uploaded successfully. The URL is', url);
    });
};

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
