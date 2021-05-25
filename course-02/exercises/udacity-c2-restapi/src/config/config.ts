// export const config = {
//     'dev': {
//         'username': 'udagramkhaliddev',
//         'password': 'umairudacity',
//         'database': 'udagramkhaliddev',
//         'host': 'udagramkhaliddev.cynoiyzyxdbi.us-east-1.rds.amazonaws.com',
//         'dialect': 'postgres',
//         'aws_region': 'us-east-1',
//         'aws_profile': 'Udacity:Udagram-Khalid-Dev',
//         'aws_media_bucket': 'udagram-khalid-dev'
//     },
//     'prod': {
//         'username': '',
//         'password': '',
//         'database': 'udagram_prod',
//         'host': '',
//         'dialect': 'postgres'
//     }
// };


export const config = {
    'postgres': {
        'username': process.env.POSTGRES_USERNAME,
        'password': process.env.POSTGRES_PASSWORD,
        'database': process.env.POSTGRES_DATABASE,
        'host': process.env.POSTGRES_HOST,
        'dialect': 'postgres'
    },
    'aws': {
        'aws_region': process.env.AWS_REGION,
        'aws_profile': process.env.AWS_PROFILE,
        'aws_media_bucket': process.env.AWS_MEDIA_BUCKET
    },
    'jwt': {
        'secret': 'helloworld'
    }
};
