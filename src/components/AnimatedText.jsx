import {motion} from 'framer-motion';

const AnimatedText =({text}) => {
    const letters=Array.from(text);

    const container={
        hidden:{opacity: 0},
        visible: (i=1) => ({
            opacity: 1,
            transition: {staggerChildren: 0.04, delayChildren: 0.04*i},
        }),
    };
    const child={
        hidden: {
            opacity: 0,
            y:`0.25em`,
        },
        visible: {
            opacity: 1,
            y: `0em`,
            transition: {
                duration: 0.5,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        },
    };
    return (
        <motion.div
          style={{display: 'flex',flexWrap: 'wrap'}}
          variants={container}
          initial="hidden"
          animate="visible"
          >
            {letters.map((char, index)=>(
                <motion.span
                  key={index}
                  variants={child}
                  style={{
                    display: 'inline-block',
                    whiteSpace: 'pre',
                    marginRight: char === ' '? '0.25em' : '0px',
                  }}
                >
                    {char}
                </motion.span>
            ))}
          </motion.div>
    );
};
export default AnimatedText;