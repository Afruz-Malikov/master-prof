import { Flex, Typography } from 'antd';
import React from 'react';

function AdvantageCard({ index, title, description }) {
  return (
    <Flex wrap="wrap" style={{ margin: 10 }}>
      <span
        style={{
          background: '#ffc11e',
          width: 60,
          height: 60,
          borderRadius: 50,
          padding: '16px 0',
          textAlign: 'center',
          marginRight: 20,
          marginBottom: 20,
        }}
      >
        {index}
      </span>
      <div style={{ width: 250 }}>
        <Typography.Title
          style={{
            fontSize: 20,
            color: '#333333',
            fontWeight: 600,
            marginBottom: 13,
          }}
        >
          {title}
        </Typography.Title>
        <Typography.Text
          style={{
            fontSize: 18,
            fontWeight: 300,
            color: '#333333',
            width: 110,
          }}
        >
          {description}
        </Typography.Text>
      </div>
    </Flex>
  );
}

export default AdvantageCard;
