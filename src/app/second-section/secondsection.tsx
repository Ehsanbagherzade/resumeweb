'use client';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import palette from '@/theme/color';
import { Icon } from '@iconify/react';
import { JSX } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslation } from '@/contexts/usetranslation';

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

interface CustomButtonProps {
  text: string;
  icon: string;
}

export default function SecondSection(): JSX.Element {
  const { t, language } = useTranslation();

  const CustomButton = ({ text, icon }: CustomButtonProps): JSX.Element => (
    <Button
      size={'large'}
      sx={{
        color: '#ab5232',
        gap: 1,
        transition: 'all 0.2s ease-in-out',
        fontFamily:
          language === 'en' ? 'Inter, sans-serif' : 'IranSans, sans-serif',
        '&:hover': {
          backgroundColor: 'transparent',
          transform: 'scale(1.05)',
          color: '#662106',
        },
      }}
      startIcon={<Icon icon={icon} />}
    >
      {text}
    </Button>
  );
  const featureItems: FeatureItem[] = [
    {
      icon: 'bxl:react',
      title: t('reactDeveloper'),
      description: t('reactDescription'),
    },
    {
      icon: 'ri:nextjs-line',
      title: t('nextJsDeveloper'),
      description: t('nextJsDescription'),
    },
    {
      icon: 'devicon-plain:wordpress-wordmark',
      title: t('wordpressDeveloper'),
      description: t('wordpressDescription'),
    },
  ];

  return (
    <>
      <Grid
        id="my-works"
        pt={4}
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
            mb={{ xs: 33, sm: 22, md: 12 }}
            justifyContent="center"
          >
            <Button
              size="large"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f2e7e5',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-10px)',
                },
              }}
            >
              <Typography variant="h4" color={palette.secondary.main}>
                {t('servicesTitle')}
              </Typography>
            </Button>
            <Grid
              container
              width={'100%'}
              height={150}
              rowSpacing={6}
              columnSpacing={2}
              mt={5}
            >
              {featureItems.map((item: FeatureItem, index: number) => (
                <Grid
                  container
                  size={{ xs: 12, sm: 6, md: 4 }}
                  px={{ xs: 1, sm: 0 }}
                  key={index}
                >
                  <Grid size={3} mt={1}>
                    <Icon
                      icon={item.icon}
                      width={68}
                      height={68}
                      style={{ color: '#ab5232' }}
                    />
                  </Grid>
                  <Grid size={9}>
                    <Typography mb={2} fontWeight="bold" variant="h4">
                      {item.title}
                    </Typography>
                    <Typography
                      variant="h5"
                      color={palette.primary.contrastText}
                    >
                      {item.description}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Grid container spacing={1}>
            <Grid
              size={{ xs: 12, sm: 12, md: 5, lg: 4, xl: 3 }}
              px={{ sm: '25%', md: 0 }}
            >
              <Image
                src="/me-2.png"
                alt={'sss'}
                width={600}
                height={500}
                style={{
                  width: '100%',
                  maxHeight: '600px',
                  height: window.innerWidth < 768 ? '100%' : '95%',
                  objectFit: window.innerWidth < 768 ? 'fill' : 'cover',
                  borderRadius: '3px',
                }}
              />
            </Grid>
            <Grid p={2} size={{ xs: 12, sm: 12, md: 7, lg: 8, xl: 9 }}>
              <Typography
                variant={'h2'}
                fontWeight={'bold'}
                mr={{ xs: -1, sm: 'auto', md: 5 }}
              >
                {t('biographyTitle')}
              </Typography>
              <Typography
                ml={{ md: 4, lg: 12 }}
                mt={4}
                lineHeight={'1.9'}
                variant={'h5'}
                color={palette.primary.contrastText}
                mr={{ xs: -1, sm: 'auto', md: 5 }}
                sx={{
                  fontFamily:
                    language === 'en'
                      ? 'Inter, sans-serif'
                      : 'IranSans, sans-serif',
                }}
              >
                {t('biographyText1')}
                <br /> <br />
                {t('biographyText2')}
              </Typography>
              <Grid container mr={{ xs: -2, sm: 'auto', md: 2 }} mt={4}>
                <Grid size={{ xs: 6, sm: 6, md: 6, lg: 3 }}>
                  <CustomButton
                    text={t('fullName')}
                    icon="fluent:person-24-filled"
                  />
                  <br />
                  <CustomButton text={t('birthDate')} icon={'uiw:date'} />
                  <br />
                  <CustomButton
                    text={t('fieldOfStudy')}
                    icon={'basil:university-outline'}
                  />
                </Grid>
                <Grid size={{ xs: 6, sm: 6, md: 6, lg: 9 }}>
                  <CustomButton
                    text="ehsantv6@gmail.com"
                    icon={'line-md:email-arrow-up-filled'}
                  />
                  <br />
                  <CustomButton
                    text={t('location')}
                    icon={'line-md:map-marker-loop'}
                  />
                  <br />
                  <CustomButton
                    text={t('technologies')}
                    icon={'catppuccin:workflow'}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </motion.div>
      </Grid>
    </>
  );
}
