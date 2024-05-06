import { asyncHandler } from "./asynchandler.js";
const registerUser = asyncHandler(async (req , res) => {
    res.status(200).jason({message : "ok"})
})
export {registerUser}