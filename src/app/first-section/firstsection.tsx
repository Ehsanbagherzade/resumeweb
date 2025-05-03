import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { Box, Button, Fade, Typography } from '@mui/material';
import palette from '@/theme/color';
import { Icon } from '@iconify/react';
import { useTranslation } from '@/contexts/usetranslation';

export default function FirstSection() {
  type AppButton = {
    text: string;
    icon: string;
    href: string;
    outlined: boolean;
    disabled?: boolean;
    onClick?: () => void;
  };
  const { t, language } = useTranslation();

  const buttons: AppButton[] = [
    {
      text: t('contactButton'),
      icon: 'line-md:phone-call-loop',
      href: 'tel:+989375865904',
      outlined: true,
    },
    {
      text: t('resumeButton'),
      icon: 'zondicons:portfolio',
      href: 'https://www.linkedin.com/in/ehsan-bagherzade-089060225',
      outlined: false,
    },
  ];
  return (
    <>
      <Fade in={true} timeout={1000} id="about-me">
        <Grid
          pb={13}
          sx={{
            backgroundImage: `url('/back-first-section.png')`,
            backgroundSize: '45%',
            backgroundPosition: '100% 10%',
            backgroundRepeat: 'no-repeat',
            '@media (max-width: 600px)': {
              backgroundPosition: '100% 22%',
              backgroundSize: '55%',
              paddingBottom: 6,
            },
          }}
        >
          <Grid
            container
            spacing={2}
            m={'auto'}
            pt={11}
            maxWidth={'1280px'}
            sx={{
              backgroundImage: `url('/back-first-section2.png')`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '45% 100%',
              '@media (max-width: 600px)': {
                backgroundSize: '25%',
                backgroundPosition: '45% 95%',
              },
              '@media (max-width: 1050px)': {
                backgroundSize: '17%',
              },
            }}
          >
            <Grid size={6} pr={1} pl={language === 'en' ? 1 : 0}>
              <Box
                sx={{
                  mt: { xs: 7.5, sm: 15, md: 23, lg: 30 },
                }}
              >
                <Typography color={palette.text.primary} variant="body1">
                  {t('greeting')}
                  <Box component="span" sx={{ color: palette.secondary.main }}>
                    {t('name')}
                  </Box>
                  {t('no')}
                </Typography>
                <Typography
                  variant="body1"
                  color={palette.text.primary}
                  sx={{
                    mb: { xs: 2, sm: 2, md: 4.5, lg: 4.5 },
                  }}
                >
                  {t('role')}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {t('description')}
                </Typography>
              </Box>
              <Box display="flex" gap={2} mt={5}>
                {buttons.map((btn, index) => (
                  <Button
                    href={btn.href}
                    key={index}
                    variant={btn.outlined ? 'outlined' : 'contained'}
                    endIcon={
                      <Box
                        component={Icon}
                        icon={btn.icon}
                        sx={{
                          width: { xs: '11px', md: '18px' },
                          height: { xs: '11px', md: '18px' },
                        }}
                      />
                    }
                    sx={(theme) => ({
                      gap: '12px',
                      fontSize: language === 'fa' ? '1.3rem' : '1.15',
                      padding: '8px 20px',
                      color: btn.outlined ? palette.secondary.main : 'white',
                      backgroundColor: btn.outlined
                        ? 'transparent'
                        : palette.secondary.main,
                      border: `1px solid ${palette.secondary.main}`,
                      '&:hover': {
                        backgroundColor: btn.outlined
                          ? palette.secondary.main
                          : 'white',
                        color: btn.outlined ? 'white' : palette.secondary.main,
                        borderColor: palette.secondary.main,
                      },
                      [theme.breakpoints.down('md')]: {
                        fontSize: '0.7rem',
                        padding: '6px 10px',
                      },
                      [theme.breakpoints.down('sm')]: {
                        fontSize: '0.6rem',
                        padding: '4px 5px',
                      },
                    })}
                  >
                    {btn.text}
                  </Button>
                ))}
              </Box>
            </Grid>
            <Grid
              size={6}
              pl={1}
              pr={language === 'en' ? 1 : 0}
              pb={7}
              sx={{
                '@media (min-width: 600px)': {
                  paddingX: '3%',
                },
              }}
            >
              <Image
                src="/me-main.jpg"
                alt="عکس صفحه اصلی"
                width={500}
                height={670}
                priority
                style={{
                  marginTop: '5px',
                  width: '100%',
                  maxHeight: '670px',
                  height: '100%',
                  borderRadius: '600px 600px 0 0',
                  objectFit: 'cover',
                  boxShadow: ' -16px 12px 35px 25px rgba(0, 0, 0, 0.11)',
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Fade>
    </>
  );
}
