'use client';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Divider,
} from '@mui/material';
import Link from 'next/link';

export default function PortfolioPage() {
  const projects = [
    {
      title: 'نمونه‌کار شماره ۱',
      description: 'وبسایت  تولید کود و خاک  ',
      image: '/m-ares.png',
      link: 'https://www.aresagro.ir',
    },
    {
      title: 'نمونه‌کار شماره ۲',
      description: 'وبسایت رزومه ای مینا هاشمی',
      image: '/m-mina.png',
      link: 'https://minahashemicoach.ir',
    },
    {
      title: 'نمونه‌کار شماره ۳',
      description: 'وبسایت رزومه ای ورزشکار ملی ',
      image: '/m-ali.png',
      link: 'https://aliseyyedi.com',
    },
    {
      title: 'نمونه‌کار شماره ۴',
      description: 'وبسایت کارواش کارویچ',
      image: '/m-carvich.png',
      link: 'https://carvich.ir',
    },
    {
      title: 'نمونه‌کار شماره ۵',
      description: 'وبسایت فروشگاه تردمیل شهر ورزش',
      image: '/m-sport.png',
      link: 'https://sportcity2030.ir',
    },
    {
      title: 'نمونه‌کار شماره ۶',
      description: 'وبسایت رزومه ای احسان باقرزاده',
      image: '/m-ehsan.png',
      link: 'https://ehsanbagherzade.ir',
    },
  ];

  return (
    <Box width={'100%'} maxWidth={'1280px'} margin={'auto'} px={1} my={12}>
      <Typography variant={'h2'} my={4} px={2}>
        نمونه کار های من
      </Typography>
      <Grid container spacing={6}>
        {projects.map((project, index) => (
          <Grid size={12} key={index} px={2}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'row',
                borderRadius: 4,
              }}
              elevation={4}
            >
              {/* تصویر */}
              <CardMedia
                component="img"
                image={project.image}
                alt={project.title}
                sx={{ objectFit: 'cover', width: '35%' }}
              />

              {/* محتوای کارت */}
              <CardContent
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: '#fff3f3',
                }}
              >
                <Box>
                  <Typography
                    mb={2}
                    variant="h5"
                    fontWeight="bold"
                    color="#ab5232"
                    gutterBottom
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    fontWeight={'bold'}
                    style={{ fontSize: 22 }}
                    color="text.secondary"
                  >
                    {project.description}
                  </Typography>
                </Box>

                <Box>
                  <Divider />

                  <Button
                    component={Link}
                    href={project.link}
                    variant="contained"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      marginTop: 2,
                      color: 'white',
                      backgroundColor: '#ab5232',
                      '&:hover': { backgroundColor: '#923f26' },
                    }}
                  >
                    مشاهده
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
