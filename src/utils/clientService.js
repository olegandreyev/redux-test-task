
const users = [
    {
        id:1,
        firstName:'Vanya',
        lastName:'Balden',
        age:'21',
        avatar:'http://www.africahealthcaresummit.com/wp-content/uploads/2016/05/avatar-placeholder-generic.png',
        avatarSize:50,
        address:'Odessa Ukraine',
        contactInfo:{
            email:'vanyad.adnreyev@do-it.co',
            phone:'555-55-5',
            site:'www.do-it.co',
            additionalInfo:'blablablablalblablalbal'
        },
        job:{
            title:'Full-stack JavaScript developer',
            company:'Do-It programming solution'
        }
    },
    {
        id:2,
        firstName:'Oleg',
        lastName:'Andreyev',
        age:'24',
        avatar:'http://www.africahealthcaresummit.com/wp-content/uploads/2016/05/avatar-placeholder-generic.png',
        avatarSize:50,
        address:'Baker st. 12th London UK',
        contactInfo:{
            email:'oleg.adnreyev@do-it.co',
            phone:'555-55-5',
            site:'www.do-it.co',
            additionalInfo:'blablablablalblablalbal'
        },
        job:{
            title:'Full-stack JavaScript developer',
            company:'Do-It programming solution'
        }
    },
    {
        id:3,
        firstName:'James',
        lastName:'Kent',
        age:'36',
        avatar:'http://www.africahealthcaresummit.com/wp-content/uploads/2016/05/avatar-placeholder-generic.png',
        avatarSize:50,
        address:'Baker st. 12th London UK',
        contactInfo:{
            email:'james.adnreyev@do-it.co',
            phone:'555-55-5',
            site:'www.do-it.co',
            additionalInfo:'blablablablalblablalbal'
        },
        job:{
            title:'Designer',
            company:'Design production union'
        }
    },
    {
        id:4,
        firstName:'Marshal',
        lastName:'Maters',
        age:'31',
        avatar:'http://www.africahealthcaresummit.com/wp-content/uploads/2016/05/avatar-placeholder-generic.png',
        avatarSize:50,
        address:'Baker st. 12th London UK',
        contactInfo:{
            email:'margshal.adnreyev@do-it.co',
            phone:'555-55-5',
            site:'www.do-it.co',
            additionalInfo:'blablablablalblablalbal'
        },
        job:{
            title:'CEO',
            company:'Do-It programming solution'
        }
    }
];

const clientService = {
    getAllClients(){
        return new Promise((res, rej)=>{
            setTimeout(()=>{
                res(users)
            },1000)
        })
    }
};

export default clientService;