'use client';
import { Typography, Grid, Box, Paper } from '@mui/material';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/contexts/usetranslation';

export default function FourthSection() {
  const { t } = useTranslation();
  return (
    <>
      <motion.div
        id="skills"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Typography align="center" variant="h1" fontWeight="bold" mb={5}>
          {t('skillsTitle')}
        </Typography>
        <Grid
          container
          m={'auto'}
          maxWidth={'1280px'}
          mb={{ xs: 6, sm: 11, md: 12 }}
          justifyContent="center"
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={5}
              sx={{
                backdropFilter: 'blur(8px)',
                margin: 4,
                borderRadius: 1,
              }}
            >
              <Typography fontWeight="bold" variant={'h1'} p={2}>
                {t('wordpress')}
              </Typography>

              <Box
                dir="ltr"
                gap={2}
                display="flex"
                pl={1}
                pt={4}
                pb={2}
                justifyContent="center"
                height={'200px'}
              >
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotateY: 0,
                    transition: {
                      duration: 0.2,
                      ease: 'easeOut',
                    },
                  }}
                >
                  <Icon icon="skill-icons:wordpress" width="60" height="50" />
                </motion.div>
                <motion.div
                  animate={{
                    y: [0, -20, 0, -10, 0],
                    rotate: [0, -5, 5, -5, 0],
                  }}
                  whileHover={{
                    scale: 1.2,
                    y: 0,
                    rotate: 0,
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    y: {
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 0.8,
                    },
                    rotate: {
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 0.8,
                    },
                    scale: {
                      duration: 0.3,
                    },
                  }}
                >
                  <Icon icon="tabler:seo" width="60" height="50" />
                </motion.div>
                <motion.div
                  animate={{
                    opacity: [1, 0.3, 1],
                  }}
                  whileHover={{
                    opacity: 1,
                    scale: 1.1,
                    transition: {
                      duration: 0.15,
                    },
                  }}
                  transition={{
                    opacity: {
                      duration: 1.6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                    scale: {
                      duration: 0.1,
                      ease: 'easeOut',
                    },
                  }}
                >
                  <Icon icon="logos:google-analytics" width="60" height="50" />
                </motion.div>
                <motion.div
                  animate={{
                    scale: [1, 1.1, 0.95, 1.05, 1],
                    y: [0, -5, 5, -3, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                    ease: 'easeInOut',
                  }}
                >
                  <Icon icon="fa-brands:elementor" width="60" height="50" />
                </motion.div>
              </Box>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} mt={{ xs: 1, md: 0 }}>
            <Paper
              elevation={5}
              sx={{
                backdropFilter: 'blur(8px)',
                margin: 4,
                borderRadius: 1,
              }}
            >
              <Typography variant={'h1'} fontWeight="bold" p={2}>
                {t('coding')}
              </Typography>
              <Box
                dir="ltr"
                gap={2}
                display="grid"
                gridTemplateColumns="repeat(4, auto)"
                pl={1}
                pt={6}
                justifyContent="center"
                height={'200px'}
              >
                <motion.div
                  animate={{
                    opacity: [1, 0.3, 1],
                  }}
                  whileHover={{
                    opacity: 1,
                    scale: 1.1,
                  }}
                  transition={{
                    opacity: {
                      duration: 1.6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                    scale: {
                      duration: 0.2,
                    },
                  }}
                >
                  <Icon icon="devicon:react-wordmark" width="60" height="50" />
                </motion.div>
                <motion.div
                  animate={{
                    y: [0, -20, 0, -10, 0],
                    rotate: [0, -5, 5, -5, 0],
                  }}
                  whileHover={{
                    scale: 1.2,
                    y: 0,
                    rotate: 0,
                    transition: {
                      duration: 0.3,
                    },
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 0.8,
                    ease: 'easeInOut',
                  }}
                >
                  <Icon icon="logos:nextjs" width="60" height="50" />
                </motion.div>
                <motion.div
                  animate={{ rotateY: 360 }}
                  whileHover={{ scale: 1.2 }}
                  transition={{
                    rotateY: {
                      repeat: Infinity,
                      duration: 4,
                      ease: 'linear',
                    },
                    scale: {
                      type: 'tween',
                      stiffness: 300,
                    },
                  }}
                >
                  <Icon
                    icon="simple-icons:mui"
                    width="60"
                    height="50"
                    style={{ color: '#1b54bf' }}
                  />
                </motion.div>
                <motion.div
                  animate="idle"
                  whileHover="hover"
                  variants={{
                    idle: {
                      scale: [1, 1.1, 0.95, 1.05, 1],
                      y: [0, -5, 5, -3, 0],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 0.5,
                        ease: 'easeInOut',
                      },
                    },
                    hover: {
                      scale: 1.2,
                      y: 0,
                      transition: {
                        type: 'tween',
                        duration: 0.3,
                        ease: 'easeInOut',
                      },
                    },
                  }}
                >
                  <Icon
                    icon="flowbite:api-key-outline"
                    width="60"
                    height="50"
                    style={{ color: '#bf865c' }}
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <Icon icon="logos:react-query" width="90" height="30" />
                </motion.div>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </motion.div>
    </>
  );
}
