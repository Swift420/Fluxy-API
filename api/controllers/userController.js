import User from "../models/User";

export const getAllUsers = async(req,res,next)=> {
    let users;
    try {
        users = await User.find()
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }

    if(!users) {
        return res.status(404).json({
            message: "no users found"
        })
    }

    return res.status(200).json({users})
}

export const getUserById = async(req,res,next) => {

    const {email}  = req.body;
    
    try {
        const user = await User.findOne({email})

        if(!user) {
             return res.status(404).json({
            message: "no users found"
        })
        }
        res.status(200).json({user})

    } catch (error) {
        return res.status(500).json({ error: error });
    }

}



export const signUp = async(req,res,next) => {

    const { name,email, password}  = req.body;

    let existingUser 
    try {
         
        existingUser = await User.findOne({email})

    } catch (error) {
        return res.status(500).json({ error: 'Server error' });
    }


        if(existingUser) {
            return res.status(500).json({ error: 'User Already Exists' });
        } 

        const user = new User({
        name,
       
        email,
         password
        });

        console.log(user)

        try {
            await user.save()
        } catch (error) {
            return res.status(400).json({ error: error });
            
        }
        
            return res.status(200).json({user});

}
