'use client';
import { motion } from 'framer-motion';
import { Box, Tooltip, Typography, Grid } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineContent,
  TimelineConnector,
  TimelineDot,
  timelineItemClasses,
} from '@mui/lab';
import Image from 'next/image';
import { useState } from 'react';
import { CustomModal } from '@/components/modal/rendermodal';
import { useTranslation } from '@/contexts/usetranslation';

export default function ThirdSection() {
  const { t, language } = useTranslation();

  const [openModalRoshan, setOpenModalRoshan] = useState(false);
  const [openFreelanceModal, setOpenFreelanceModal] = useState(false);

  const handleOpenRoshan = () => setOpenModalRoshan(true);
  const handleCloseRoshan = () => setOpenModalRoshan(false);

  const handleOpenFreelance = () => setOpenFreelanceModal(true);
  const handleCloseFreelance = () => setOpenFreelanceModal(false);

  interface portfolioItemsType {
    name: string;
    url: string;
  }

  const portfolioItems: portfolioItemsType[] = [
    { name: t('chapDeniz'), url: 'https://ChapDeniz.com' },
    { name: t('hearingAid'), url: 'https://kharidsamak24.com' },
    { name: t('heydariSpareParts'), url: 'https://yadakiheydari.com' },
  ];
  const freeLanceWork: portfolioItemsType[] = [
    { name: t('aresAgro'), url: 'https://AresAgro.ir' },
    { name: t('carvich'), url: 'https://carvich.ir' },
    { name: t('lavacorn'), url: 'https://lavacorn.ir' },
  ];
  return (
    <>
      <Grid
        id="experience"
        pt={8}
        sx={{
          background:
            'linear-gradient(180deg, rgba(248,240,237,1) 22%, rgba(250,247,247,1) 49%, rgba(255,255,255,1) 87%)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Grid
            container
            m={'auto'}
            maxWidth={'1280px'}
            mb={{ xs: 10, sm: 11, md: 12 }}
            justifyContent="center"
          >
            <Grid
              pr={2}
              pl={language === 'en' ? 1 : 0}
              size={{ xs: 12, sm: 12, md: 6 }}
            >
              <Typography mb={2} variant={'h2'}>
                {t('educationTitle')}
              </Typography>
              <Grid p={1}>
                <Timeline
                  position={language === 'fa' ? 'right' : 'left'}
                  sx={{
                    direction: language === 'fa' ? 'rtl' : 'ltr',
                    [`& .${timelineItemClasses.root}:before`]: {
                      display: 'none',
                    },
                  }}
                >
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot
                        sx={{
                          width: 20,
                          height: 20,
                          outline: '6px solid #fcecc0',
                        }}
                        color="secondary"
                      />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent
                      sx={{
                        textAlign: language === 'fa' ? 'right' : 'left',
                      }}
                      variant="h2"
                      mb={4}
                    >
                      {t('bachelorsDegree')}
                      <Typography variant="h4" mb={1} mt={1}>
                        {t('bojnourdUniversity')}
                      </Typography>
                      <Typography variant="h4" mb={1}>
                        {t('computerScience')}
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{
                          fontFamily:
                            language === 'en'
                              ? 'Inter, sans-serif'
                              : 'IranSans, sans-serif',
                        }}
                      >
                        {t('studyPeriodBachelor')}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot
                        sx={{
                          width: 20,
                          height: 20,
                          outline: '6px solid #fcecc0',
                        }}
                        color="secondary"
                      />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent
                      variant="h2"
                      sx={{
                        textAlign: language === 'fa' ? 'right' : 'left',
                      }}
                      mb={2}
                    >
                      {t('mastersDegree')}
                      <Typography variant="h4" mb={1} mt={1}>
                        {t('hakimSabzevariUniversity')}
                      </Typography>
                      <Typography variant="h4" mb={1}>
                        {t('computerScienceDecision')}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily:
                            language === 'en'
                              ? 'Inter, sans-serif'
                              : 'IranSans, sans-serif',
                        }}
                        variant="h4"
                      >
                        {t('studyPeriodMaster')}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </Grid>
            </Grid>
            <Grid
              pr={2}
              pl={language === 'en' ? 1 : 0}
              pt={{ xs: 5, md: 0 }}
              size={{ xs: 12, sm: 12, md: 6 }}
            >
              <Typography mb={2} variant={'h2'}>
                {t('workExperienceTitle')}
              </Typography>
              <Timeline
                position="right"
                sx={{
                  direction: 'rtl',
                  [`& .${timelineItemClasses.root}:before`]: {
                    display: 'none',
                  },
                }}
              >
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot
                      sx={{
                        width: 20,
                        height: 20,
                        outline: '6px solid #fcecc0',
                      }}
                      color="secondary"
                    />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent
                    variant="h2"
                    sx={{
                      textAlign: language === 'fa' ? 'right' : 'left',
                    }}
                    mb={4}
                  >
                    <Tooltip
                      title={
                        <Box sx={{ p: 1 }}>
                          <Image
                            src="/oghoghpc.png"
                            alt="لوگوی افق رایانه بجنورد"
                            width={150}
                            height={150}
                            style={{ objectFit: 'contain' }}
                          />
                        </Box>
                      }
                      arrow
                      placement="top"
                    >
                      <span style={{ cursor: 'pointer' }}>{t('oghoghPc')}</span>
                    </Tooltip>
                    <Typography variant="h4" mb={1} mt={1}>
                      {t('technicalManager')}
                    </Typography>
                    <Typography variant="h4" mb={1}>
                      {t('software')}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily:
                          language === 'en'
                            ? 'Inter, sans-serif'
                            : 'IranSans, sans-serif',
                      }}
                      variant="h4"
                    >
                      {language === 'en' ? '2019' : '1399'}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot
                      sx={{
                        width: 20,
                        height: 20,
                        outline: '6px solid #fcecc0',
                      }}
                      color="secondary"
                    />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent
                    variant="h2"
                    sx={{
                      textAlign: language === 'fa' ? 'right' : 'left',
                    }}
                    mb={2}
                  >
                    <Tooltip
                      title={
                        <Box sx={{ p: 1 }}>
                          <Image
                            src="/roshan.jpg"
                            alt="لوگوی آژانس روشن"
                            width={150}
                            height={150}
                            style={{ objectFit: 'contain' }}
                          />
                        </Box>
                      }
                      arrow
                      placement="top"
                    >
                      <span style={{ cursor: 'pointer' }}>
                        {t('roshanAgency')}
                      </span>
                    </Tooltip>
                    <Typography variant="h4" mb={1} mt={1}>
                      {t('wordpressDesigner')}
                    </Typography>

                    <motion.div
                      initial={{ opacity: 1 }}
                      whileHover={{
                        opacity: 1,
                      }}
                      style={{
                        display: 'inline-block',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <Typography
                        variant="h4"
                        mb={1}
                        onClick={handleOpenRoshan}
                        sx={{
                          cursor: 'pointer',
                          display: 'inline-block',
                          color: 'transparent',
                          backgroundImage:
                            'linear-gradient(120deg, #8B4513, #D2B48C, #FCECC0)',
                          backgroundSize: '200% auto',
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          animation: 'shine 2s linear infinite',
                          '&:hover': {
                            backgroundPosition: 'right center',
                          },
                          '@keyframes shine': {
                            from: {
                              backgroundPosition: '0% center',
                            },
                            to: {
                              backgroundPosition: '200% center',
                            },
                          },
                        }}
                      >
                        {t('portfolioSamples')}
                      </Typography>
                    </motion.div>
                    <CustomModal
                      open={openModalRoshan}
                      onCloseAction={handleCloseRoshan}
                      items={portfolioItems}
                      title={t('portfolioSamples')}
                    />
                    <Typography
                      sx={{
                        fontFamily:
                          language === 'en'
                            ? 'Inter, sans-serif'
                            : 'IranSans, sans-serif',
                      }}
                      variant="h4"
                    >
                      {language === 'en' ? '2021' : '1401'}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot
                      sx={{
                        width: 20,
                        height: 20,
                        outline: '6px solid #fcecc0',
                      }}
                      color="secondary"
                    />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent
                    variant="h2"
                    sx={{
                      textAlign: language === 'fa' ? 'right' : 'left',
                    }}
                    mb={2}
                  >
                    <span style={{ cursor: 'pointer' }}>
                      {t('hamresantitle')}
                    </span>
                    <Typography variant="h4" mb={2} mt={2}>
                      {t('hamresanjobtitle')}
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily:
                          language === 'en'
                            ? 'Inter, sans-serif'
                            : 'IranSans, sans-serif',
                      }}
                      variant="h4"
                    >
                      {language === 'en' ? '2021-2023' : '1401-1403'}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot
                      sx={{
                        width: 20,
                        height: 20,
                        outline: '6px solid #fcecc0',
                      }}
                      color="secondary"
                    />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent
                    variant="h2"
                    sx={{
                      textAlign: language === 'fa' ? 'right' : 'left',
                    }}
                    mb={2}
                  >
                    <span style={{ cursor: 'pointer' }}>
                      {t('FunglishTitle')}
                    </span>
                    <Typography variant="h4" mb={2} mt={2}>
                      {t('FunglishJobTitle')}
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily:
                          language === 'en'
                            ? 'Inter, sans-serif'
                            : 'IranSans, sans-serif',
                      }}
                      variant="h4"
                    >
                      {language === 'en' ? '2023-2026' : '1401-1404'}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot
                      sx={{
                        width: 20,
                        height: 20,
                        outline: '6px solid #fcecc0',
                      }}
                      color="secondary"
                    />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent
                    variant="h2"
                    sx={{
                      textAlign: language === 'fa' ? 'right' : 'left',
                    }}
                    mb={4}
                  >
                    {t('freelanceProjects')}
                    <Typography variant="h4" mb={2} mt={2}>
                      {t('wordpressDeveloper')}
                    </Typography>
                    <motion.div
                      initial={{ opacity: 1 }}
                      whileHover={{
                        opacity: 1,
                      }}
                      style={{
                        display: 'inline-block',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <Typography
                        variant="h4"
                        mb={1}
                        onClick={handleOpenFreelance}
                        sx={{
                          cursor: 'pointer',
                          display: 'inline-block',
                          color: 'transparent',
                          backgroundImage:
                            'linear-gradient(120deg, #8B4513, #D2B48C, #FCECC0)',
                          backgroundSize: '200% auto',
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          animation: 'shine 2s linear infinite',
                          '&:hover': {
                            backgroundPosition: 'right center',
                          },
                          '@keyframes shine': {
                            from: {
                              backgroundPosition: '0% center',
                            },
                            to: {
                              backgroundPosition: '200% center',
                            },
                          },
                        }}
                      >
                        {t('portfolioSamples')}
                      </Typography>
                    </motion.div>
                    <CustomModal
                      open={openFreelanceModal}
                      onCloseAction={handleCloseFreelance}
                      items={freeLanceWork}
                      title={t('freelanceWorksTitle')}
                    />
                    <Typography
                      sx={{
                        fontFamily:
                          language === 'en'
                            ? 'Inter, sans-serif'
                            : 'IranSans, sans-serif',
                      }}
                      variant="h4"
                    >
                      {t('sinceYear')}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </Grid>
          </Grid>
        </motion.div>
      </Grid>
    </>
  );
}
