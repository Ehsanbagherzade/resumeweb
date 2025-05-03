'use client';
import {
  Modal,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Tooltip,
} from '@mui/material';
import Link from 'next/link';
import { useTranslation } from '@/contexts/usetranslation';

interface ModalItem {
  name: string;
  url: string;
}

interface CustomModalProps {
  open: boolean;
  onCloseAction: () => void;
  items: ModalItem[];
  title: string;
}

const modalStyle = (language: string) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'rgba(102,33,6,0.16)',
  backdropFilter: 'blur(9px)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  border: '1px solid rgba(255, 255, 255, 1)',
  p: 4,
  borderRadius: 2,
  textAlign: language === 'fa' ? 'right' : 'left',
  direction: language === 'fa' ? 'rtl' : 'ltr',
});

export const CustomModal = ({
  open,
  onCloseAction,
  items,
  title,
}: CustomModalProps) => {
  const { language } = useTranslation();
  return (
    <Modal
      open={open}
      onClose={onCloseAction}
      aria-labelledby="modal-title"
      disableScrollLock={false}
    >
      <Box sx={modalStyle(language)}>
        <Typography variant="h2" fontWeight="bold" id="modal-title" mb={3}>
          {title}
        </Typography>
        <List>
          {items.map((item: ModalItem, index: number) => (
            <ListItem key={index} sx={{ px: 0 }}>
              <Tooltip title={item.url} placement="top" arrow>
                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <ListItemText
                    primary={item.name}
                    sx={{
                      '& .MuiListItemText-primary': {
                        color: 'white',
                        padding: '8px 16px',
                        fontSize: '21px',
                        '&:hover': {
                          color: 'yellowgreen',
                        },
                      },
                    }}
                  />
                </Link>
              </Tooltip>
            </ListItem>
          ))}
        </List>
        <Button
          onClick={onCloseAction}
          variant="contained"
          color="error"
          sx={{ mt: 3, float: language === 'fa' ? 'left' : 'right' }}
        >
          {language === 'en' ? 'Close' : 'بستن'}
        </Button>
      </Box>
    </Modal>
  );
};
