import React from 'react';
import { Paper, Card, Typography } from '@mui/material';
import { styled } from '@mui/system';

const PageHeaderRoot = styled(Paper)({
  backgroundColor: '#fdfdff',
  padding: (theme) => theme.spacing(4),
  display: 'flex',
  marginBottom: (theme) => theme.spacing(2),
});

const PageIcon = styled(Card)({
  display: 'inline-block',
  padding: (theme) => theme.spacing(2),
  color: '#3c44b1',
});

const PageTitle = styled('div')({
  paddingLeft: (theme) => theme.spacing(4),
  '& .MuiTypography-subtitle2': {
    opacity: '0.6',
  },
});

export default function PageHeader(props) {
  const { title, subTitle, icon } = props;

  return (
    <PageHeaderRoot elevation={0} square>
      <PageIcon>{icon}</PageIcon>
      <PageTitle>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="subtitle2" component="div">
          {subTitle}
        </Typography>
      </PageTitle>
    </PageHeaderRoot>
  );
}

