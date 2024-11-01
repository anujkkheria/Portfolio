import { TextField, Button, IconButton, Tooltip } from '@mui/material'
import { motion } from 'framer-motion'
import EmailIcon from '@mui/icons-material/Email'
import PersonIcon from '@mui/icons-material/Person'
import MessageIcon from '@mui/icons-material/Message'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'

const ContactForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className='min-h-screen flex items-center justify-center bg-white p-6'
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className='w-full max-w-md'
      >
        <div className='text-center mb-8'>
          <h2 className='text-3xl font-bold text-gray-800'>Get in Touch</h2>
          <p className='text-gray-600 mt-2'>Thank You for you visit</p>
        </div>

        <motion.form className='bg-white rounded-xl shadow-lg p-8 space-y-6'>
          <div className='relative'>
            <PersonIcon
              sx={{ position: 'absolute', left: 8, top: 16, color: 'gray' }}
            />
            <TextField
              fullWidth
              label='Name'
              variant='outlined'
              sx={{ ...textFieldStyle, '& input': { pl: 4 } }}
            />
          </div>

          <div className='relative'>
            <EmailIcon
              sx={{ position: 'absolute', left: 8, top: 16, color: 'gray' }}
            />
            <TextField
              fullWidth
              type='email'
              label='Email'
              variant='outlined'
              sx={{ ...textFieldStyle, '& input': { pl: 4 } }}
            />
          </div>

          <div className='relative'>
            <MessageIcon
              sx={{ position: 'absolute', left: 8, top: 16, color: 'gray' }}
            />
            <TextField
              fullWidth
              label='Message'
              multiline
              rows={6}
              variant='outlined'
              sx={{
                ...textFieldStyle,
                '& .MuiOutlinedInput-root': {
                  height: '200px',
                  '& textarea': {
                    height: '100% !important',
                    paddingLeft: '40px',
                  },
                },
              }}
            />
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant='contained'
              fullWidth
              sx={{
                py: 2,
                mt: 2,
                bgcolor: 'rgb(59, 130, 246)',
                '&:hover': {
                  bgcolor: 'rgb(29, 78, 216)',
                },
              }}
            >
              Send Message
            </Button>
          </motion.div>

          {/* Social Links */}
          <div className='pt-6 border-t'>
            <p className='text-center text-gray-600 mb-4'>
              Or connect with me on:
            </p>
            <div className='flex justify-center space-x-4'>
              <SocialIcon
                icon={<LinkedInIcon />}
                label='LinkedIn'
                href='https://linkedin.com/in/anuj-kumar-kheria'
                color='#0077b5'
              />
              <SocialIcon
                icon={<GitHubIcon />}
                label='GitHub'
                href='https://github.com/anujkkheria'
                color='#333'
              />
              <SocialIcon
                icon={<TwitterIcon />}
                label='Twitter'
                href='https://twitter.com'
                color='#1da1f2'
              />
            </div>
          </div>
        </motion.form>
      </motion.div>
    </motion.div>
  )
}

// Social Icon Component
const SocialIcon = ({
  icon,
  label,
  href,
  color,
}: {
  icon: React.ReactNode
  label: string
  href: string
  color: string
}) => (
  <Tooltip title={label}>
    <motion.div whileHover={{ y: -3 }}>
      <IconButton
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        sx={{
          '&:hover': {
            bgcolor: `${color}15`,
            color: color,
          },
        }}
      >
        {icon}
      </IconButton>
    </motion.div>
  </Tooltip>
)

// Shared styles for TextField components
const textFieldStyle = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(0, 0, 0, 0.2)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(0, 0, 0, 0.3)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rgb(59, 130, 246)',
    },
  },
  '& .MuiInputLabel-root': {
    marginLeft: '30px',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'rgb(59, 130, 246)',
    marginLeft: '14px',
  },
  '& .MuiOutlinedInput-input': {
    paddingLeft: '40px',
  },
}

export default ContactForm
