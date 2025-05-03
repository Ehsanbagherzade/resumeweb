import * as React from 'react';
import LinearProgress, {
  LinearProgressProps,
} from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

type Props = LinearProgressProps & {
  value: number;
  label?: string;
};

function LinearProgressWithLabel({ value, ...props }: Props) {
  return (
    <Box width={'100%'}>
      <Box gap={1} sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%' }}>
          <LinearProgress
            variant="determinate"
            value={value}
            sx={{
              height: 9,
              borderRadius: 1,
              backgroundColor: '#eee',
              '& .MuiLinearProgress-bar': {
                backgroundColor: 'rgba(203,16,16,0.73)',
              },
            }}
            {...props}
          />
        </Box>
        <Box>
          <Typography variant="h5" sx={{ color: 'white' }}>
            {`${Math.round(value)}%`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default LinearProgressWithLabel;
