import React, {useState} from 'react'
import { motion } from 'framer-motion'
import { Button, FormControl, Input, TextField, Typography } from '@mui/material';

export default function ComingSoon() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      // Here you'd typically send the email to your backend or email service
      console.log('Signed up:', email);
    };
  
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.3,
        },
      },
    };
  
    const itemVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    };
  
    return (
      <motion.div
        className="coming-soon-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants}><Typography variant='h1'>Coming Soon</Typography></motion.h1>
        <motion.p variants={itemVariants}>
          <Typography variant='h6'>Sign up to get notified when we launch</Typography>
        </motion.p>
  
        <motion.form onSubmit={handleSubmit}>
            <motion.div style={{margin: '20px 0px'}} variants={itemVariants}>
                <TextField size='small' label='Email' />
            </motion.div>
            <motion.div variants={itemVariants}>
                <Button type="submit" variant='contained'>Sign up</Button>
            </motion.div>
        </motion.form>
  
        {/* Cool Animation Placeholder */}
        <motion.div className="cool-animation" animate={{ rotate: 360 }} transition={{ duration: 5, loop: Infinity }}></motion.div>
      </motion.div>
    );
}
