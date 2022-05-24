const db = require("./db");
// const { Sequelize } = require('sequelize');






// uuid_in varchar(244),name_in varchar(244),
//     surname_in varchar(244),
//     date_of_birth_in varchar(233),gender_in int,email_in varchar(244),address_in varchar(244),street_in varchar(244),housenumber_in varchar(244),addition_in varchar (244),postcode_in varchar(244),city_in varchar (244),create_by_lab_in int, created_by_user_in int



async function register(uuid,username,email,password){

    let result = await db
        .query('CALL register (:uuid,:username,:email,:password)',
            {replacements: { uuid: uuid,
                    username:username,
                    email:email,
                    password:password
                }})
    return result[0];

}


async function loginApp(email,password){
  console.log(email)
    let result = await db
        .query('CALL login(:email,:password)',
            {replacements: {
                    email:email,
                    password:password
                }})
    return result[0];

}


async function addMessages(uuid,description){

    let result = await db
        .query('CALL add_messages_user (:uuid,:description)',
            {replacements: {
                    uuid:uuid,
                    description:description
                }})
    return result[0];

}



async function getMessages(uuid){

    let result = await db
        .query('CALL get_messages (:uuid)',
            {replacements: {
                    uuid:uuid
                }})
    return result;

}






module.exports = {
    register,
    loginApp,
    addMessages,
    getMessages

};


