const AWS = require('aws-sdk');
const httpStatus = require('http-status-codes');

const BUCKET_NAME = 'repoarchtesis';
const IAM_USER_KEY = 'AKIATYJMBWNABBF3BJZC';
const IAM_USER_SECRET = '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';

exports.uploadToS3 = async function(file, response){
    //console.log('FILE: ', file);
    //return;
    let s3bucket = new AWS.S3({
        accessKeyId: IAM_USER_KEY,
        secretAccessKey: IAM_USER_SECRET,
        Bucket: BUCKET_NAME
    });
    await s3bucket.createBucket(async function () {
        console.log('createBucket Inicio');
        var params = {
            Bucket: BUCKET_NAME,
            Key: file.name,
            Body: file.data
        };
        console.log('createBucket Fin');
        await s3bucket.upload(params, async function (err, data) {
            console.log('Upload File start');
            if (err) {
                console.log('error in callback');
                console.log(err);
                return response.status(httpStatus.OK).json({message: 'OK', payload: null});
            }
            console.log('success');
            console.log(data);
            return response.status(httpStatus.OK).json({message: 'OK', payload: data.Location});
        });
        // console.log("response -> s3", response);
        // return response;

    });
}