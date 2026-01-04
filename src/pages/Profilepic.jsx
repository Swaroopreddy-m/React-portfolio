import { motion } from "framer-motion";
import profile_pic from '../assets/profile_pic.jpg';

function Profilepic(){
return (

    <div className="picture">
        <motion.img
            src={profile_pic}
            alt="Profile"
            className="profile-pic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
        />

    
    </div>
);
}

export default Profilepic;