import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import "./notification.css";

const Notification = ({ text, setNotif }: { text: string; setNotif: Function }) => {
    useEffect(() => {
        setTimeout(() => {
            setNotif("");
        }, 2000);
    }, [text]);

    return (
        <AnimatePresence>
            {text && (
                <motion.div exit={{ y: -80 }} initial={{ y: -80 }} animate={{ y: 0 }} className="notif">
                    <div>{text}</div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Notification;
