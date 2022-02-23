import React from 'react';
import { motion } from 'framer-motion';

function MotionWrap<T>(Component: React.ComponentType<T>, classNames?: string) {
    return function HOC(hocProps: T) {
        return (
            <motion.div
                whileInView={{ opacity: [0, 0, 1], y: [100, 50, 0] }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className={`${classNames} app__flex`}
            >
                <Component {...hocProps} />
            </motion.div>
        );
    };
}

export default MotionWrap;
