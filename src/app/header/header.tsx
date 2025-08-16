'use client';
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  useTheme,
  IconButton,
  Drawer,
  useMediaQuery,
  Divider,
  Chip,
  Theme,
  NoSsr,
} from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import ScrollHandler from '@/components/scroll-handler';
import { useTranslation } from '@/contexts/usetranslation';
import { TranslationKeys } from '@/contexts/types/types';
import LanguageSwitcher from '@/components/langswitcher';

export default function Header() {
  const theme: Theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  const menuItems: { key: TranslationKeys; href: string }[] = [
    { key: 'aboutMe', href: '/#about-me' },
    { key: 'siteExample', href: '/siteexample' },
    { key: 'experience', href: '/#experience' },
    { key: 'skills', href: '/#skills' },
    { key: 'contactWays', href: '/#contactWays' },
  ];
  const infoItems: { key: TranslationKeys; href: string; icon: string }[] = [
    {
      key: 'call',
      href: 'tel:+989981052756',
      icon: 'emojione:call-me-hand-light-skin-tone',
    },
    {
      key: 'linkedin',
      href: 'https://www.linkedin.com/in/ehsan-bagherzade-089060225',
      icon: 'skill-icons:linkedin',
    },
    {
      key: 'instagram',
      href: 'https://www.instagram.com/__ehsanb_',
      icon: 'skill-icons:instagram',
    },
    {
      key: 'email',
      href: 'mailto:ehsantv6@gmail.com',
      icon: 'logos:google-gmail',
    },
  ];
  const { t, language } = useTranslation();

  return (
    <NoSsr>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#fbf6f3',
          boxShadow: hasShadow
            ? theme.shadows[5]
            : '0px 12px 20px 1px rgba(0, 0, 0, 0.06)',
        }}
      >
        <Box sx={{ maxWidth: '1280px', width: '100%', margin: 'auto' }}>
          <Toolbar
            disableGutters
            sx={{ justifyContent: 'space-between', px: 1 }}
          >
            {isMobile && (
              <IconButton
                edge="start"
                color="inherit"
                onClick={(): void => setDrawerOpen(true)}
                sx={{ color: theme.palette.text.secondary }}
              >
                <Icon icon="fa6-solid:bars-staggered" width="30" height="30" />
              </IconButton>
            )}
            <Typography
              variant={language === 'fa' ? 'h4' : 'h5'}
              fontWeight={language === 'en' ? 'bold' : 'normal'}
              sx={{
                flexGrow: 1,
                color: theme.palette.text.secondary,
                textAlign: isMobile
                  ? 'center'
                  : language === 'fa'
                    ? 'right'
                    : 'left',
              }}
            >
              <Link href={'/'}>{t('siteTitle')} </Link>
            </Typography>
            <LanguageSwitcher />

            {!isMobile &&
              menuItems.map(
                (
                  item: { key: TranslationKeys; href: string },
                  index: number
                ) => (
                  <Button
                    key={index}
                    sx={{
                      padding: { md: '8px 8px' },
                      marginX: '0',
                      backgroundColor: 'transparent',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Link href={item.href} passHref>
                      {item.key === 'siteExample' && (
                        <Icon
                          icon="clarity:new-solid"
                          width="40px"
                          height="40px"
                          style={{
                            color: 'red',
                            position: 'absolute',
                            top: -18,
                            right: 2,
                            transform: 'rotate(10deg)',
                          }}
                        />
                      )}
                      <Typography
                        sx={{
                          fontSize: { md: '16px', lg: '16px' },
                          color: theme.palette.text.secondary,
                          '&:hover': {
                            transform: 'scale(1.1)',
                            cursor: 'pointer',
                            color: 'orange',
                          },
                        }}
                      >
                        {t(item.key)}
                      </Typography>
                    </Link>
                  </Button>
                )
              )}
          </Toolbar>
        </Box>
      </AppBar>
      <ScrollHandler onScroll={setHasShadow} />
      <Drawer
        anchor={language === 'fa' ? 'right' : 'left'}
        open={drawerOpen}
        onClose={(): void => setDrawerOpen(false)}
        transitionDuration={{
          enter: 1,
          exit: 1,
        }}
      >
        <Box
          dir={language === 'fa' ? 'rtl' : 'ltr'}
          sx={{
            width: 250,
            padding: 2,
            background: theme.palette.background.default,
            height: '100%',
          }}
        >
          <Typography
            mb={1}
            pr={2}
            color={theme.palette.text.secondary}
            variant="h2"
          >
            {t('menu')}
          </Typography>
          {menuItems.map(
            (item: { key: TranslationKeys; href: string }, index: number) => (
              <Link key={index} href={item.href} passHref>
                <Divider />
                <Box
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                  onClick={(): void => setDrawerOpen(false)}
                >
                  {item.key === 'siteExample' && (
                    <Icon
                      icon="clarity:new-solid"
                      width="40px"
                      height="40px"
                      style={{
                        color: 'red',
                        position: 'absolute',
                        top: -8,
                        left: language === 'en' ? 160 : 0,
                        transform:
                          language === 'en'
                            ? 'rotate(10deg)'
                            : 'rotate(-10deg)',
                      }}
                    />
                  )}
                  <Typography
                    p={1}
                    m={1}
                    sx={{
                      color: theme.palette.text.secondary,
                      width: '100%',
                      display: 'block',
                      '&:hover': {
                        color: 'orange',
                        cursor: 'pointer',
                      },
                    }}
                    onClick={(): void => setDrawerOpen(false)}
                  >
                    {t(item.key)}
                  </Typography>{' '}
                </Box>
              </Link>
            )
          )}
          <Divider
            sx={{
              marginBottom: '15px',
              marginTop: '15px',
            }}
          >
            <Chip
              color="info"
              label={t('contactWays')}
              size="small"
              sx={{
                '&:hover': {
                  transform: 'scale(1.1)',
                },
                transition: 'transform 0.2s ease-in-out',
              }}
            />
          </Divider>

          {infoItems.map(
            (
              item: { key: TranslationKeys; href: string; icon: string },
              index: number
            ) => (
              <Box py={1} key={index}>
                <Link href={item.href}>
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
                    <Typography>{t(item.key)}</Typography>
                  </Box>
                </Link>
              </Box>
            )
          )}
        </Box>
      </Drawer>
    </NoSsr>
  );
}
