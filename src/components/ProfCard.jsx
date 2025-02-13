import { Typography } from 'antd';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

function ProfCard({ title, description, isMobile, isMiddle }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        maxWidth: 360,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'row' : 'column',
          alignItems: (isMiddle || isMobile) && 'center',
          marginBottom: 20,
        }}
      >
        <FaCheckCircle
          style={{
            color: 'rgb(255, 193, 30)',
            width: 60,
            height: 60,
            marginRight: (isMiddle || isMobile) && 20,
            marginBottom: 20,
          }}
        />
        <Typography.Title
          style={{
            fontSize: isMobile ? 18 : 20,
            color: '#615f5f',
            marginBottom: 20,
            fontWeight: 700,
          }}
        >
          {title}
        </Typography.Title>
      </div>
      <Typography.Text
        style={{
          fontSize: isMobile ? 12 : isMiddle ? 14 : 18,
          fontWeight: 300,
          color: '#615f5f',
        }}
      >
        {description}
      </Typography.Text>
    </div>
  );
}

export default ProfCard;
