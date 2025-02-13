import { Card, Button, Typography } from 'antd';

const ServiceCard = ({ img, price, title, description }) => {
  return (
    <Card
      style={{
        width: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        position: 'relative',
      }}
    >
      <img src={img} style={{ width: '100%' }} />
      <span style={{ color: '#f0b105', fontSize: 30, fontWeight: 700 }}>
        от {price}
      </span>
      <span
        style={{
          fontWeight: 400,
          fontSize: 10,
          position: 'absolute',
          width: 50,
          height: 50,
          right: 0,
          color: 'white',
          top: 0,
          textAlign: 'center',
          background: '#ff4a4a',
          borderRadius: 50,
          padding: '16px 10px',
        }}
      >
        - 15%
      </span>
      <Typography.Title
        style={{
          fontSize: 20,
          color: '#333333',
          marginTop: 12,
          textTransform: 'uppercase',
        }}
      >
        {title}
      </Typography.Title>
      <Typography.Text
        style={{
          color: '#333333',
          fontSize: 15,
          marginTop: 8,
          fontWeight: 300,
        }}
      >
        {description}
      </Typography.Text>
      <Button
        type="default"
        href="tel:+998954050303"
        style={{
          color: '#333333',
          background: '#ffc11e',
          borderRadius: 10,
          width: '100%',
          height: 35,
          marginTop: 20,
        }}
      >
        Вызвать мастера
      </Button>
    </Card>
  );
};

export default ServiceCard;
