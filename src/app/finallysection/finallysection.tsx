import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useTranslation } from '@/contexts/usetranslation';

export default function FinallySection() {
  const { t, language } = useTranslation();
  const infoItems: { text: string; href: string; icon: string }[] = [
    {
      text: t('call'),
      href: 'tel:+989375865904',
      icon: 'emojione:call-me-hand-light-skin-tone',
    },
    {
      text: t('linkedin'),
      href: 'https://www.linkedin.com/in/ehsan-bagherzade-089060225',
      icon: 'skill-icons:linkedin',
    },
    {
      text: t('instagram'),
      href: 'https://www.instagram.com/__ehsanb_',
      icon: 'skill-icons:instagram',
    },
    {
      text: t('email'),
      href: 'mailto:ehsantv6@gmail.com',
      icon: 'logos:google-gmail',
    },
    {
      text: language === 'fa' ? 'واتساپ' : 'Whatsup',
      href: 'https://wa.me/989375865904',
      icon: 'logos:whatsapp-icon',
    },
  ];
  return (
    <>
      <Box
        id="contactWays"
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.86), rgba(0, 0, 0, 0.86)), url('/fnsec.jpg')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Typography
          p={4}
          align="center"
          variant="h1"
          fontWeight="bold"
          sx={{ color: 'white' }}
        >
          {t('contactWays')}
        </Typography>
        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
          {infoItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  '&:hover': {
                    transform: 'scale(1.1)',
                    cursor: 'pointer',
                    color: 'orange',
                  },
                  transition: 'transform 0.2s ease-in-out',
                }}
              >
                <Icon icon={item.icon} width="24" height="24" />
                <Typography variant={'h5'} sx={{ color: 'white' }}>
                  {item.text}
                </Typography>
              </Box>
            </Link>
          ))}
        </Box>
        <br />
        <hr />
        <Box>
          <Typography
            p={1}
            align={'center'}
            variant={'h5'}
            sx={{
              color: 'white',
              fontWeight: language === 'en' ? 'bold' : 'normal',
            }}
          >
            {language === 'fa'
              ? 'طراحی توسط احسان باقرزاده'
              : 'Design by Ehsan Bagherzadeh'}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
