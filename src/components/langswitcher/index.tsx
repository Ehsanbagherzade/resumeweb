import {
  Box,
  Button,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from '@/contexts/usetranslation';
import { Icon } from '@iconify/react';

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useTranslation();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (lang?: 'fa' | 'en') => {
    if (lang) {
      changeLanguage(lang);
    }
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        sx={{
          color: theme.palette.text.secondary,
          marginLeft: 2,
          '&:hover': {
            transform: 'scale(1.1)',
            color: 'orange',
          },
        }}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <Icon
            icon={
              language === 'fa'
                ? 'emojione:flag-for-iran'
                : 'emojione:flag-for-united-kingdom'
            }
            width="24"
          />
          <Typography variant="h6" fontWeight={'bold'}>
            {language === 'fa' ? 'FA' : 'EN'}
          </Typography>
        </Box>
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={() => handleClose()}>
        <MenuItem onClick={() => handleClose('fa')}>
          <Typography variant="h5">فارسی</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleClose('en')}>
          <Typography variant="h5">English</Typography>
        </MenuItem>
      </Menu>
    </>
  );
}
