import React from 'react';
import { Tooltip, TooltipProps } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LinearProgressWithLabel from '@/components/progressbar/progressbar';
import { useTranslation } from '@/contexts/usetranslation';

type TooltipCustomProps = TooltipProps & {
  title: string;
  value?: number;
  children: React.ReactElement;
};

export default function TooltipCustom({
  title,
  value,
  children,
  ...tooltipProps
}: TooltipCustomProps) {
  const { language } = useTranslation();
  return (
    <Tooltip
      placement={'top'}
      arrow
      {...tooltipProps}
      slotProps={{
        tooltip: {
          sx: {
            background: 'rgba(19,30,82,0.32)',
            height: '70px',
            backdropFilter: 'blur(3px)',
            borderRadius: '4px',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            '& .MuiTypography-root': {
              fontFamily:
                language === 'en'
                  ? 'Inter, sans-serif'
                  : 'IranSans, sans-serif',
            },
          },
        },
      }}
      title={
        <Box
          sx={{
            p: 1,
            minWidth: 150,
          }}
        >
          <Typography fontWeight="bold" variant="h6" gutterBottom>
            {title}
          </Typography>
          {typeof value === 'number' && (
            <LinearProgressWithLabel value={value} />
          )}
        </Box>
      }
    >
      {children}
    </Tooltip>
  );
}
