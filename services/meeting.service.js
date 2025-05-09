const { meeting } = require("../models/meeting.model");
const { meetingUser } = require("../models/meeting-user.model");


async function getAllMeetingUsers(meetId, callback)
{
    await meetingUser.find({meetingId: meetId})
    .then( (response) => {
        return callback(null, response);
    })
    .catch((error)=> {
        return callback(error);
    })
}




async function startMeeting(params, callback)
{
    const meetingSchema = new meeting(params);

    meetingSchema
    .save()
    .then( (response) => {
        return callback(null, response);
    })
    .catch((error)=> {
        return callback(error);
    })
}




async function joinMeeting(params, callback)
{
    const meetingUserModel = new meetingUser(params);

    meetingUserModel
    .save()
    .then (async (response) => {
            await meeting.findOneAndUpdate(
                { 
                    id: params.meetingId
                },
                {
                    $addToSet: {
                        "meetingUsers": meetingUserModel
                    }
                }
            )
            return callback(null, response);
    })
    .catch( (error) => {
        return callback(error);
    })
}