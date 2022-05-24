const { v4: uuid } = require("uuid");

const {register,loginApp,addMessages,getMessages} = require("./procedures");

const generateToken = require("./generate-token");





const registerUserApp = async (req, res, next) => {
    const {  username, email,password } = req.body;
    const uniqueId = uuid();
console.log(uniqueId, "sshshrseu")
    let registerApp = await register(uniqueId,username,email,password);


        return res.status(200).json({'message':'Registration Successful'});




}

const loginUserApp = async (req, res, next) => {
    console.log(req)
    const { email, password } = req.body;
console.log(req.body, "erdh")
    let loginAppp;
    try {
        loginAppp = await loginApp(email, password);
        console.log(loginAppp)
    }
    catch (e){
    console.log(e,"")
    }

    console.log(loginAppp,"smdaskdsaksdk")

    const THIRTY_DAYS = 60*60*24*30;
    if(loginAppp['state']=='NOK')
    {
        return res.status(400).json( loginAppp )
    }

    else {
        const token = generateToken(
            {
                uuid: loginAppp['uuid'],
                email: loginAppp['email'],
            },
            THIRTY_DAYS
        );

        return res.status(200).json({ response_flag:loginAppp['response_flag'],state: loginAppp['state'],token: token});

    }


}


const addMssagesUser = async (req, res, next) => {
    const { description } = req.body;

    let loginApp = await addMessages(req.userData.uuid, description);



        return res.status(200).json(loginApp);


}
const getMessagesUser = async (req, res, next) => {


    let loginApp = await getMessages(req.userData.uuid);



    return res.status(200).json(loginApp);


}




module.exports = {

    registerUserApp,
    loginUserApp,
    addMssagesUser,
    getMessagesUser

};
